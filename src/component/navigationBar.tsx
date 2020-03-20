import * as React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { IndexRouter } from "../pages/home/Home";
import Books from "../pages/books";

interface IProps {
    RouterList: Array<IndexRouter>;
}

function RouterItem({ component: Component, ...rest }: any): JSX.Element {
    return <Route {...rest} render={routeProps => <Component {...routeProps} />} />;
}

function NavigationBar(props: IProps): JSX.Element {
    const { RouterList } = props;
    return (
        <div>
            <ul>
                {RouterList.map(item => {
                    return (
                        <li key={item.path}>
                            <Link to={item.path}>{item.text}</Link>
                        </li>
                    );
                })}
            </ul>
            <Switch>
                {RouterList.map(item => {
                    return <RouterItem key={item.path} exact={true} path={item.path} component={Books} />;
                })}
                {/* <Redirect to="/home/books"></Redirect> */}
            </Switch>
        </div>
    );
}

export default NavigationBar;
