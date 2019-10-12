import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Lading from "../component/loading";
import AuthRouter from "../component/AuthRouter";
import Login from "../component/Login";

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
];

class App extends Component {
    public render(): JSX.Element {
        return (
            <Router>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    {
                        routeList.map(item => (
                            <Route
                                key={item.path}
                                exact={true}
                                path={item.path}
                                //component={item.component}
                                component={
                                    Loadable({
                                        loader: item.component,
                                        loading: Lading,
                                        timeout: 5000
                                    })
                                }
                            />
                        ))
                    }
                </Switch>
            </Router>);
    }
}

export default App;

