/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-12-06 12:04:19 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-13 20:39:26
 * 添加试题
 */
import React, { Component } from 'react'
import { Input, Select, Button } from 'antd';
import Axios from "@/utils/headertoken"

export default class Examadd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            textare1: '',
            textare2: '',
            value1: '',
            value2: '',
            value3: ''
        }
    }
    textare1(e) {
        this.setState({
            textare1: e.target.value
        })
    }
    textare2(e) {
        this.setState({
            textare2: e.target.value
        })
    }
    handleChange1(value) {
        console.log(`selected ${value}`);
        this.setState({
            value1: value
        })
    }
    handleChange2(value) {
        console.log(`selected ${value}`);
        this.setState({
            value2: value
        })
    }
    handleChange3(value) {
        console.log(`selected ${value}`);
        this.setState({
            value3: value
        })
    }
    title(e) {
        this.setState({
            title: e.target.value
        })
    }
    btnsubmint() //添加试题
    {
        let { title, textare1, textare2 } = this.state
        Axios.post('/exam/questions', {
            questions_type_id: 'fwf0t-wla1q',
            questions_stem: textare1,
            subject_id: 'fqtktr-1lq5u',
            exam_id: '8sc5d7-7p5f9e-cb2zii-ahe5i',
            user_id: 'ypay2t-7uxsd',
            questions_answer: textare2,
            title: title
        }).then((res) => {
            console.log(res)
        })
    }
    render() {
        const { TextArea } = Input;
        let { title, textare1, textare2 } = this.state
        const { Option } = Select;
        return (
            <div>
                <h3>题目信息</h3>
                <p>题干</p>
                <Input placeholder="请输入题目标题,不超过20个字儿" value={title} onChange={this.title.bind(this)} />
                <p>题目主题</p>
                <TextArea rows={10} value={textare1} onChange={this.textare1.bind(this)} />
                <div>
                    <p>选择考试类型</p>
                    <Select defaultValue="周考一" style={{ width: 120 }} onChange={this.handleChange1.bind(this)}>
                        <Option value="周考一">周考一</Option>
                        <Option value="周考二">周考二</Option>
                        <Option value="月考">月考</Option>
                    </Select>
                </div>
                <div>
                    <p>选择课程类型</p>
                    <Select defaultValue="手写代码" style={{ width: 120 }} onChange={this.handleChange2.bind(this)}>
                        <Option value="模手写代码发">手写代码</Option>
                        <Option value="代码阅读">代码阅读</Option>
                    </Select>
                </div>
                <div>

                    <p>选择题目类型</p>
                    <Select defaultValue="问答题" style={{ width: 120 }} onChange={this.handleChange3.bind(this)}>
                        <Option value="简答题">问答题</Option>
                        <Option value="代码阅读">代码阅读</Option>
                        <Option value="修改bug">修改bug</Option>
                    </Select>
                </div>
                <h3>答案信息</h3>
                <TextArea rows={10} value={textare2} onChange={this.textare2.bind(this)} />
                <Button type="primary" onClick={this.btnsubmint.bind(this)}>提交</Button>
            </div>
        )
    }
}