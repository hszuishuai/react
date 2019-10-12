import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "typesafe-actions";
import { withRouter } from "react-router-dom";
import {
    changeCount,
    asynCount,
} from "../redux/actions";

// react-Hooks
type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps;

const mapStateToProps: any = (state: RootState) => ({
    count: state.count
});
const dispatchProps: any = {
    asyncClick: (num: number) => asynCount(num),
    onIncreaseClick: (num: number) => changeCount(num),
};

function Home({ onIncreaseClick, asyncClick, count }: Props): JSX.Element {
    //const { count } = props;

    useEffect(
        () => {
            setTimeout(
                (): void => {
                    onIncreaseClick(2);
                },
                2000,
            );
            return () => {
                console.log(5);
            };
        },
        [onIncreaseClick]
    );
    // componentDidMount() {
    //     setTimeout(() => {
    //     }, 2000)
    //     console.log(this.props.match)
    // }

    return (<div className="Home">
        <div className="home">home页面</div>
        <button onClick={() => onIncreaseClick(5)}>点击</button>
        <button onClick={() => asyncClick(2)}>saga</button>
        <h1>{count}</h1>
    </div>);
}




// const mapDispatchToProps = (dispatch: any) => ({
//     asyncClick: () => dispatch(asynCount(num)),
//     onIncreaseClick: () => dispatch(changeCount())
// });


const moduleHome: any = connect(
    mapStateToProps,
    dispatchProps

)(Home);
export default withRouter(moduleHome);
