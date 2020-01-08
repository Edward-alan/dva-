import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'

class View extends Component {
    state = {
        user: [],
        columns: [
            {
                key: "1",
                title:'身份',
                dataIndex:'identity_text',
                width:300
            },
            {
                key: "2",
                title: '视图名称',
                dataIndex: 'view_authority_text',
                width: 300,
            },
            {
                key: "3",
                title: '视图id',
                dataIndex: 'view_id',
                width: 300,
            }
        ]
    }
    componentDidMount() {
        Axios.get('/user/identity_view_authority_relation').then(res => {
            this.setState({ user: res.data })
        })
    }
    render() {

        const { user, columns } = this.state
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>身份和视图接口权限</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row, index) => index}/>
            </>
        )
    }
}
export default View