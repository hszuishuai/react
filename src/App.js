// import './App.css';
import React, { useState, memo, useMemo, useCallback } from "react"
import { connect } from "react-redux"
import Children from "./component/Children"
import { removeUserinfo } from "./lib/cache"

//react-Hooks
const MemoChildren = memo(Children);
function App(props) {

  const [state, setState] = useState({
    msg: "这是信息",
    child: null,
  });
  const [count, setCount] = useState(0)
  const { msg, child } = state;

  //useCallback的使用--------------优化子组件的重复渲染
  const getmsg = (msg) => {
    // setChild(childs)
    setState({ ...state, msg: msg })
    console.log(state)
  }
  const loginOut = () => {
    removeUserinfo();
    console.log(1)
  }

  return (
    <div className="App">
      <div>react</div>
      {/* <MemoChildren  news={msg} /> */}
      <MemoChildren
        news={useMemo(() => msg, [msg])}
        setmsg={useCallback((msg) => getmsg(msg), [])}
      />
      <h1>{child}</h1>
      <p>{count}</p>
      <button onClick={loginOut}>退出</button>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}


export default connect()(App) 