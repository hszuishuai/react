import React, { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
// import NavigationBar from "../../component/navigationBar";
import styles from "./Home.module.css";
import ArticleView from "@/component/article/article";
import { IArticleProps } from "@type/index";

import useMountState from "@/hooks/useMountState";

/**
 * @redux
 */
/*
    import { connect } from "react-redux";
    import { RootState } from "typesafe-actions";
    import {
        changeCount,
        asynCount,
    } from "../redux/actions";
    import { changeCount } from "../redux/actions";
*/

/**
 * @mobx
 */
import { observer, inject } from "mobx-react";
//import { IStore } from "MobxStore";

//import { withRouter } from "react-router-dom";

/**
 * @reactHooks
 * @redux
 */
/*
    type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;
    const mapStateToProps: any = (state: RootState) => ({
         count: state.count
      });
    const dispatchProps: any = {
        asyncClick: (num: number) => asynCount(num),
        onIncreaseClick: (num: number) => changeCount(num),
    };
*/

/**
 * @mobx
 */

export type IStore = {
    count: number;
    changCount: (count: number) => void;
    userInfo?: object;
    asyncCount: (count: number) => void;
};
interface Props {
    store: IStore;
    children: React.ReactNode;
}
//redux
//{ onIncreaseClick, asyncClick, count }: Props

//mobx
//props: Props

export interface IndexRouter {
    component: React.ComponentProps<any>;
    path: string;
    text?: string;
}
const articleList: IArticleProps[] = [
    {
        theme: "专栏",
        title: "string",
        author: "string",
        releaseTime: "string",
        types: ["122", "222"],
        likes: 22,
        comments: 10,
        articleUrl: "https://bbs.a9vg.com/uc_server/data/avatar/001/44/49/25_avatar_middle.jpg",
    },
    {
        theme: "专栏",
        title: "string",
        author: "xiaosan",
        releaseTime: "string",
        types: ["122", "222"],
        likes: 22,
        comments: 10,
        articleUrl: "",
    },
];

function Home(props: Props): JSX.Element {
    const { count, changCount, asyncCount } = props.store;
    const navigate: any = useNavigate();
    //TODO: 在useEffect中不能直接使用 async/await
    /**
     *  const fun = async ()=> {
     *     await api();
     *   }
     *  fun();
     */
    useEffect(() => {
        setTimeout((): void => {
            // asyncCount(2);
        }, 2000);
        return () => {
            console.log(5);
        };
    });
    const handClick: any = (id: number) => {
        console.log(id);
        navigate(`/post/${id}`);
    };

    return (
        <div className={styles.home}>
            {/* <NavigationBar RouterList={indexRouter} /> */}
            <Link to="/home/books">w22</Link>
            <Link to="/home/topics">w22</Link>
            {props.children}
            <div className={styles.home}>home页面</div>
            <button onClick={() => changCount(5)}>点击</button>
            <button onClick={() => asyncCount(2)}>saga</button>
            <h1>{count}</h1>
            <ArticleView handClick={handClick} articleList={useMemo(() => articleList, [])} />
        </div>
    );
}

/**
 * @redux
 */
/*
  const mapDispatchToProps = (dispatch: any) => ({
    asyncClick: () => dispatch(asynCount(num)),
    onIncreaseClick: () => dispatch(changeCount())
});

const moduleHome: any = connect(
    mapStateToProps,
    dispatchProps

)(Home);

*/

// mobx
const moduleHome: any = inject("store")(observer(Home));
export default moduleHome;
