import Storage from "good-storage";
//import Cookies from "js-cookie";

//保存token

export default class StorageData {
    constructor(type: string) {
        this.type = type;
    }
    private type: string;

    //保存数据
    public save<T>(typeData: T): any {
        Storage.set(this.type);
        return typeData;
    }

    //获取数据
    public getData<T>(): T {
        return Storage.get(this.type, "");
    }

    //移除
    public remove(): void {
        return Storage.remove(this.type);
    }
}
