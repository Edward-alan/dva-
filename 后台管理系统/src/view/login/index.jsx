import React, { Component } from 'react'
import './css/style.css'
import { Form, Icon, Input, Button } from 'antd';
import Axios from "@/utils/headertoken"
import { connect } from 'dva'

@Form.create()
@connect(state => {
    return state.questions;
})
export class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Axios.post("/api/user/login", { user_name: values.username, user_pwd: values.password }).then(
                    (res) => {
                        if (res.code === 0) {
                            console.log('登录有误')
                        } else {
                            window.localStorage.setItem('token', res.token)
                            this.props.history.push('/home')
                        }
                    }
                )
                // this.props.dispatch({ type: 'questions/getLoginHome', user_name: values.username, user_pwd: values.password  }).then(res => {
                //     console.log(res)
                // })
            }
        });
    };


    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="wrap-box">
                <div className="logins-box">
                    <h2>登录</h2>
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
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login
