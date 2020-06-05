import React, { useEffect } from "react";
import Tags from "@/components/tags";
import ArticleView from "@/components/article/article";

import styles from "./Home.module.less";

const HomeContainer: React.FC<any> = (props) => {
    const { tagData, articleData } = props;
    const handClick: any = (id: number) => {
        console.log(id);
        // navigate(`/post/${id}`);
    };
    // if (loading) {
    //     return <div>正在加载</div>;
    // }
    return (
        <div className={styles.home__main}>
            {tagData && <Tags tags={tagData} />}
            {articleData && <ArticleView handClick={handClick} articleList={articleData.edges} />}
        </div>
    );
};

export default HomeContainer;
