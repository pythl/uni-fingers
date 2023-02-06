// vue.config.js，如没有此文件则手动创建
module.exports = {
  transpileDependencies: ["uview-ui"],
  //代理服务器
  devServer: {
    proxy: {
      "/prefix/api/user/list": {
        target: "https://api-remote.xxxx.com",
        pathRewrite: {
          "^/prefix": "",
        },
      },
    },
  },
};
