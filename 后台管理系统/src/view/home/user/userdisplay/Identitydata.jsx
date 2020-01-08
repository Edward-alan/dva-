import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'

class IdentityData extends Component {
    state = {
        user: [],
        columns: [
            {
                key: "1",
                title: '身份名称',
                dataIndex: 'identity_text',
                width: 200,
            },
        ]
    }
    componentDidMount() {
        Axios.get('/user/identity').then(res => {
            this.setState({ user: res.data })
        })
    }
    render() {
        const { user, columns } = this.state
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>用户数据</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row, index) => index} />
            </>
        )
    }
}
export default IdentityData