import React from 'react'

export default function Children(props) {
    return (
        <div>
            <h1>孩子组件</h1>
            <p>{props.news}</p>
            <button onClick={props.setmsg.bind(this, "这是孩子的信息")}>孩子</button>
        </div>
    )
}
