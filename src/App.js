// import './App.css';
import React, { useState } from "react"
import { connect } from "react-redux"
import Children from "./component/Children"
import { removeUserinfo } from "./lib/cache"

//react-Hooks

function App(props) {

  const [msg, setmsg] = useState("这是信息");
  const [child] = useState(null);

  const getmsg = (child) => {
      setmsg(child)
  }
  const loginOut = () => {
    removeUserinfo();
    console.log(1)
  }
    return (
      <div className="App">
        <div>react</div>
        <Children setmsg={getmsg.bind(this)} news={msg} />
        <p>{child}</p>
        <button onClick={loginOut}>退出</button>
      </div>
    );
  }


export default connect()(App) 