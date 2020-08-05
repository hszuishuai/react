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

const JUEJINAPI_CONFIG: any = {
    CATEGORY_ID: "653b587c5c7c8a00ddf67fc66f989d42",
    DEFAULT_ID: "21207e9ddb1de777adeaca7a2fb38030",
};
const TAG_QUERY_ID: string = "801e22bdc908798e1c828ba6b71a9fd9";

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
 *
 * @param category  类型id
 */

const getArticle: any = async (category: string = "") => {
    try {
        const res: any = await axios.post(`/juejinApi/recommend_api/v1/article/recommend_cate_feed`, {
            cate_id: "6809637769959178254",
            cursor: "0",
            id_type: 2,
            limit: 20,
            sort_type: 200,
        });
        if (res.err_msg === "success") {
            return res;
        }
        console.log("res", res);
    } catch (e) {
        console.log(e);
    }
};

const getTags: any = (category: string) => {
    return axios.post("/api/query", {
        extensions: { query: { id: TAG_QUERY_ID } },
        operationName: "",
        query: "",
        variables: { category: category, limit: 15 },
    });
};

export { login, getArticle, getTags };
