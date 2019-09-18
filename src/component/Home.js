import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
    changeCount,
    asyncCount,
    
} from "../redux/actions"
class Home extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.onIncreaseClick(2)
        }, 2000)
        console.log(this.props.match)
    }
   
    render() {
        let { onIncreaseClick, count, asyncClick } = this.props
        return (<div className="Home">
            <div className="home">home页面</div>
            <button onClick={onIncreaseClick.bind(this, 5)}>点击</button>
            <button onClick={asyncClick.bind(this)}>saga</button>
            <h1>{count}</h1>
        </div>)
    }
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