import { useEffect, useCallback } from "react";
import { getArticle, getTags, getCategoryList, IArticleParam } from "@/api";
import { useFetch } from "../../../hooks";
import { useParams, useLocation } from "react-router-dom";

import { forMateArticles, getUrlParams } from "@/lib/utils";

import { ICategory } from "../../../../typing";
// import { categoryList, ICategory } from "@/mock/data";
export enum SORT_TYPE {
    "popular" = 200,
    "newest" = 300,
    "three_days_hottest" = 3,
}

function useDataInit(errorCb: (error: string) => void): any {
    const { loadData: loadTagData, data: tagData } = useFetch(getTags, false);
    const { loadData: loadArticleData, data: articleData } = useFetch(getArticle, false);
    const { loadData: loadCategoryData, data: categoryData } = useFetch<Array<ICategory>>(getCategoryList, false);
    const routerParams: any = useParams();
    const { search } = useLocation();
    //const routerParams = useParams();

    const getParams: () => IArticleParam = useCallback(
        (options = {}) => {
            if (categoryData) {
                const paramItem: ICategory | undefined = categoryData.find((category) => {
                    return category.category_url === routerParams.id;
                }); //categoryData
                let param: any = paramItem ? { cate_id: paramItem.category_id } : {};
                const urlParam: any = getUrlParams(search);
                param = {
                    ...param,
                    sort_type: urlParam.sort ? SORT_TYPE[urlParam.sort] : 200,
                    ...options,
                };
                return param;
            }
            return {};
        },
        [routerParams.id, categoryData, search]
    );
    //getUrlParams(search);
    useEffect(() => {
        try {
            // const findIndex: number = categoryList.items.findIndex((c: ICategory) => c.path === pathname);
            // const params: string = findIndex === -1 ? "" : categoryList.items[findIndex].id;
            //loadArticleData(params);
            // if (params !== "") {
            //     loadTagData(params);
            // }
            if (categoryData) {
                const param: IArticleParam = getParams();
                loadArticleData(param);
                param.cate_id && loadTagData(param);
            }
            //console.log(search);
        } catch (error) {
            // errorCb(error);
            errorCb(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorCb, getParams]);

    useEffect(() => {
        loadCategoryData([]);
    }, []);
    return {
        forMateHomeData: {
            articleData: articleData && forMateArticles(articleData),
            categoryData: categoryData,
            tagData: tagData,
        },
    };
}

export default useDataInit;
