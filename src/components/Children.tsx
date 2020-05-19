import React from "react";

export default function Children(props: any): JSX.Element {
    console.log("孩子执行了");
    return (
        <div>
            <h1>孩子组件</h1>
            <p>{props.news}</p>
            <button onClick={props.setMsg.bind(props, "这是孩子的信息")}>孩子</button>
        </div>
    );
}
