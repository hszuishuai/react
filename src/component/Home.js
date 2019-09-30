import React, { useEffect } from 'react'
import { connect } from "react-redux"

import { withRouter } from "react-router-dom"
import {
    changeCount,
    asyncCount,
} from "../redux/actions"

// react-Hooks

function Home(props) {
    let { onIncreaseClick, count, asyncClick } = props

    useEffect(() => {
        setTimeout(()=>{
            onIncreaseClick(2);
            console.log("执行了")
        },2000)
        return () => {
            console.log(5)
        }
    },[onIncreaseClick])
    // componentDidMount() {
    //     setTimeout(() => {
    //         
    //     }, 2000)
    //     console.log(this.props.match)
    // }

    return (<div className="Home">
        <div className="home">home页面</div>
        <button onClick={onIncreaseClick.bind(this, 5)}>点击</button>
        <button onClick={asyncClick.bind(this)}>saga</button>
        <h1>{count}</h1>
    </div>)
}


const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    onIncreaseClick: (num) => dispatch(changeCount(num)),
    asyncClick: () => dispatch(asyncCount())
})

const moduleHome = connect(
    mapStateToProps,
    mapDispatchToProps

)(Home);
export default withRouter(moduleHome)