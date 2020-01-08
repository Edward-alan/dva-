import React, { Component } from 'react'
import Axios from "@/utils/headertoken"
import { Form, Select, Modal, Button } from 'antd';
import "./style.css"
const { Option } = Select;

@Form.create()
export default class Mask extends Component {
    state = {
        questions_type: [],
        subject: [],
        questionsType: [],
        list: [],
        visible: false,
        questions_type_id:"",
        exam_id:"",
        subject_id:"",
        ind:null,
        arr:[]
    }
    render() {
        const { formLayout } = this.state;
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
        return (
            <div className="maskContent">
                <div className="tabs">
                    <span>课程类型:</span>
                    {
                        this.state.subject && this.state.subject.map((item,index) => {
                            return <span key={index} onClick={this.clickTab.bind(this,item,index)} className={index==this.state.ind?'active':null}>{item.subject_text}</span>
                        })
                    }
                </div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <div className="formCon">
                    <Form.Item label="选择考试类型">
                        {getFieldDecorator('examType', {
                    
                        })(
                            <Select style={{ width: 120 }} onChange={this.handleChangeType}>
                                {
                                    this.state.questions_type.map((item) => {
                                        return <Option value={item.exam_name}>{item.exam_name}</Option>
                                    })
                                }
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item label="题目类型">
                        {getFieldDecorator('subjectType', {
                           
                        })(
                            <Select style={{ width: 120 }} onChange={this.handleChangeExam}>
                                {
                                    this.state.questionsType.map((item) => {
                                        return <Option value={item.questions_type_text}>{item.questions_type_text}</Option>
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
                <div className="list">
                    {
                        this.state.list.map((item,index)=>{
                            return <div className="item">
                                        <div className="left">
                                            <div className="names">
                                                <div className="title">{item.title}</div>
                                            </div>
                                            <div className="types">
                                                <span>{item.questions_type_text}</span>
                                                <span>{item.subject_text}</span>
                                                <span>{item.exam_name}</span>
                                            </div>
                                            <div className="author">
                                                {item.user_name}
                                            </div>
                                        </div>
                                        <div className="handle">
                                            <a onClick={this.examAdd.bind(this,item)} data-value="add">添加</a>
                                            <a onClick={this.examDetail.bind(this,item)} data-value="detail">详情</a>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount() {
        //考试类型
        Axios.get("api//exam/examType").then(res => {
            res.data.map((item,index)=>{
                this.setState({
                    questions_type: res.data,
                    exam_id:item.exam_id
                })
                // console.log(this.state.exam_id)
            })
        })
        //课程类型
        Axios.get("/api/exam/subject").then(res => {
            res.data.map(item=>{
                this.setState({
                    subject: res.data,
                    subject_id:item.subject_id
                })
            })
        })
        //题目类型
        Axios.get("/api/exam/getQuestionsType").then(res => {
            res.data.map(item=>{
                    this.setState({
                        questionsType: res.data,
                        questions_type_id:item.questions_type_id
                    })
            })
        })
        //获取所有试题
        Axios.get("/api/exam/questions/new").then(res => {
            // console.log(res.data)
            this.setState({
                list: res.data
            })
        })
    }

    handleChangeType = (value) => {
        this.state.questions_type.map((item)=>{
            if(item.exam_name==value){
                this.setState({
                    exam_id:item.exam_id
                })
            }
        })
    }

    handleChangeExam = (value) => {
        this.state.questionsType.map((item)=>{
            if(item.questions_type_text==value){
                this.setState({
                    questions_type_id:item.questions_type_id
                })
            }
        })
    }
    //添加题目
    examAdd = (item) => {  
        if(!this.state.arr.includes(item)){
            this.state.arr.push(item);
            localStorage.setItem("arr",JSON.stringify(this.state.arr))
        }   
    }
    //题目详情
    examDetail = (item) => {
       
    }    

    showModal = (item) => {
        this.setState({
          visible: true,
        });
    };
    
    handleOk = e => {
        this.setState({
          visible: false,
        });
    };
    
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };
    handleSubmit=()=>{
        Axios.get(`/api/exam/questions/condition?exam_id=${this.state.exam_id}&questions_type_id=${this.state.questions_type_id}&subject_id=${this.state.subject_id}`).then(res=>{
            console.log(res)
            this.setState({
                list:res.data
            })
        })
    }

    clickTab=(item,index)=>{
        console.log(item)
        this.setState({
            subject_id:item.subject_id,
            ind:index
        })
    }

}
