import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { categoryList, ICategory } from "@/mock/data";
import Tags from "@/component/tags";
import styles from "./Home.module.less";
import ArticleView from "@/component/article/article";
import useFetch from "@/hooks/useFetch";
import { getArticle } from "@/api";

const HomeContainer: React.FC<any> = () => {
    const { pathname } = useLocation();

    const { loading, data, loadData } = useFetch<any>(getArticle, false);

    useEffect(() => {
        //console.log(type);
        const params: Array<ICategory> = categoryList.items.filter((c: ICategory) => c.path === pathname);
        console.log(params);
        loadData(params[0].id);
    }, [pathname]);

    const handClick: any = (id: number) => {
        console.log(id);
        // navigate(`/post/${id}`);
    };

    if (loading) {
        return <div>正在加载</div>;
    }
    return (
        <div className={styles.home__main}>
            <Tags />
            {data.data && <ArticleView handClick={handClick} articleList={data.data.articleFeed.items.edges} />}
        </div>
    );
};

export default HomeContainer;
