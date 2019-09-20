import React from 'react'
import { connect } from "react-redux"
import { Route, Redirect, withRouter } from "react-router-dom"

//react-Hooks
function AuthRouter(props) {
        const { userinfo, component: Component, ...rest } = props
        console.log(userinfo)
        const isLogged = userinfo!==""? true : false;
        console.log(isLogged)

        return (
            <Route {...rest} render={props => {
                return isLogged
                    ? <Component {...props} />
                    : <Redirect to="/login" />
            }} />
        )
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
const mapStateToProps = (state) => ({
    userinfo: state.userinfo
})

const StoreAuthRouter = connect(mapStateToProps)(AuthRouter);

export default withRouter(StoreAuthRouter)