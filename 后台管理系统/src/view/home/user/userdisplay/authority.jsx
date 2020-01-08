import React, { Component } from 'react'
import Axios from '@/utils/headertoken'
import { Table } from 'antd'

 class Authority extends Component {
     state = {
         user: [],
         columns: [
             {
                 key: "1",
                 title: 'api权限名称',
                 dataIndex: 'api_authority_text',
                 width: 350,
             },
             {
                 key: "2",
                 title: 'api权限url',
                 dataIndex: 'api_authority_url',
                 width: 350,
             },
             {
                 key: "3",
                 title: 'api权限方法',
                 dataIndex: 'api_authority_method',
                 width: 350,
             },
         ]
     }
     componentDidMount() {
         Axios.get('/user/api_authority').then(res => {
             this.setState({ user: res.data })
         })
     }
    render() {
        const { user, columns } = this.state
        return (
            <>
                <h1 style={{ fontSize: '24px', paddingLeft: "20px", fontWeight: "normal" }}>api接口权限</h1>
                <Table columns={columns} dataSource={user} pagination={{ pageSize: 8 }} rowKey={(row, index) => index}/>
            </>
        )
    }
}
export default Authority