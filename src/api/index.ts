import axios from "../lib/axios";
import { AxiosResponse } from "axios";
import { ILoginParams } from "../mobx/user/type";
// const JUEJIN_URL: String = "https://web-api.juejin.im";

// {
//  "operationName": "",
//  "query": "",
//  "variables": {"first": 20, "after": "", "order": "POPULAR"},
//  "first": 20,
//  "after": "",
//  "order": "POPULAR",
//  "extensions": {
// 	"query": { "id":"21207e9ddb1de777adeaca7a2fb38030"}
// 	}
// }

type IPromise<T> = {
    (): Promise<AxiosResponse<T>>;
};

//const BASE_URL = "http://localhost:4000"
interface IFunc<T> {
    (params: T): Promise<any>;
}

const login: IFunc<ILoginParams> = (params) => {
    return axios.post(`/login`, params);
};

/**
 *  掘金接口
 */

const getArticle: IPromise<any> = () => {
    return axios.post(`/api/query`, {
        operationName: "",
        query: "",
        variables: { first: 20, after: "", order: "POPULAR" },
        first: 20,
        after: "",
        order: "POPULAR",
        extensions: {
            query: { id: "21207e9ddb1de777adeaca7a2fb38030" },
        },
    });
};

const getTags: IPromise<any> = () => {
    return axios.post("")
}

export { login, getArticle };
