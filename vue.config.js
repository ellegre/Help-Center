module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/styles/_variables.scss";
        @import "@/styles/_globals.scss";
        `
      }
    }
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      }]
    }
  }
};
