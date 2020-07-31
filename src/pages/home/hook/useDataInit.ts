import { useEffect } from "react";
import { getArticle, getTags } from "@/api";
import { useFetch } from "../../../hooks";
import { useLocation } from "react-router-dom";

import { forMateArticles, forMateTags, getUrlParams } from "@/lib/utils";

import { categoryList, ICategory } from "@/mock/data";

function useDataInit(errorCb: (error: string) => void): any {
    const { loadData: loadTagData, data: tagData } = useFetch(getTags, false);
    const { loadData: loadArticleData, data: articleData } = useFetch(getArticle, false);
    const { pathname, search } = useLocation();
    // const routerParams = useParams();
    // console.log(routerParams);
    console.log(search);
    getUrlParams(search);
    useEffect(() => {
        try {
            const findIndex: number = categoryList.items.findIndex((c: ICategory) => c.path === pathname);
            const params: string = findIndex === -1 ? "" : categoryList.items[findIndex].id;
            loadArticleData(params);
            if (params !== "") {
                loadTagData(params);
            }
            console.log(search);
        } catch (error) {
            // errorCb(error);
            errorCb(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorCb, pathname]);
    return {
        forMateHomeData: {
            articleData: articleData && forMateArticles(articleData),
            tagData: tagData && forMateTags(tagData),
        },
    };
}

export default useDataInit;
