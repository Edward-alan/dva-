import React, { Component } from 'react'
import { Form, Input, DatePicker, Button, Select, InputNumber } from 'antd';
import Axios from "@/utils/headertoken"
import { connect } from 'dva'
const { Option } = Select;

@Form.create()
@connect(state => {
    return state.questions;
})
class Addtest extends Component {
    state = {
        size: 'default',
        startValue: null,
        endValue: null,
        endOpen: false,
        questions_type: [],  //考试类型
        subject: [], // 课程类型
        subject_id: "",
        exam_id: "",
        title: "",
        number: null
    };


    //选择课程
    handleChange = (value) => {
        // console.log(`selected ${value}`);
    }
    //考试类型
    handleChangeType = (value) => {
        // console.log(value)
    }
    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };
    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        this.onChange('startValue', value);
    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };
    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };
    handleSubmit = (e) => {
        console.log(this.state.startValue, this.state.endValue)

        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Axios.post("/exam/exam", {
                    subject_id: this.state.subject_id,
                    exam_id: this.state.exam_id,
                    title: values.examTitle,
                    number: values.inputNum,
                    start_time: Date.parse(new Date(this.state.startValue)),
                    end_time: Date.parse(new Date(this.state.endValue))
                }).then(res => {
                    if (res.code === 1) {
                        this.props.history.push({
                            pathname: "/home/createpaper"
                        })
                    }
                })
            }
        });
    }

    componentDidMount() {
        Axios.get("/exam/examType").then(res => {
            res.data.map(item => {
                this.setState({
                    questions_type: res.data,
                    exam_id: item.exam_id
                })
            })
        })
        // Axios.get("/exam/subject").then(res => {
        //     res.data.map(item => {
        //         this.setState({
        //             subject: res.data,
        //             subject_id: item.subject_id
        //         })
        //     })
        // })

        this.props.dispatch({ type: 'questions/getaddtestyi' }).then(res => {
            res.data.map(item => {
                this.setState({
                    subject: res.data,
                    subject_id: item.subject_id
                })
            })
        })
    }
    
    render() {
        const { formLayout, startValue, endValue, endOpen } = this.state;
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
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="试卷名称">
                        {getFieldDecorator('examTitle', {
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="测试题量">
                        {getFieldDecorator('inputNum', { initialValue: 4, rules: [{ required: true, message: 'Please input your note!' }], })(<InputNumber min={1} max={10} />)}
                    </Form.Item>
                    <Form.Item label="选择考试类型">
                        {getFieldDecorator('examType', {
                            rules: [{ required: true, message: 'Please input your note!' }],
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
                            rules: [{ required: true, message: 'Please input your note!' }],
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
                    <Form.Item label="考试时间" style={{ marginBottom: 0 }}>
                        <div>
                            <DatePicker
                                disabledDate={this.disabledStartDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={startValue}
                                placeholder="Start"
                                onChange={this.onStartChange}
                                onOpenChange={this.handleStartOpenChange}
                            />
                            <DatePicker
                                disabledDate={this.disabledEndDate}
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                value={endValue}
                                placeholder="End"
                                onChange={this.onEndChange}
                                open={endOpen}
                                onOpenChange={this.handleEndOpenChange}
                            />
                        </div>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button type="primary" htmlType="submit" className="btn">
                            添加试卷
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

}
export default Addtest;
