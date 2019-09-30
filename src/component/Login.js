import React, { useEffect } from 'react'
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { connect } from "react-redux"
import { asyncUseinfo } from "../redux/actions"
//import Loading from "./loading"
function LoginForm(props) {
    let { userinfo } = props;

    //当userinfo 发生变化的时候才会执行effect中的方法 [userinfo],
    useEffect(() => {
        console.log("加载了")
        if (userinfo !== "") {
            props.history.push({
                pathname: "/app"
            })
            // message.success("登入成功", 1)
        }
        return () => {
            console.log("消失了")
        };
    },[userinfo])

    const handleSubmit = e => {
        e.preventDefault();
        const { login } = props
        props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                message.loading("正在登入中",2,login(values)).then(()=>{
                    message.destroy();
                    //message.success("登入成功", 1)
                })
              
            }
        });
    };

    const { getFieldDecorator } = props.form;
    return (
        <div>
            {/* <Loading/> */}
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo
})
const mapDispatchToProps = (dispatch) => ({
    login: (params) => dispatch(asyncUseinfo(params))
})

const storeLoginForm = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm)

export default Form.create({ name: 'login-form' })(storeLoginForm);
