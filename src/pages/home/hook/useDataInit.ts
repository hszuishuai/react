import { useEffect } from "react";
import { getArticle, getTags } from "@/api";
import { useFetch } from "../../../hooks";
import { useLocation } from "react-router-dom";

import { forMateArticles, forMateTags } from "@/lib/utils";

import { categoryList, ICategory } from "@/mock/data";

function useDataInit(): any {
    const { loadData: loadTagData, data: tagData } = useFetch(getTags, false);
    const { loadData: loadArticleData, data: articleData } = useFetch(getArticle, false);
    const { pathname } = useLocation();

    useEffect(() => {
        try {
            const findIndex: number = categoryList.items.findIndex((c: ICategory) => c.path === pathname);
            console.log("findIndex", findIndex);
            const params: string = findIndex === -1 ? "" : categoryList.items[findIndex].id;
            console.log("findIndex", params);
            loadArticleData(params);
            if (params !== "") {
                loadTagData(params);
                console.log();
            }
        } catch (error) {
            // errorCb(error);
        }
    }, [loadArticleData, loadTagData, pathname]);
    return {
        forMateHomeData: {
            articleData: articleData && forMateArticles(articleData),
            tagData: tagData && forMateTags(tagData),
        },
    };
}

export default useDataInit;
