import React, { ComponentProps } from "react";

/**
 *  @redux
 */
//import { connect } from "react-redux";
//import { RootState } from "typesafe-actions";

import { Route, Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IUser } from "MobxStore";



export interface IProps extends RouteComponentProps {
    component?: ComponentProps<any>;
    key: string;
    exact: boolean;
    path: string;
}

/**
 * @redux
 */
//定义state
/*interface ImapState<T, U> {
    (state: T): U;
}
interface Istate {
    userinfo: object | string;
}
const mapStateToProps: ImapState<RootState, Istate> = (state) => ({
    userinfo: state.userinfo
});

type Props = ReturnType<typeof mapStateToProps> & IProps;
*/

interface IState {
    user?: IUser;
}

type Props = IProps & IState;

//react-Hooks
function AuthRouter(props: Props): JSX.Element {
    const { user, component: COMPONT, ...rest } = props;
    const { userinfo } = user as IUser;
    console.log(userinfo);
    const isLogged: boolean = userinfo !== "" ? true : true;
    console.log(isLogged);

    return (
        <Route {...rest} render={(routeProps) => {
            return isLogged
                ? <COMPONT {...routeProps} />
                : <Redirect to="/login" />;
        }} />
    );
}


/**
 * @redux
 */

// tslint:disable-next-line:typedef
//const storeAuthRouter = connect(mapStateToProps)(AuthRouter);

/**
 * @mobx
 */
// tslint:disable-next-line:typedef
const storeAuthRouter = inject("user")(observer(AuthRouter));
export default withRouter(storeAuthRouter);
