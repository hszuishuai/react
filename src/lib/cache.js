import Storage from "good-storage";
//import Cookies from "js-cookie";
const Token = "access_token"
const UserInfo = "userinfo";
//保存token
function saveToken(token) {
    Storage.set(Token, token)
    return token
}
//获取Token
function getToken() {
    return Storage.get(Token, "");
}

//删除Token
function removeToken() {
    return Storage.remove(Token)
}

//保存用户信息
function saveUserinfo(userinfo) {
    Storage.set(UserInfo, userinfo)
    return userinfo
}
//获取Token
function getUserinfo() {
    return Storage.get(UserInfo, "");
}

//删除Token
function removeUserinfo() {
     Storage.remove(UserInfo)
     return null
}


export {
    saveToken,
    getToken,
    removeToken,
    saveUserinfo,
    getUserinfo,
    removeUserinfo
}