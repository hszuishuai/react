import axios from "../lib/axios";
//import { AxiosResponse } from "axios";
import { ILoginParams } from "../mobx/user/type";
import { isObjectEmpty, forRecommendArticle } from "@/lib/utils";
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

// type IPromise<T> = {
//     (): Promise<AxiosResponse<T>>;
// };

//const BASE_URL = "http://localhost:4000"
interface IFunc<T> {
    (params: T): Promise<any>;
}

const login: IFunc<ILoginParams> = (params) => {
    return axios.post(`/login`, params);
};

export interface IArticleParam {
    cate_id?: string;
    sort_type?: number;
    client_type?: number;
    cursor?: string;
    id_type?: number;
    limit?: number;
}
/**
 *
 * @param category  类型id
 */

const getArticle: any = async (options: IArticleParam = {}) => {
    try {
        const url: string = options.cate_id
            ? "/juejinApi/recommend_api/v1/article/recommend_cate_feed"
            : "/juejinApi/recommend_api/v1/article/recommend_all_feed";

        const res: any = await axios.post(url, {
            client_type: 2608,
            cursor: "0",
            id_type: 2,
            limit: 20,
            sort_type: 200,
            ...options,
        });
        if (res.err_msg === "success") {
            console.log(forRecommendArticle(res.data));
            return options.cate_id ? res : { ...res, data: forRecommendArticle(res.data) };
        }
        console.log("res", res);
    } catch (e) {
        console.log(e);
    }
};

/**
 *  获取文章种类下的tag
 * @param category
 */

const getTags: any = (options = {}) => {
    return axios.post("/juejinApi/recommend_api/v1/tag/recommend_tag_list", {
        ...options,
    });
};

/**
 *  获取文章类型
 */
const getCategoryList: any = () => {
    return axios.get("/juejinApi/tag_api/v1/query_category_briefs?show_type=0");
};

export { login, getArticle, getTags, getCategoryList };
