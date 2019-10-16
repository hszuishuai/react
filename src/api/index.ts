import axios from "../lib/axios";

//const BASE_URL = "http://localhost:4000"
interface IFunc<T> {
    (parasm: T): Promise<any>;
}

export interface ILoginParasm {
    username: string;
    password: string;
}
const login: IFunc<ILoginParasm> = (parasm) => {
    return axios.post(`/login`, parasm);
};


export {
    login
};
