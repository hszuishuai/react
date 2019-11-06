import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";

import { observer, inject } from "mobx-react";
import { IUser, ILoginParams } from "../mobx/user/type";
import { RouteComponentProps } from "react-router";
//import Loading from "./loading"

/**
 *  @redux
 */

/*
import { RootState } from "typesafe-actions";
import { connect } from "react-redux";
import { asyncUseinfo } from "../redux/actions";

interface Idispatch {
   login: (params: object) => void;
}

const mapStateToProps: any = (state: RootState) => ({
   userinfo: state.userinfo
});
const dispatchProps: Idispatch = {
   login: (params) => asyncUseinfo(params)
};

type Iprops = Readonly<{
   form: any;
}>;

type Props = ReturnType<typeof mapStateToProps> & typeof dispatchProps & Iprops;
React.SFC<Partial<Props>>
*/


type Iprops = Readonly<{
    form: any;
    user: IUser;
}>;

const LoginForm: React.SFC<Iprops & RouteComponentProps> = (props) => {
    const { userinfo, Login } = props.user;
    //当userinfo 发生变化的时候才会执行effect中的方法 [userinfo],
    useEffect(
        () => {
            console.log(props.user);
            // const Prop: any = props;
            if (userinfo !== "") {
                props.history.push({
                    pathname: "/app"
                });
                message.success("登入成功", 1);
            }
            return () => {
                console.log("消失了");
            };
        },
        [userinfo]);

    const handleSubmit: React.ReactEventHandler = (e) => {
        e.preventDefault();
        console.log("Received values of form: ", props.form);
        props.form.validateFields(async (err: string, values: any) => {
            //const { login } = props;
            const isLoginUserinfo: ILoginParams = { username: values.username, password: values.password };
            //const Login: any = login;
            if (!err) {
                console.log("Received values of form: ", values);
                Login(isLoginUserinfo);
                // message.loading("正在登入中", 2, Login(values));
            }
        });
    };
    const { getFieldDecorator } = props.form;
    return (
        <div>
            {/* <Loading/> */}
            <Form
                onClick={(e) => handleSubmit(e)}
                className="login-form"
            >
                <Form.Item>
                    {getFieldDecorator("username", {
                        rules: [{ required: true, message: "Please input your username!" }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("password", {
                        rules: [{ required: true, message: "Please input your Password!" }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                            type="password"
                            placeholder="Password"
                            autoComplete="on"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("remember", {
                        initialValue: true,
                        valuePropName: "checked",
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                </Form.Item>
            </Form>
        </div>
    );
};


/**
 * @redux
 */
/*
const storeLoginForm: any = connect(
    mapStateToProps,
    dispatchProps,
)(LoginForm);
*/

const storeLoginForm: any = inject("user")(observer(LoginForm));
const FromCompont: any = Form.create({ name: "login-form'" })(storeLoginForm);

export default FromCompont;
