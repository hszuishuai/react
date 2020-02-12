import React from "react";

/**
 *  @redux
 */
//import { connect } from "react-redux";
//import { RootState } from "typesafe-actions";

import { Route, Redirect, withRouter } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IUser } from "../mobx/user/type";
import { IProps } from "../../typing";

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
  const { user, component: Component, ...rest } = props;
  const { userInfo } = user as IUser;
  console.log(userInfo);
  const isLogged: boolean = userInfo !== "" ? true : false;
  console.log(isLogged);

  return (
    <Route
      {...rest}
      render={routeProps => {
        return isLogged ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
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
