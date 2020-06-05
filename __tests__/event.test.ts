import Event from "../src/lib/event";

const _Event: Event = new Event();

describe("测试订阅发布模块", () => {
    it("测试用户订阅事件", () => {
        _Event.$on("task1", () => {
            console.log("task1");
        });
        _Event.$on("task2", () => {
            console.log("task2");
        });
        expect(_Event.$emit("task1"));
    });
});
