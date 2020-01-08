import React, { Component } from 'react'
import { Input, Select, Button } from 'antd';

export class AddDetail extends Component {
    state = {
        title: '',
        exam_name: '',
        questions_type_text: '',
        subject_text: '',
        questions_answer: '',
        questions_stem: ''
    }
    componentDidMount() {
        var message = JSON.parse(sessionStorage.getItem('key'));
        console.log(message)
        this.setState({
            title: message.title,
            exam_name: message.exam_name,
            questions_type_text: message.questions_type_text,
            subject_text: message.subject_text,
            questions_answer: message.questions_answer,
            questions_stem: message.questions_stem,
        })
    }

    submit = () => {   //修改试题
        console.log(12312312)
    }
    render() {
        const { title, exam_name, questions_type_text, subject_text, questions_answer, questions_stem } = this.state
        console.log(title)
        const { TextArea } = Input;
        const { Option } = Select;
        return (
            <div>
                <div>
                    <h3>题目信息</h3>
                    <p>题干</p>
                    <Input placeholder="请输入题目标题,不超过20个字儿" value={title}/>
                    <p>题目主题</p>
                    <TextArea rows={40} value={questions_stem}/>
                    <div>
                        <p>选择考试类型</p>
                        <Select defaultValue="周考1" style={{ width: 120 }} >
                            <Option value="周考1">周考1</Option>
                            <Option value="周考2">周考2</Option>
                            <Option value="月考">月考</Option>
                        </Select>
                    </div>
                    <div>
                        <p>选择课程类型</p>
                        <Select defaultValue="手写代码" style={{ width: 120 }} >
                            <Option value="模手写代码发">手写代码</Option>
                            <Option value="代码阅读">代码阅读</Option>
                        </Select>
                    </div>
                    <div>

                        <p>选择题目类型</p>
                        <Select defaultValue="问答题" style={{ width: 120 }} >
                            <Option value="简答题">问答题</Option>
                            <Option value="代码阅读">代码阅读</Option>
                            <Option value="修改bug">修改bug</Option>
                        </Select>
                    </div>
                    <h3>答案信息</h3>
                    <TextArea rows={16} value={questions_answer}/>
                    <Button type="primary" onClick={this.submit}>提交</Button>
                </div>
            </div>
        )
    }
}

export default AddDetail
