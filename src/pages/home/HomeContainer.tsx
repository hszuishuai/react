import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Tags from "@/components/tags";
import ArticleView from "@/components/article/article";

import styles from "./Home.module.less";

import useFetch from "@/hooks/useFetch";
import { getArticle, getTags } from "@/api";
import { categoryList, ICategory } from "@/mock/data";

const HomeContainer: React.FC<any> = () => {
    const { pathname } = useLocation();

    const { data, loadData } = useFetch<any>(getArticle, false);
    const TagState: any = useFetch<any>(getTags, false);

    useEffect(() => {
        const params: Array<ICategory> = categoryList.items.filter((c: ICategory) => c.path === pathname);
        console.log(params);
        const id: any = params.length === 0 ? "" : params[0].id;
        loadData(id);
        if (id !== "") {
            TagState.loadData(id);
        }
    }, [pathname]);

    const handClick: any = (id: number) => {
        console.log(id);
        // navigate(`/post/${id}`);
    };
    // if (loading) {
    //     return <div>正在加载</div>;
    // }
    return (
        <div className={styles.home__main}>
            {TagState.data && <Tags tags={TagState.data.data.tagNav.items} />}
            {data && <ArticleView handClick={handClick} articleList={data.data.articleFeed.items.edges} />}
        </div>
    );
};

export default HomeContainer;
