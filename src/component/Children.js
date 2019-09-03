import React, { Component } from 'react'

export default class Children extends Component {
    render() {
        return (
            <div>
                <h1>孩子组件</h1>
                <p>{this.props.news}</p>
                <button onClick={this.props.setmsg.bind(this,"这是孩子的信息")}>孩子</button>
            </div>
        )
    }
}
