import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, RouteComponentProps, Redirect } from "react-router-dom";
import Loading from "@/component/loading";
//import AuthRouter from "@/component/AuthRouter";
import Login from "@/pages/login/login";
import RouterList, { IRouter } from "./config";

const renderRoute: any = (r: IRouter) => {
    if (r.children) {
        return (
            <Route
                key={r.path}
                path={r.path}
                exact={r.exact}
                render={(props: RouteComponentProps) => (
                    <r.component {...props}>
                        <Routes>
                            {r.children!.map(key => renderRoute(key))}
                            <Redirect from={r.path} to={r.children![0].path} />
                        </Routes>
                    </r.component>
                )}
            />
        );
    } else {
        return (
            <Route
                path={r.path}
                exact={r.exact}
                key={r.path}
                render={(props: RouteComponentProps) => <r.component {...props} />}
            />
        );
    }
};

class App extends Component {
    public render(): JSX.Element {
        return (
            <Router>
                <Routes>
                    <Suspense fallback={<Loading />}>
                        <Route path="/login" exact component={Login} />
                        {RouterList.map(
                            item => {
                                return renderRoute(item);
                            }
                            // <AuthRouter
                            //   exact={item.exact}
                            //   key={item.path}
                            //   path={item.path}
                            //   children={item.children}
                            //   component={item.component}
                            //   // component={Loadable({
                            //   //   loader: item.component,
                            //   //   loading: Loading,
                            //   //   timeout: 5000
                            //   // })}
                            // />
                        )}
                    </Suspense>
                </Routes>
            </Router>
        );
    }
}

export default App;
