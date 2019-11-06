export interface IUserinfo {
    username?: string;
    token?: string;
    express_time?: string;
}

export type IUser = {
    userinfo: object | string;
    Login: (parms: ILoginParams) => void;
};

export interface ILoginParams {
    username: string;
    password: string;
}
