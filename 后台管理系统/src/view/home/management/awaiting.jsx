/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-12-10 16:46:10 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-13 14:47:48
 * 阅卷管理
 */
import React, { Component } from 'react'
import './scss/style.css'
import { Table } from 'antd';
import Axios from '@/utils/headertoken'
const { Column, ColumnGroup } = Table;


export class Awaiting extends Component {
    state = {
        current: 1,
        getdata: []
    };
    //加载数据
    componentDidMount() {
        //    Axios.post('/manger/Lister', { pagesize: 1, pagecont: 10 }).then(res => {
        //         this.setState({
        //             getdata: res.results
        //         })
        //     })

        Axios.get('/manger/grade').then(res => {
            this.setState({
                getdata: res.data
            })
        })
    }
    //批卷
    delents = (record, id) => {
        console.log(id)
        this.props.history.push({pathname:`/home/detail/${id}`,query:{item:record}})
    }

    render() {
        const { getdata } = this.state;
        console.log(getdata)
        return (
            <div className="wrap_await">
                <div>
                    <Table dataSource={getdata}>
                        <ColumnGroup >
                            <Column title="班级名" dataIndex="grade_name" key="grade_name" />
                            <Column title="课程名称" dataIndex="subject_text" key="subject_text" />
                            <Column title="阅卷状态" dataIndex="age" key="age" />
                            <Column title="课程名称" dataIndex="subject_text" key="exam_exam_id" />
                            <Column title="成才率" dataIndex="subject_id" key="subject_id" />

                            <Column
                                title="操作"
                                key="action"
                                defaultPageSize={1}
                                render={(text, record) => (
                                    <span>
                                        <span onClick={() => { this.delents(record, record.grade_id) }}>批卷</span>
                                    </span>
                                )}
                            />
                        </ColumnGroup>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Awaiting