import axios from "../lib/axios";
import { ILoginParams } from "../mobx/user/type";

//const BASE_URL = "http://localhost:4000"
interface IFunc<T> {
    (parasm: T): Promise<any>;
}


const login: IFunc<ILoginParams> = (parasm) => {
    return axios.post(`/login`, parasm);
};


export {
    login
};
