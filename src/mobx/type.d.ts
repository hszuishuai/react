//import { Store as StoreModel } from "./store";

declare module "MobxStore" {
    export type IStore = {
        count: number;
        changCount: (count: number) => void;
        userInfo?: object
        asyncCount: (count: number) => void
    };

    export type IRoot = {
        store: IStore;
        user: IUser
    };

}
//export as namespace IStore;

//export interface Store extends StoreModel { }

