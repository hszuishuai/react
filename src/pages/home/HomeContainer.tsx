import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Tags from "@/components/tags";
import ArticleView from "@/components/article/article";
import { Login, Author } from "./modules";
import { ArticleSkeleton } from "@/components/skeleton";

import { getUrlParams, isArrayEmpty } from "@/lib/utils";
import useObserve from "@/hooks/useObserve";
import { ITag, IArticle, IUserInfo } from "../../../typing";

import styles from "./Home.module.less";

export interface IHomeContainerProp {
    tagData?: Array<ITag>;
    articleData?: Array<IArticle>;
    authorData?: IUserInfo[];
    handlerMore: () => void;
}

const HomeContainer: React.FC<IHomeContainerProp> = (props) => {
    const { tagData, articleData, handlerMore, authorData } = props;
    //tag展开
    const [isUnfold, setUnfold] = useState<Boolean>(false);

    const [ref] = useObserve<HTMLDivElement>((entries) => {
        //handlerMore();
        if (entries[0].intersectionRatio <= 0 || entries[0].intersectionRatio === 1) {
            return;
        }
        handlerMore();
    });

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
    console.log(tagData);
    return (
        <div className={styles.home__main}>
            {!isArrayEmpty(tagData) && <Tags tags={tagData} isUnfold={isUnfold} setUnfold={handlerUnfold} />}
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
                    {isArrayEmpty(articleData) ? (
                        <ArticleSkeleton />
                    ) : (
                        <ArticleView handClick={handClick} articleList={articleData as Array<IArticle>} />
                    )}
                    <div ref={ref} className={styles.home__footer}></div>
                </div>
                <div className={styles.welcome_aside}>
                    <Login />
                    {authorData && <Author authorData={authorData} />}
                </div>
            </div>
        </div>
    );
};

export default React.memo(HomeContainer);
//export default HomeContainer;
