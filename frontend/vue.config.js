const path=require('path');

module.exports={
  outputDir: path.resolve(__dirname, "../backend/public"),
  devServer: {
    proxyTable: {
      '/api': {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}