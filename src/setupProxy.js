const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/juejinApi", {
            target: "https://apinew.juejin.im",
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                "^/juejinApi": "/",
            },
            headers: {
                referer: "https://juejin.im/",
                origin: "https://juejin.im",
            },
        }),
        createProxyMiddleware("/mock", {
            target: "https://www.mock.com",
            secure: true,
            changeOrigin: true,
            pathRewrite: {
                "^/mock": "/",
            },
        })
    );
};
