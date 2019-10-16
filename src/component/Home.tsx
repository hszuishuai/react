import React, { useEffect } from "react";
//redux
/*
    import { connect } from "react-redux";
    import { RootState } from "typesafe-actions";
    import {
        changeCount,
        asynCount,
    } from "../redux/actions";
    import { changeCount } from "../redux/actions";
*/

//mobox
import { observer, inject } from "mobx-react";
import { IStore } from "MobxStore";

import { withRouter } from "react-router-dom";


// react-Hooks  redux
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


//mobx
interface Props {
    store: IStore;
}
//redux
//{ onIncreaseClick, asyncClick, count }: Props

//mobx
//props: Props
function Home(props: Props): JSX.Element {
    const { count, changCount, asynCount } = props.store;
    // console.log(props.store.count);
    useEffect(
        () => {
            setTimeout(
                (): void => {
                    // asynCount(2);
                },
                2000,
            );
            return () => {
                console.log(5);
            };
        },
        //[onIncreaseClick]
    );
    // componentDidMount() {
    //     setTimeout(() => {
    //     }, 2000)
    //     console.log(this.props.match)
    // }

    return (<div className="Home">
        <div className="home">home页面</div>
        <button onClick={() => changCount(5)}>点击</button>
        <button onClick={() => asynCount(2)}>saga</button>
        <h1>{count}</h1>
    </div>);
}


//redux

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
export default withRouter(moduleHome);
