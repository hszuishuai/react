import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Tags from "@/components/tags";
import ArticleView from "@/components/article/article";
import { Login } from "./modules";

import { ArticleSkeleton } from "@/components/skeleton";
import { getUrlParams } from "@/lib/utils";
import { SORT_TYPE } from "./hook/useDataInit";

import styles from "./Home.module.less";

const HomeContainer: React.FC<any> = (props) => {
    const { tagData, articleData } = props;
    //tag展开
    const [isUnfold, setUnfold] = useState<Boolean>(false);

    const { search }: any = useLocation();

    //修改tag展开状态
    const handlerUnfold: () => void = useCallback(() => {
        setUnfold(true);
    }, []);

    const handClick: any = (id: number) => {
        console.log(id);
        // navigate(`/post/${id}`);
    };
    const isActiveClass: any = useCallback(
        (type: string) => {
            let param: any = getUrlParams(search);
            param = {
                sort: "popular",
                ...param,
            };
            return type === param.sort ? styles.active : "";
        },
        [search]
    );
    // if (loading) {
    //     return <div>正在加载</div>;
    // }
    return (
        <div className={styles.home__main}>
            {tagData && <Tags tags={tagData} isUnfold={isUnfold} setUnfold={handlerUnfold} />}
            <div className={styles.home__view}>
                <div className={styles.home__context}>
                    <nav className={styles.category_nav}>
                        <header className={styles.list_header}>
                            <ul className={styles.nav_list}>
                                <li className={styles.nav_item}>
                                    <Link
                                        className={isActiveClass("popular")}
                                        to={(Location) => `${Location.pathname}?sort=popular`}
                                    >
                                        热门
                                    </Link>
                                </li>
                                <li className={styles.nav_item}>
                                    <Link
                                        className={isActiveClass("newest")}
                                        to={(Location) => `${Location.pathname}?sort=newest`}
                                    >
                                        最新
                                    </Link>
                                </li>
                                <li className={styles.nav_item}>
                                    <Link
                                        className={isActiveClass("three_days_hottest")}
                                        to={(Location) => `${Location.pathname}?sort=three_days_hottest`}
                                    >
                                        热榜
                                    </Link>
                                </li>
                            </ul>
                        </header>
                    </nav>
                    {articleData ? (
                        <ArticleView handClick={handClick} articleList={articleData} />
                    ) : (
                        <ArticleSkeleton />
                    )}
                </div>
                <div className={styles.welcome_aside}>
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default React.memo(HomeContainer);
//export default HomeContainer;
