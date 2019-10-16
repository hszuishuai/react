import { saveUserinfo, getUserinfo } from "../lib/cache";
import { observable, action, runInAction } from "mobx";
import { login, ILoginParasm } from "../api";
import { IUser } from "MobxStore";

export interface IUserinfo {
    username?: string;
    token?: string;
    express_time?: string;
}

class User implements IUser {
    @observable
    public userinfo: IUserinfo = getUserinfo();
    @observable
    public isLoading: boolean = false;

    @action
    public Login = async (params: ILoginParasm) => {
        try {
            const result: IUserinfo = await login(params);

            //异步操作中，将要修改的state 放于runInAction中
            runInAction(() => {
                this.userinfo = result;
                this.isLoading = true;
            });
            saveUserinfo(params);
        } catch {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}


export default new User();
