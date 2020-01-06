
declare module "MyModel" {
    export type UserInfo = {
        error?: string;
        token?: string
    };
    export type ActionType = {
        type: string;
        payload: {
            userInfo: UserInfo
        };
    };
}
