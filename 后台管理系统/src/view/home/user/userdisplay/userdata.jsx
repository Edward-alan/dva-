import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'

class UserData extends Component {
    state = {
        user: [],
        columns: [
            {
                key:"1",
                title: '用户名',
                dataIndex: 'user_name',
                width: 200,
            },
            {
                key: "2",
                title: '密码',
                dataIndex: 'user_pwd',
                width: 800,
            },
            {
                key: "3",
                title: '身份',
                dataIndex: 'identity_text',
                width: 200,
            },
        ]
    }
    componentDidMount() {
        Axios.get('/user/user').then(res => {
            console.log(res.data)
            this.setState({ user: res.data })
        })
    }
    render() {

        const { user, columns } = this.state
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>用户数据</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row,index) => index} />
            </>
        )
    }
}
export default UserData