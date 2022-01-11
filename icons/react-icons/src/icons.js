const path = require("path");
const camelcase = require("camelcase");
const glob = require("glob-promise");

module.exports = {
  icons: [
    {
      id: "icon",
      name: "Icon",
      contents: [
        {
          files: path.resolve(
            "../../src",
            "svg/icon/*.svg"
            // path.dirname(require.resolve("ionicons")),
            // "collection/icon/svg/*.svg"
          ),
          formatter: (name) => `${name}`,
        },
      ],
      projectUrl: "",
      license: "MIT",
      licenseUrl: "",
    },
    {
      id: "coin",
      name: "Coin",
      contents: [
        {
          files: path.resolve(
            "../../src",
            "svg/coin/*.svg"
            // path.dirname(require.resolve("ionicons")),
            // "collection/icon/svg/*.svg"
          ),
          formatter: (name) => `${name}`,
        },
      ],
      projectUrl: "",
      license: "MIT",
      licenseUrl: "",
    },
  ],
};
