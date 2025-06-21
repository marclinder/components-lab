module.exports = {
  source: ["packages/shared/tokens/stylesToken.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "packages/shared/tokens/build/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
};
