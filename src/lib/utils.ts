import { IArticle, ITag, ITagNav, IRecommendArticle } from "../../typing";

/**
 *
 * @param utc_time  2020-04-16T03:29:16.044Z
 */
function formUtcDate(utc_time: String): any {
    const T_pos: any = utc_time.indexOf("T");
    const Z_pos: any = utc_time.indexOf("Z");
    const year_month_day: any = utc_time.substr(0, T_pos);
    const hour_minute_second: any = utc_time.substr(T_pos + 1, Z_pos - T_pos - 1);
    const new_date: any = year_month_day + " " + hour_minute_second;

    // 处理成为时间戳
    let timestamp: any = new Date(Date.parse(new_date)).getTime();
    // timestamp = timestamp.getTime();
    // timestamp = timestamp / 1000;
    timestamp = timestamp / 1000 + 8 * 60 * 60;

    const nowDate: any = new Date().getTime() / 1000;

    const after_time: any = nowDate - timestamp;

    const minute: any = Math.ceil(after_time / 60);
    const hour: any = Math.ceil(minute / 60);
    const day: any = Math.ceil(hour / 24);
    const month: any = Math.ceil(day / 30);
    const year: any = Math.ceil(month / 12);
    if (year > 1) {
        return `${year}年`;
    }
    if (month > 1) {
        return `${month}月`;
    }
    if (day > 1) {
        return `${day}天`;
    }
    if (hour > 1) {
        return `${hour}小时`;
    }

    return `${minute}分钟`;
}

function formDate(time: any): any {
    const nowDate: any = new Date().getTime() / 1000;

    const after_time: any = nowDate - time;

    const minute: any = Math.ceil(after_time / 60);
    const hour: any = Math.ceil(minute / 60);
    const day: any = Math.ceil(hour / 24);
    const month: any = Math.ceil(day / 30);
    const year: any = Math.ceil(month / 12);
    if (year > 1) {
        return `${year}年`;
    }
    if (month > 1) {
        return `${month}月`;
    }
    if (day > 1) {
        return `${day}天`;
    }
    if (hour > 1) {
        return `${hour}小时`;
    }

    return `${minute}分钟`;
}

/**
 *  格式化文章接口数据
 * @param articles // IArticleFeed
 */
function forMateArticles(articles: Array<IArticle>): Array<IArticle> {
    return articles;
}

/**
 * 格式化文章标签
 * @param tags  // ITagNav
 */
function forMateTags(tags: ITagNav): Array<ITag> {
    return tags.tagNav.items;
}

/**
 *  //格式化文章数组
 * @param articles  //文章
 */
function forRecommendArticle(articles: Array<IRecommendArticle>): Array<IArticle> {
    return articles.reduce((current: Array<IArticle>, article) => {
        if (article.item_type === 2) {
            current.push(article.item_info);
        }
        return current;
    }, []);
}

/**
 * 获取url参数
 */

function getUrlParams(search: string): object {
    if (search) {
        //console.log("search", search);
        const paramsStr: string = search.slice(1, search.length);
        const paramsArr: Array<string> = paramsStr.split("&");
        const params: object = paramsArr.reduce((current, item) => {
            const paramItemArr: Array<string> = item.split("=");
            return { ...current, [paramItemArr[0]]: paramItemArr[1] };
        }, {});
        return params;
    }
    return {};
}
/**
 * 判断object是否为空
 * @param object
 */

function isObjectEmpty(object: object): boolean {
    return Object.keys(object).length === 0 ? true : false;
}

/**
 *   字符串转base64
 * @param str  //字符串
 */
function strToBase64(str: string) {
    const encode = encodeURI(str);
    const base64 = btoa(encode);
    return base64;
}

export { formDate, forMateArticles, forMateTags, getUrlParams, forRecommendArticle, isObjectEmpty, strToBase64 };
