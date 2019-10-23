import { _UserInfo } from "../lib/Storage";
import { observable, action, runInAction } from "mobx";
import { login } from "../api";
import { IUser, ILoginParams } from "MobxStore";

export interface IUserinfo {
    username?: string;
    token?: string;
    express_time?: string;
}

class User implements IUser {
    @observable
    public userinfo: IUserinfo = _UserInfo.getData();
    @observable
    public isLoading: boolean = false;

    @action
    public Login = async (params: ILoginParams) => {
        try {
            const result: IUserinfo = await login(params);

            //异步操作中，将要修改的state 放于runInAction中
            runInAction(() => {
                this.userinfo = result;
                this.isLoading = true;
            });
            _UserInfo.save(params);
        } catch {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    }
}


export default new User();
