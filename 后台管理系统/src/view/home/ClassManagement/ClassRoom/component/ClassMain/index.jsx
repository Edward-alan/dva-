/*
 * @Author: fengdm 
 * @Date: 2019-12-07 07:51:13 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-13 09:34:07
 * 渲染教室的列表界面
 */

import React, { Component } from 'react';
import AddClassroom from '../AddClass/index.jsx'
import Axios from "@/utils/headertoken"
import { Table } from 'antd';
class ClassMain extends Component {
    state = {
        buttit: '添加教室',
        columns: [
            {
                title: '班级号',
                dataIndex: 'room_text',
            },
            {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render: (text, record) => <a onClick={() => this.deleteclassroom(record)}>Delete</a>,
            }
        ],
        data: []
    }

    //删除教室
    deleteclassroom(record) {
        Axios.delete('/manger/room/delete', { data: { room_id: record.room_id } }).then(res => {
            console.log(res);
        })
    }
    getclassroomList() {
        Axios.get('/manger/room').then(res => {
            if (res.code === 1) {
                this.setState({
                    data: res.data
                })
            }
        })
    }
    componentDidMount() {
        this.getclassroomList()
    }
    render() {
        return (
            <div className='classmain'>
                <AddClassroom butit={this.state.buttit} getclassroomList={this.getclassroomList.bind(this)} />
                <Table columns={this.state.columns} dataSource={this.state.data} size="middle" rowKey="room_id" />
            </div>
        );
    }
}

export default ClassMain;