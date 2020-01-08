import React, { Component } from 'react'
import Axios from "@/utils/headertoken"
import { Table } from 'antd';
import { Form, Button, Select } from 'antd';
const { Option } = Select;

function timeFormate(timestamp) {
    let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000 

    let Y = date.getFullYear() + '-';

    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';

    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() + ' ';

    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s;
}



@Form.create()
export default class Testpaper extends Component {
    componentDidMount() {
        //所有列表
        Axios.get("/exam/exam").then(res => {
            this.setState({
                data: res.exam
            })
        });
        //考试类型
        Axios.get("/exam/examType").then(res => {
            this.setState({
                questions_type: res.data,
            })
        })

        //课程
        Axios.get("/exam/subject").then(res => {
            this.setState({
                subject: res.data,
            })
        })
    }
    handleToDetail = (text, record) => {
        console.log(text.exam_exam_id)

        Axios.get("/exam/exam/" + text.exam_exam_id).then(res => {
            console.log(res.data)
            this.props.history.push({
                pathname: "/home/examdetail",
                params: {
                    data: res.data
                }
            })
        })
    }


    state = {
        columns: [
            {
                title: '试卷信息',
                dataIndex: "title",
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
            },
            {
                title: '创建人',
                dataIndex: 'user_name',
            },
            {
                title: '开始时间',
                dataIndex: "start_time"
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
            },
            {
                title: '操作',
                dataIndex: '',
                render: (text, record) => <a onClick={this.handleToDetail.bind(text, record)}>详情</a>
            }
        ],
        data: [],
        id: "",
        end: [],
        questions_type: [],
        subject: []
    }
    render() {
        const { formLayout, startValue, endValue, endOpen, questions_type } = this.state;
        const formItemLayout =
            formLayout === 'horizontal'
                ? {
                    labelCol: { span: 4 },
                    wrapperCol: { span: 14 },
                }
                : null;
        const buttonItemLayout =
            formLayout === 'horizontal'
                ? {
                    wrapperCol: { span: 14, offset: 4 },
                }
                : null;
        const { getFieldDecorator } = this.props.form;
        const { size } = this.state;
        return (
            <div>
                <div>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <div className="formCon">
                            <Form.Item label="选择考试类型">
                                {getFieldDecorator('examType', {

                                })(
                                    <Select style={{ width: 120 }} onChange={this.handleChangeType}>
                                        {
                                            this.state.questions_type.map((item, index) => {
                                                return <Option value={item.exam_name}>{item.exam_name}</Option>
                                            })
                                        }
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item label="选择课程">
                                {getFieldDecorator('examClass', {

                                })(
                                    <Select size={size} onChange={this.handleChangeType} style={{ width: 120 }}>
                                        {
                                            this.state.subject.map((item, index) => {
                                                return <Option value={item.subject_text}>{item.subject_text}</Option>
                                            })
                                        }
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item {...buttonItemLayout}>
                                <Button type="primary" htmlType="submit" className="demandBtn">
                                    查询
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
                <div>
                    <h4>试卷列表</h4>
                    <Table columns={this.state.columns} dataSource={this.state.data} size="middle" />
                </div>
            </div>
        )
    }
}
