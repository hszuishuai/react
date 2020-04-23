import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import styles from "./login.module.css";
import { useHistory } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { IUser, ILoginParams } from "../../mobx/user/type";
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

type IProps = Readonly<{
    form: any;
    user: IUser;
}>;

const LoginForm: React.SFC<IProps & RouteComponentProps> = (props) => {
    const { userInfo, Login } = props.user;
    const [Loading, setLoading] = useState<boolean>(false);
    const History: any = useHistory();
    //当userInfo 发生变化的时候才会执行effect中的方法 [userInfo],
    useEffect(() => {
        console.log(props.user);
        // const Prop: any = props;
        if (userInfo) {
            History.push("/app");
            //message.success("登入成功", 1);
        }
        return () => {
            console.log("消失了");
        };
    }, [userInfo, History, props.user]);

    // const onFinishFailed: any = () => {
    //     console.log("error");
    // };
    const handleSubmit: React.ReactEventHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Received values of form: ", props.form);
        props.form.validateFields(async (err: string, values: any) => {
            //const { login } = props;
            const isLoginUserInfo: ILoginParams = {
                username: values.username,
                // tslint:disable-next-line: object-literal-sort-keys
                password: values.password,
            };
            //const Login: any = login;
            if (!err) {
                console.log("Received values of form: ", values);
                setTimeout(() => {
                    Login(isLoginUserInfo);
                    setLoading(false);
                }, 2000);
                // message.loading("正在登入中", 2, Login(values));
            }
        });
    };
    return (
        <div>
            {/* <Loading/> */}
            <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
                <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={Loading}
                        disabled={Loading}
                        onClick={(e) => handleSubmit(e)}
                        className={styles.login_form_button}
                    >
                        {" "}
                        {Loading ? "" : "登录"}
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

const storeLoginForm: React.SFC<any> = inject("user")(observer(LoginForm));
//const FromComponent: any = Form.create({"name: 'normal_login"})(storeLoginForm);

export default storeLoginForm;
