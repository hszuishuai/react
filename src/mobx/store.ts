
import { observable, action, runInAction } from "mobx";


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
    public asyncCount = (num: number) => {
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
