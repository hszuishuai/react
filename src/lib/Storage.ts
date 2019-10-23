import Storage from "./cache";

const Token: string = "access_token";
const UserInfo: string = "userinfo";

const _Token: Storage = new Storage(Token);
const _UserInfo: Storage = new Storage(UserInfo);
export {
    _Token,
    _UserInfo
};
