import { useEffect } from "react";
import { getArticle, getTags, getCategoryList } from "@/api";
import { useFetch } from "../../../hooks";
import { useParams } from "react-router-dom";

import { forMateArticles, getUrlParams } from "@/lib/utils";

import { ICategory } from "../../../../typing";
// import { categoryList, ICategory } from "@/mock/data";

function useDataInit(errorCb: (error: string) => void): any {
    const { loadData: loadTagData, data: tagData } = useFetch(getTags, false);
    const { loadData: loadArticleData, data: articleData } = useFetch(getArticle, false);
    const { loadData: loadCategoryData, data: categoryData } = useFetch<Array<ICategory>>(getCategoryList, false);
    const routerParams: any = useParams();
    // const routerParams = useParams();
    // console.log(routerParams);

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
                const paramItem: ICategory | undefined = categoryData.find((category) => {
                    return category.category_url === routerParams.id;
                }); //categoryData
                const param = paramItem ? { cate_id: paramItem.category_id } : {};
                loadArticleData(param);
                if (paramItem) {
                    loadTagData({});
                }
            }
            //console.log(search);
        } catch (error) {
            // errorCb(error);
            errorCb(error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorCb, routerParams.id, categoryData]);

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
