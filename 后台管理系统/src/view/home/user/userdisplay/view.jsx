import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'

class View extends Component {
    state = {
        user: [],
        columns: [
            {
                key: "1",
                title: '视图权限名称',
                dataIndex: 'view_authority_text',
                width: 300,
            },
            {
                key: "2",
                title: '视图id',
                dataIndex: 'view_id',
                width: 400,
            }
        ]
    }
    componentDidMount() {
        Axios.get('/user/view_authority').then(res => {
            this.setState({ user: res.data })
        })
    }
    render() {

        const { user, columns } = this.state
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>视图接口权限</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row, index) => index}/>
            </>
        )
    }
}
export default View