import React, { useEffect } from "react";
import ListItem, { ListItemProps } from "../../component/ListItem";

import styles from "./Home.module.css";
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
import { IStore } from "MobxStore";

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
interface Props {
  store: IStore;
}
//redux
//{ onIncreaseClick, asyncClick, count }: Props

//mobx
//props: Props

const List: ListItemProps[] = [
  {
    name: "小明",
    sex: "男"
  },
  {
    name: "小红",
    sex: "女"
  },
  {
    name: "小花",
    sex: "女"
  }
];

function Home(props: Props): JSX.Element {
  const { count, changCount, asyncCount } = props.store;
  // console.log(props.store.count);
  useEffect(
    () => {
      setTimeout((): void => {
        // asynCount(2);
      }, 2000);
      return () => {
        console.log(5);
      };
    }
    //[onIncreaseClick]
  );
  // componentDidMount() {
  //     setTimeout(() => {
  //     }, 2000)
  //     console.log(this.props.match)
  // }

  const _rendList: any = () => {
    return List.map(item => (
      <li key={item.name}>
        {item.name} || {item.sex}
      </li>
    ));
  };

  return (
    <div className={styles.home}>
      <div className={styles.home}>home页面</div>
      <button onClick={() => changCount(5)}>点击</button>
      <button onClick={() => asyncCount(2)}>saga</button>
      <h1>{count}</h1>
      <ListItem List={List} />
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
