import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import Lading from "../component/loading.js"
import AuthRouter from "../component/AuthRouter"
import Login from "../component/Login"
const routeList = [
    {
        component: () => import("../component/Home"),
        path: "/home"
    },
    {
        component: () => import("../App"),
        path: "/"
    },
    {
        component: () => import("../App"),
        path: "/app"
    },
]

export class App extends Component {
    render() {
        return (
            <Router>
                {/* <NavLink to="/app">前往首页页面</NavLink>
                <NavLink to="/home">前往home页面</NavLink> */}
                <Switch>
                    <Route path="/login" exact component={Login} ></Route>
                    {routeList.map(item => (
                        <AuthRouter
                            key={item.path}
                            exact={true}
                            path={item.path}
                            component={Loadable({
                                loader: item.component,
                                loading: Lading
                            })}
                        />
                    ))}
                </Switch>
            </Router>
        )
    }
}
export default App

