import React, { ReactNode } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter, RouteComponentProps } from "react-router-dom";

// interface Props {
//     userinfo: Userinfo;
// }

interface IProps {
    [name: string]: any;
}


const mapStateToProps: any = (state: any) => ({
    userinfo: state.userinfo
});

// type Props = ReturnType<typeof mapStateToProps>;



//react-Hooks
function AuthRouter(props: IProps): JSX.Element {
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
