var cheerio = require("cheerio");
if (typeof cheerio != "function") cheerio = require("cheerio").default;

const glob = require("glob-promise");
const camelcase = require("camelcase");
const fs = require("fs").promises;
const path = require("path");

async function getIconFiles(content) {
  return typeof content.files === "string" ?
    glob(content.files) :
    content.files();
}
async function convertIconData(svg, multiColor) {
  const $svg = cheerio.load(svg, {
    xmlMode: true
  })("svg");

  // filter/convert attributes
  // 1. remove class attr
  // 2. convert to camelcase ex: fill-opacity => fillOpacity
  const attrConverter = (
    /** @type {{[key: string]: string}} */
    attribs,
    /** @type string */
    tagName
  ) => {
    return (
      attribs &&
      Object.keys(attribs)
      .filter((name) => {
        const params = multiColor ? [] : [
          "xmlns",
          "xmlns:xlink",
          "xml:space",
          "width",
          "height",
          "fill",
          "stroke",
        ]
        return ![
          "class",
          ...(tagName === "svg" ? // 需要添加fill
            params :
            []), // if tagName is svg remove size attributes
        ].includes(name);
      })
      .reduce((obj, name) => {
        const newName = camelcase(name);
        switch (newName) {
          case "fill":
            if (
              attribs[name] === "none" ||
              attribs[name] === "currentColor" ||
              multiColor
            ) {
              // 添加属性 multiColor为多色
              obj[newName] = attribs[name];
            }

            break;
          case "pId":
            break;
          default:
            obj[newName] = attribs[name];
            break;
        }
        return obj;
      }, {})
    );
  };

  // convert to [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
  const elementToTree = ( /** @type {Cheerio} */ element) => {
    return element
      .filter((_, e) => e.tagName && !["style"].includes(e.tagName))
      .map((_, e) => {
        return {
          tag: e.tagName,
          attr: attrConverter(e.attribs, e.tagName),
          child: e.children && e.children.length ?
            elementToTree(cheerio(e.children)) :
            undefined,
        };
      })
      .get();
  };

  const tree = elementToTree($svg);
  return tree[0]; // like: [ { tag: 'path', attr: { d: 'M436 160c6.6 ...', ... }, child: { ... } } ]
}

async function copyRecursive(src, dest) {
  await fs.mkdir(dest, {
    recursive: true
  });
  for (const entry of await fs.readdir(src, {
      withFileTypes: true
    })) {
    const sPath = path.join(src, entry.name);
    const dPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyRecursive(sPath, dPath);
    } else {
      await fs.copyFile(sPath, dPath);
    }
  }
}

async function rmDirRecursive(dest) {
  try {
    for (const entry of await fs.readdir(dest, {
        withFileTypes: true
      })) {
      const dPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await rmDirRecursive(dPath);
      } else {
        await fs.unlink(dPath);
      }
    }
    await fs.rmdir(dest);
  } catch (err) {
    if (err.code === "ENOENT") return;
    throw err;
  }
}

module.exports = {
  getIconFiles,
  convertIconData,
  copyRecursive,
  rmDirRecursive,
};