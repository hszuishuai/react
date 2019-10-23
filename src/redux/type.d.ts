
declare module "MyModel" {
    export type Userinfo = {
        error?: string;
        token?: string
    };
    export type ActionType = {
        type: string;
        payload: {
            userinfo: Userinfo
        };
    };
}
