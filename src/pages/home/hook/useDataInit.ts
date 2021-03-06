import { useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useFetch } from "../../../hooks";

import { forMateArticles, getUrlParams, isArrayEmpty } from "@/lib/utils";
import { getArticle, getTags, getCategoryList, getAuthorList, IArticleParam } from "@/api";
import { ICategory, IUserInfo } from "../../../../typing";

// import { categoryList, ICategory } from "@/mock/data";
export enum SORT_TYPE {
    "popular" = 200,
    "newest" = 300,
    "three_days_hottest" = 3,
}

function useDataInit(errorCb: (error: string) => void): any {
    const { loadData: loadTagData, data: tagData } = useFetch(getTags, false);
    const { loadData: loadArticleData, data: articleData, loadMoreData } = useFetch(getArticle, false);
    const { loadData: loadCategoryData, data: categoryData } = useFetch<Array<ICategory>>(getCategoryList, false);
    const { loadData: loadAuthorData, data: authorData } = useFetch<IUserInfo[]>(getAuthorList, false);
    const routerParams: any = useParams();
    const { search } = useLocation();
    //const [articleList, setArticleList] = useState<Array<IArticle>>([]);
    //const routerParams = useParams();
    const getParams: (option?: object | undefined) => IArticleParam = useCallback(
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
            if (!isArrayEmpty(categoryData)) {
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

    //more articleData
    const loadMoreArticle = useCallback(
        async (options) => {
            //console.log(options);
            const params: IArticleParam = getParams(options);
            //console.log(params);
            categoryData && (await loadMoreData(params));
            //setArticleList(articleData);
        },
        [categoryData]
    );

    useEffect(() => {
        loadCategoryData([]);
        loadAuthorData([]);
    }, []);
    return {
        forMateHomeData: {
            articleData: articleData && forMateArticles(articleData),
            authorData: authorData,
            categoryData: categoryData,
            tagData: tagData,
        },
        loadMoreArticle,
    };
}

export default useDataInit;
