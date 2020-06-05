import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from "axios";
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.defaults.headers["X-Agent"] = "Juejin/Web";

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        //发送请求操作，统一再请求里加上userId;
        config.headers.userId = window.sessionStorage.getItem("userId");
        return config;
    },
    (error: AxiosError) => {
        //发送请求错误操作
        console.log("请求失败");
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        //对响应数据做操作
        // console.log(response)
        if (response.data) {
            //console.log('请求成功');
            return response.data;
        }
        if (response.data.code === "2000401" || response.data.code === 2000401) {
            console.log("已过期重新登陆", response.data.code);
            window.location.href = "/login";
            console.log(response.data);
            return Promise.reject(response.data);
        } else {
            console.log("请求失败", response.data.code);
            // alert(response.data.message);
            return Promise.reject(response);
        }
    },
    (error: AxiosError) => {
        //对响应数据错误做操作
        console.log("请求error", error.message);
        return Promise.reject(error);
    }
);

export default axios;
