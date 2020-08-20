type num = "vue" | "react";

type IsNumber<T> = T extends number ? string : boolean;

const a: IsNumber<string> = false;
type IFor = { [p in num]: p };

type IObj<T> = { [p in keyof T]: p };

const o: IObj<IFor> = {
    vue: "vue",
    react: "react",
};

//infer 推断类型
type Aa = keyof IObj<IFor>;

type IInfer<T> = T extends (params: infer p) => any ? p : number;

const tt: IInfer<(a: string) => any> = "22";
