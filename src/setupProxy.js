const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "https://web-api.juejin.im",
            secure: true,
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/",
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
