// import './App.css';
import React, { useState, memo, useMemo, useCallback, useEffect, MouseEventHandler } from "react";
//readux
// import { connect } from "react-redux";
import Children from "./component/Children";
import { _UserInfo } from "./lib/Storage";

interface IState {
  child: string | undefined;
  msg: string;

}

const useToggle: any = (initValue?: boolean) => {
  const [value, setValue] = useState(!!initValue);
  const toggle: any = useCallback(
    () => {
      setValue(!value);
    },
    [value],
  );
  return [value, toggle];
};


//react-Hooks
const MemoChildren: any = memo(Children);

const App: React.SFC<IState> = (props) => {

  const [state, setState] = useState<IState>({
    child: undefined,
    msg: "这是信息",
  });
  const [count, setCount] = useState(0);
  const { msg, child } = state;
  const [enable, setToggle] = useToggle(false);

  console.log(enable);
  //useCallback的使用--------------优化子组件的重复渲染
  //使用 useState 避免数据的错乱
  const getmsg: any = async (Msg: string) => {
    // setChild(childs)
    await setState((pevState): IState => {
      return { ...pevState, msg: Msg };
    });
  };
  const loginOut: any = (): void => {
    _UserInfo.remove();
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
      <p>{enable}</p>
      <button onClick={loginOut}>退出</button>
      <button onClick={() => setCount(count + 1)}>点击</button>
      <button onClick={setToggle}>toggle</button>
    </div>
  );
};

//redux
// export default connect()(App);

//mobx
export default App;
