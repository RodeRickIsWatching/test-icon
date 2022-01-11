const path = require("path");
const camelcase = require("camelcase");
const glob = require("glob-promise");

module.exports = {
  icons: [
    {
      id: "icon",
      name: "icon",
      contents: [
        {
          files: path.resolve(__dirname, "./icon/*.svg"),
          formatter: (name) => `${name}`,
          processWithSVGO: true,
        },
      ],
      projectUrl: "",
      license: "MIT",
      licenseUrl: "",
    },
    {
      id: "coin",
      name: "coin",
      contents: [
        {
          files: path.resolve(__dirname, "./coin/*.svg"),
          formatter: (name) => `${name}`,
          processWithSVGO: false,
          multiColor: true
        },
      ],
      projectUrl: "",
      license: "MIT",
      licenseUrl: "",
    },
    {
      id: "color",
      name: "color",
      contents: [
        {
          files: path.resolve(__dirname, "./color/*.svg"),
          formatter: (name) => `${name}`,
          processWithSVGO: false,
          multiColor: true
        },
      ],
      projectUrl: "",
      license: "MIT",
      licenseUrl: "",
    },
  ],
};
