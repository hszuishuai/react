import React, { ReactNode, ComponentProps } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter, RouteComponentProps } from "react-router-dom";

// interface Props {
//     userinfo: Userinfo;
// }

export interface IProps extends RouteComponentProps {
    component?: ComponentProps<any>;
    key: string;
    exact: boolean;
    path: string;
}


const mapStateToProps = (state: any) => ({
    userinfo: state.userinfo
});

type Props = ReturnType<typeof mapStateToProps> & IProps;


//react-Hooks
function AuthRouter(props: Props): JSX.Element {
    const { userinfo, component: COMPONT, ...rest } = props;
    console.log(userinfo);
    const isLogged: boolean = userinfo !== "" ? true : false;
    console.log(isLogged);

    return (
        <Route {...rest} render={(routeProps) => {
            return isLogged
                ? <COMPONT {...routeProps} />
                : <Redirect to="/login" />;
        }} />
    );
}

// class AuthRouter extends Component {
//     render() {
//         const { userinfo, component: Component, ...rest } = this.props
//         console.log(userinfo)
//         const isLogged = userinfo!==""? true : false;
//         console.log(isLogged)

//         return (
//             <Route {...rest} render={props => {
//                 return isLogged
//                     ? <Component {...props} />
//                     : <Redirect to="/login" />
//             }} />
//         )
//     }
// }

// tslint:disable-next-line:typedef
const storeAuthRouter = connect(mapStateToProps)(AuthRouter);

export default withRouter(storeAuthRouter);
