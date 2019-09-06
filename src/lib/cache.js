import Storage from "good-storage";
//import Cookies from "js-cookie";
const Token = "access_token"

//保存token
function saveToken(token){
    Storage.set(Token,token)
    return token
}
//获取Token
function getToken(){
    return Storage.get(Token,"");
}

//删除Token
function removeToken(){
    return Storage.remove(Token)
}

export {
    saveToken,
    getToken,
    removeToken
}