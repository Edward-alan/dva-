import React, { Component } from 'react';
import { Table } from 'antd';
import Axios from "@/utils/headertoken"

class MainStudent extends Component {
    state={
        columns : [
            {
              title: '姓名',
              dataIndex: 'student_name',
            },
            {
              title: '学号',
              dataIndex: 'student_id',
            },
            {
              title: '班级',
              dataIndex: 'grade_name',
            },
            {
                title: '教室',
                dataIndex: 'room_text',
              },
              {
                title: '密码',
                dataIndex: 'student_pwd',
              },
              {
                title: '操作',
                dataIndex: '',
                key: 'x',
                render: () => <a>删除</a>,
              }
          ],
          data : []
          
    }
    getstudentList(){
        Axios.get('/manger/student').then(res=>{
            console.log(res);
            if(res.code===1){
                this.setState({
                    data:res.data
                })
            }
        })
    }
    componentDidMount(){
        this.getstudentList();
    }
    render() {
        return (
            <div className='studentcount'>
                <Table columns={this.state.columns} dataSource={this.state.data} size="middle"/>
            </div>
        );
    }
}

export default MainStudent;