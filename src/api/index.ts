import axios from "../lib/axios";

//const BASE_URL = "http://localhost:4000"

const login = (parasm: object) => {
    return axios.post(`/login`, parasm);
};

export {
    login
};
