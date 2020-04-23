import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import NavigationBar from "../../component/navigationBar";
import styles from "./Home.module.less";
import ArticleView from "@/component/article/article";
import useFetch from "@/hooks/useFetch";
import { getArticle } from "@/api";

const HomeContainer: React.FC<any> = () => {
    const Location: any = useLocation();

    const { loading, data, loadData } = useFetch<any>(getArticle, false);

    useEffect(() => {
        loadData(Location.state.id);
    }, [Location.state.id]);

    const handClick: any = (id: number) => {
        console.log(id);
        // navigate(`/post/${id}`);
    };

    if (loading) {
        return <div>正在加载</div>;
    }
    return (
        <div className={styles.home__main}>
            {data.data && <ArticleView handClick={handClick} articleList={data.data.articleFeed.items.edges} />}
        </div>
    );
};

export default HomeContainer;
