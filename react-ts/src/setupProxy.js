const { createProxyMiddleware } = require('http-proxy-middleware');

// 注意：
// 1. 查看官网，中文文档用法未更新
// 2. 放到src目录下
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://i.maoyan.com/',
      changeOrigin: true,
    })
  );
};