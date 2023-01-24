module.exports = {
  source: ["src/tokens/output.json"],
  transform: {
    transformBorders: {
      type: "value",
      transformer: (token) => {
        if (token.type !== "border") {
          return token.value
        }
        if (token.type === "border") {
          const { width, style, color } = token.value
          const pad = (value) => value ? value + ' ' : ''
          return `${pad(width)}${pad(style)}${pad(color)}`
        }
      }
    }
  },
  platforms: {
    scss: {
      transformGroup: "css",
      transforms: ["name/cti/kebab", "transformBorders"],
      prefix: "xvt",
      buildPath: "src/styles/generated/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables",
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
}
