import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'
class IdentityApi extends Component {
    state = {
        user: [],
        columns: [
            {
                key: "1",
                title: '身份名称',
                dataIndex: 'identity_text',
                width: 200,
            },
            {
                key: "2",
                title: 'api权限名称',
                dataIndex: 'api_authority_text',
                width: 200,
            },
            {
                key: "3",
                title: 'api权限url',
                dataIndex: 'api_authority_url',
                width: 300,
            },
            {
                key: "4",
                title: 'api权限方法',
                dataIndex: 'api_authority_method',
                width: 200,
            },

        ]
    }
    componentDidMount() {
        Axios.get('/user/identity_api_authority_relation').then(res => {
            this.setState({ user: res.data })
        })
    }
    render() {
        const { user, columns } = this.state
     
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>身份和api接口关系</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row, index) => index}/>
            </>
        )
    }
}
export default IdentityApi 