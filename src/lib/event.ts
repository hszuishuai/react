class EventObj {
    constructor() {
        //事件管理
        this.task = {};
    }
    private task: object;

    //绑定事件
    public $on(eventName: any, cb: Function): void {
        typeof cb === "function"
            ? this.task[eventName] || (this.task[eventName] = [])
            : this.Error(eventName, "eventName not function"); //
        // tslint:disable-next-line:no-unused-expression
        const flag: Boolean = this.task[eventName].some((fn) => fn === cb); //
        if (!flag) {
            this.task[eventName].push(cb);
        }
        // flag ? true : ;
    }

    public $emit(eventName: string, ...arg: any): void {
        // let taskQueue;
        if (this.task[eventName] && this.task[eventName].length > 0) {
            this.task[eventName].forEach((fn) => fn(...arg));
        }
    }

    // public $once(): any {

    // }
    private Error(node: string, error: string): void {
        throw Error(`${node}:${error}`);
    }
}

export default EventObj;
