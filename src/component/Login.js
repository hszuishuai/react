import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { connect } from "react-redux"
import { asyncUseinfo } from "../redux/actions"
class LoginForm extends Component {

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps) 
        //saga 异步请求登录 改变props 重新渲染页面 跳转路由
        let { userinfo } = nextProps
        if (userinfo !== "") {
            this.props.history.push({
                pathname: "/app"
            })
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const { userinfo, login } = this.props
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                login(values)
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
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
                        <a className="login-form-forgot" href=""> Forgot passwor </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
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
