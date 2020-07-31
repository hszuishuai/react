// import './App.css';
import React, { useState, memo, useMemo, useCallback, useEffect } from "react";

import { IOnclick } from "../typing";
import "@/mock";

// redux
// import { connect } from "react-redux";
import Children from "@/components/Children";
import { ArticleSkeleton } from "@/components/skeleton";
import { ConfigConsumer, ConfigConsumerProps } from "./provider/context";

import { _UserInfo } from "@/lib/Storage";

interface IState {
    child: string | undefined;
    msg: string;
}

const useToggle: any = (initValue?: boolean) => {
    const [value, setValue] = useState(!!initValue);
    const toggle: any = useCallback(() => {
        setValue(!value);
    }, [value]);
    return [value, toggle];
};

const renderDom = ({ renderEmpty }: ConfigConsumerProps): React.ReactNode => {
    console.log("2222");
    return renderEmpty();
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
    const getMsg: (Msg: string) => Promise<void> = async (Msg) => {
        // setChild( childe)
        await setState(
            (pevState): IState => {
                return { ...pevState, msg: Msg };
            }
        );
    };
    const loginOut: IOnclick<any> = (): void => {
        _UserInfo.remove();
    };

    useEffect(() => {
        console.log("执行", count);

        // setCount(count + 1);
    }, [count]);

    return (
        <div className="App">
            <div>react</div>
            {/* <MemoChildren  news={msg} /> */}
            <ArticleSkeleton />
            <MemoChildren news={useMemo(() => msg, [msg])} setMsg={useCallback((Msg) => getMsg(Msg), [])} />
            <h1>{child}</h1>
            <p>{count}</p>
            <p>{enable}</p>
            <button onClick={() => loginOut()}>退出</button>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <button onClick={setToggle}>toggle</button>
            <ConfigConsumer>{renderDom}</ConfigConsumer>
            {/* <ConfigConsumer>
                {" "}
                <div></div>{" "}
            </ConfigConsumer> */}
        </div>
    );
};

//redux
// export default connect()(App);

//mobx
export default App;
