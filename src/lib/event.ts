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
            : this.Error(eventName, "eventName"); //
        // tslint:disable-next-line:no-unused-expression
        this.task[eventName].some(fn => fn === cb) ? true : this.task[eventName].push(cb); //
    }

    public $emit(eventName: string, ...arg: any): void {
        // let taskQueue;
        this.task[eventName] && this.task[eventName].length > 0
            ? this.task[eventName].forEach(fn => fn(...arg))
            : false;
    }

    // public $once(): any {

    // }
    private Error(node: string, error: string): void {
        throw Error(`${node}:${error}`);
    }
}

export default EventObj;
