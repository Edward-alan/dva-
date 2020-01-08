import React, { Component } from 'react'
import { Form, Icon, Input, Button, Layout, Select } from 'antd';
import Axios from "@/utils/headertoken"
const { Header } = Layout
const { Option } = Select

const children = [{
    id: 1,
    name: '管理员'
},
{
    id: 2,
    name: '出题者'
}, {
    id: 3,
    name: '浏览者'
},
{
    id: 4,
    name: '班主任'
}, {
    id: 5,
    name: '班长'
}
]

@Form.create()

class AddUser extends Component {
    handleChange = (value) => {
        console.log(`Selected: ${value}`);
    }
    handleSubmit = () => {
        this.props.form.validateFields((err, values) => {
            console.log(err, values)
            if (!err) {
                Axios.post('/user', { user_name: values.username, user_pwd: values.password, identity_id: values.identity }).then(
                    (res) => {
                        console.log(res)
                    }
                )
            }

        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className='adduser'>
                <Header style={{ background: "#fff", fontSize: "20px" }}>
                    添加用户
                </Header>
                <div className='management' style={{ width: "45%", height: "auto" }}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: '参数有误' }],
                            })(
                                <Input
                                    style={{ width: "300px" }}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '参数有误' }],
                            })(
                                <Input
                                    style={{ width: "300px" }}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                />
                            )}

                        </Form.Item>
                        <Form-Item>
                            {
                                getFieldDecorator('identity', {
                                    rules: [{ required: true, message: '参数有误' }], initialValue: "请选择身份id"
                                })(
                                    <Select onChange={this.handleChange} style={{ width: 200 }}>
                                        {children.map((item, index) => {
                                            return <Option key={index} value={item.name}>{item.name}</Option>
                                        })}
                                    </Select>
                                )
                            }

                        </Form-Item>
                        <Form.Item style={{ marginTop: "20px" }}>
                            <Button
                                htmlType="submit"
                                style={{ width: '90px', background: "linear-gradient(270deg,rgba(78,117,255,1) 0%,rgba(1,57,253,1) 100%)", color: "#fff" }}
                            >确定</Button>
                            <Button style={{ marginLeft: "20px" }}>重置</Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        )
    }
}
export default AddUser