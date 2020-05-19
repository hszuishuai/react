import React from "react";

/**
 *  @redux
 */
//import { connect } from "react-redux";
//import { RootState } from "typesafe-actions";

import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { IUser } from "../mobx/user/type";
import { IRouter } from "../../typing";
import Books from "../pages/books";

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

type Props = IRouter & IState;

//react-Hooks
function AuthRouter(props: Props): JSX.Element {
  const { user, component: Component, children, ...rest } = props;
  const { userInfo } = user as IUser;
  console.log(userInfo);
  const isLogged: boolean = userInfo !== "" ? true : true;
  console.log(isLogged);

  return isLogged ? (
    <Route
      {...rest}
      render={routeProps => {
        if (children) {
          return (
            <div>
              <Component {...routeProps} />
              <Switch>
                {
                  children.map((child: IRouter) => {})
                }
              </Switch>
            </div>
          );
        }
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
}

/**
 * @redux
 */

//const storeAuthRouter = connect(mapStateToProps)(AuthRouter);

/**
 * @mobx
 */
// tslint:disable-next-line:typedef
const storeAuthRouter = inject("user")(observer(AuthRouter));
export default withRouter(storeAuthRouter);
