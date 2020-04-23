import React from "react";
//import { useHistory, useLocation } from "react-router-dom";
// import NavigationBar from "../../component/navigationBar";
import styles from "./Home.module.less";
//import ArticleView from "@/component/article/article";

//import { getArticle } from "@/api";

import Nav from "@/component/navigate";
import HomeContainer from "./HomeContainer";

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

function Home(props: Props): JSX.Element {
    // const History: any = useHistory();
    // const Location: any = useLocation();

    // const { loading, data, loadData } = useFetch<any>(getArticle, false);

    // useEffect(() => {
    //     loadData(Location.state.id);
    // }, [Location.state.id]);

    // const handClick: any = (id: number) => {
    //     console.log(id);
    //     // navigate(`/post/${id}`);
    // };

    // if (loading) {
    //     return <div>正在加载</div>;
    // }

    return (
        <div className={styles.home}>
            <Nav />
            <HomeContainer />
            {/* {loading } */}
            {/* <div className={styles.home__main}>
                {data.data && <ArticleView handClick={handClick} articleList={data.data.articleFeed.items.edges} />}
            </div> */}
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
