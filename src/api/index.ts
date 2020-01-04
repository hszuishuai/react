import axios from "../lib/axios";
import { ILoginParams } from "../mobx/user/type";

//const BASE_URL = "http://localhost:4000"
interface IFunc<T> {
    (params: T): Promise<any>;
}


const login: IFunc<ILoginParams> = (params) => {
    return axios.post(`/login`, params);
};


export {
    login
};
