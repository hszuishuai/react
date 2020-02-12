//全局ts接口
import { RouteComponentProps } from "react-router-dom";
import { ComponentProps } from "react";

export interface IProps extends RouteComponentProps {
    component?: ComponentProps<any>;
    key: string;
    exact?: boolean;
    path: string;
}



export interface IOnclick<T> {
    (e?: T): void;
}

