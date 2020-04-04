//全局ts接口
import { RouteComponentProps } from "react-router-dom";
import { ComponentProps } from "react";

export interface IRouter extends RouteComponentProps {
    component?: ComponentProps<any>;
    key?: string;
    exact?: boolean;
    path: string;
    children?: Array<any>;
}

/**
 * 文章类型接口数据
 */
export interface IArticleProps {
    theme: string;
    title: string;
    author: string;
    releaseTime: string;
    types: Array<string>;
    likes: number;
    comments: number;
    articleUrl: string;
}

export interface IArticlesProps {}

export interface IOnclick<T> {
    (e?: T): void;
}
