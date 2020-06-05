//全局ts接口
import { RouteComponentProps } from "react-router-dom";
import { ComponentProps } from "react";

export interface IRouter extends RouteComponentProps {
    component?: ComponentProps<any>;
    key?: String;
    exact?: boolean;
    path: String;
    children?: Array<any>;
}

/**
 *  文章标签接口
 */
export interface ITag {
    id: string;
    title: String;
}

/**
 * 文章标签的请求接口返回的数据类型
 */

export interface ITagNav {
    tagNav: {
        items: Array<ITag>;
    };
}

/**
 * 文章接口Node数据
 */
export interface INode {
    id: String;
    commentsCount: number;
    hot: Boolean;
    hotIndex: number;
    original: Boolean;
    originalUrl: String;
    rankIndex: number;
    screenshot: string;
    content: String;
    summaryInfo: String;
    category: {
        name: String;
        id: String;
    };
    tags: Array<ITag>;
    title: String;
    type: String;
    user: {
        id: String;
        role: String;
        avatarHd: String | null;
        avatarLarge: String;
        username: String;
    };
    lastCommentTime: String;
    likeCount: number;
    eventInfo: number | null;
    viewerHasLiked: Boolean;
    createdAt: String;
    updatedAt: String;
}

/**
 * 文章tag类型接口
 */
export interface IArticle {
    node: INode;
}
export interface IPageInfo {
    hasNextPage: Boolean;
    endCursor: String;
}

/**
 *  文章数组接口
 */
export interface IArticles {
    edges: Array<IArticle>;
    pageInfo: IPageInfo;
}

/**
 * 请求的articleFeed接口返回的数据
 */
export interface IArticleFeed {
    articleFeed: {
        items: IArticles;
    };
}
export interface IOnclick<T> {
    (e?: T): void;
}
