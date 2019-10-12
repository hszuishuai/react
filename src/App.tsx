// import './App.css';
import React, { useState, memo, useMemo, useCallback } from "react";
import { connect } from "react-redux";
import Children from "./component/Children";
import { removeUserinfo } from "./lib/cache";

interface IState {
  child: string | undefined;
  msg: string;
}

//react-Hooks
const MemoChildren = memo(Children);
const App: React.SFC = (props) => {

  const [state, setState] = useState<IState>({
    child: undefined,
    msg: "这是信息",
  });
  const [count, setCount] = useState(0);
  const { msg, child } = state;

  //useCallback的使用--------------优化子组件的重复渲染
  const getmsg = (Msg: string) => {
    // setChild(childs)
    setState({ ...state, msg: Msg });
    console.log(state);
  };
  const loginOut = (): void => {
    removeUserinfo();
    console.log(1);
  };

  return (
    <div className="App">
      <div>react</div>
      {/* <MemoChildren  news={msg} /> */}
      <MemoChildren
        news={useMemo(() => msg, [msg])}
        setmsg={useCallback((Msg) => getmsg(Msg), [])}
      />
      <h1>{child}</h1>
      <p>{count}</p>
      <button onClick={loginOut}>退出</button>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}


export default connect()(App);
