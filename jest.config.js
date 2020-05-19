module.exports = {
    preset: "ts-jest",
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testPathIgnorePatterns: [
        //忽略该路径的文件测试
        "/node_modules/",
        "node",
    ],
    testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"], //测试模块中用到的文件的后缀名配置
};
