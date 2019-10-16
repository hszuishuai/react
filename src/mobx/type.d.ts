//import { Store as StoreModel } from "./store";

declare module "MobxStore" {
    export type IStore = {
        count: number;
        changCount: (count: number) => void;
        userinfo?: object
        asynCount: (count: number) => void
    };

    export type IUser = {
        userinfo: object | string;
        Login: (parms: ILoginParams) => void;
    };

    export type IRoot = {
        store: IStore;
        user: IUser
    };

    export interface ILoginParams {
        username: string;
        password: string;
    }
}
//export as namespace IStore;

//export interface Store extends StoreModel { }

