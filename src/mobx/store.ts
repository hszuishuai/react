
import { observable, action, runInAction } from "mobx";
//import { login } from "@/api";
import { getUserinfo } from "../lib/cache";
import { IStore } from "MobxStore";
// class UserApi {
//     public getUserinfo = (params: any) => login(params);
// }


class Store {
    // constructor(UserApi: any) {
    //     this.userApi = UserApi;
    // }

    @observable
    public count: number = 8;

    @observable

    @action
    public changCount = (num: number) => {
        this.count += num;
    }
    @action
    public asynCount = (num: number) => {
        runInAction(
            () => {
                setTimeout(
                    () => {
                        this.changCount(num);
                    },
                    2000);
            });
    }
    // getUserinfo = async () => {
    //     const userinfo = await this.userApi;
    // }

}
//const userApi = new UserApi();
export default new Store();
