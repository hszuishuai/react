// import './App.css';
import React, { Component } from "react"
import { connect } from "react-redux"
import Children from "./component/Children"
import {removeUserinfo} from "./lib/cache"
class App extends Component {
  state = {
    msg: "这是信息",
    child: null
  }
  getmsg = (child) => {
    this.setState({
      child
    })
  }
  loginOut = ()=>{
    removeUserinfo();
    console.log(1)
  }
  componentWillMount() {
    console.log("第一次加载")
  }
  componentDidMount() {
    console.log("第二次加载")
  }
  render() {
    console.log("我被渲染了")
    return (
      <div className="App">
        <div>react</div>
        <Children setmsg={this.getmsg.bind(this)} news={this.state.msg} />
        <p>{this.state.child}</p>
        <button onClick={this.loginOut}>退出</button>
      </div>
    );
  }
}


export default connect()(App) 