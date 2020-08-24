import React, { useCallback, useState } from "react";
//import { useHistory, useLocation } from "react-router-dom";
// import NavigationBar from "../../component/navigationBar";
import styles from "./Home.module.less";
//import ArticleView from "@/component/article/article";

//import { getArticle } from "@/api";

import Nav from "@/components/navigate";
import HomeContainer from "./HomeContainer";

//初始化数据
import useDataInit from "./hook/useDataInit";
//import useObserve from "@/hooks/useObserve";

import { strToBase64 } from "@/lib/utils";
//import useMountState from "@/hooks/useMountState";
//import useFetch from "@/hooks/useFetch";

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
//import { observer, inject } from "mobx-react";
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

//每次滚动刷新的数量
const SCROLL_NUMBER: number = 20 as const;
function Home(props: Props): JSX.Element {
    //page
    const [page, setPage] = useState<number>(1);
    const { forMateHomeData, loadMoreArticle } = useDataInit(
        useCallback((error: string) => {
            console.log(error);
        }, [])
    );

    const handlerMore = useCallback(() => {
        setPage(page + 1);
        const cursor: string = strToBase64(
            JSON.stringify({
                i: SCROLL_NUMBER * (page + 1),
                v: 6863351989016166407,
            })
        );
        loadMoreArticle({ cursor });
    }, [page]);
    //console.log(ref);

    return (
        <div className={styles.home}>
            <Nav categoryList={forMateHomeData.categoryData || []} />
            <HomeContainer {...forMateHomeData} handlerMore={handlerMore} />
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
//const moduleHome: any = inject("store")(observer(Home));
export default Home;
