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
    back_ground: String;
    color: String;
    concern_user_count: number;
    icon: String;
    post_article_count: number;
    show_navi: number;
    tag_alias: String;
    tag_id: String;
    id: number;
    tag_name: String;
}

export interface IUserInteract {
    id: number;
    is_collect: boolean;
    is_digg: boolean;
    is_follow: boolean;
    omitempty: number;
    user_id: number;
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
 * 文章类型接口
 */
export interface IArticle {
    article_id: String;
    article_info: IArticleInfo;
    author_user_info: IUserInfo;
    category: ICategory;
    tags: Array<ITag>;
    user_interact: IUserInfo;
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
 * 文章详情接口
 */
export interface IArticleInfo {
    article_id: String;
    audit_status: Number;
    brief_content: String;
    category_id: String;
    collect_count: Number;
    comment_count: Number;
    content: String;
    cover_image: String;
    ctime: String;
    digg_count: Number;
    draft_id: String;
    hot_index: Number;
    is_english: Number;
    is_gfw: Number;
    is_hot: Number;
    is_original: Number;
    link_url: String;
    mark_content: String;
    mtime: String;
    original_author: String;
    original_type: Number;
    rank_index: number;
    rtime: String;
    status: Number;
    tag_ids: Array<Number>;
    title: String;
    user_id: String;
    user_index: number;
    verify_status: Number;
    view_count: Number;
    visible_level: Number;
}

/**
 * 用户信息接口
 */
export interface IUserInfo {
    avatar_large: String;
    company: String;
    description: String;
    digg_article_count: Number;
    digg_shortmsg_count: Number;
    favorable_author: Number;
    followee_count: Number;
    follower_count: Number;
    got_digg_count: Number;
    got_view_count: Number;
    isfollowed: Boolean;
    job_title: String;
    level: Number;
    post_article_count: Number;
    post_shortmsg_count: Number;
    power: Number;
    user_id: String;
    user_name: String;
}

export interface ICategory {
    category_id: String;
    category_name: String;
    category_url: String;
    ctime: Number;
    mtime: Number;
    rank: Number;
    show_type: Number;
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
