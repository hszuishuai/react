export interface IUserInfo {
    username?: string;
    token?: string;
    express_time?: string;
}

export type IUser = {
    userInfo: object | string;
    Login: (params: ILoginParams) => void;
};

export interface ILoginParams {
    username: string;
    password: string;
}
