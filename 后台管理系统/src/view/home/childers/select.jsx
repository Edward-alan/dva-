/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-12-06 14:17:55 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-16 20:39:03
 * 查看试题
 */
import React, { Component } from 'react'
import Axios from "@/utils/headertoken"
import "../css/style.css"
import { Select, Button } from 'antd';
import { connect } from 'dva'

@connect(state => {
    //es7方法修饰符调用
    return state.questions;
})
export default class ExamType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            listtype: []
        }
    }
    componentDidMount() {
        Axios.get('/api/exam/questions/new').then((res) => {
            this.setState({
                list: res.data      //39条
            })
        })
        Axios.get('/exam/subject').then((res) => {
            this.setState({
                listtype: res.data   //10条
            })
        })
    }
    //按条件获取试题
    handleChange(value) {
        // this.props.dispatch({
        //     type: 'questions/getselectcond', payload: {
        //         exam_id: `${value}`,
        //         questions_id: `${value}`,
        //         questions_type_id: `${value}`,
        //         subject_id: `${value}`
        //     }
        // }).then(res => {
        //     console.log(res.data)
        // })
        Axios.get('/api/exam/questions/condition', {
            exam_id: 'jpg8y9-zbzt7o-jpvuhf-fwnjvr',
        }).then((res) => {
            console.log(res)
            this.setState({
                list: res.data
            })

        })
    }
    robot(item, id) {
        this.props.history.push({ pathname: `/home/AddDetail/${id}` })
        sessionStorage.setItem('key', JSON.stringify(item));
    }
    render() {
        const { Option } = Select;
        let { list, listtype } = this.state
        return (
            <div className="wrap-boxxs">
                <div className='top'>
                    <b>课程类型:</b>
                    <span>All</span>
                    {
                        listtype && listtype.map((item, index) => <span key={index}>{item.subject_text}</span>)
                    }
                </div>
                {/* 课程类型选择 */}
                <div className="leixing">
                    <span>考试类型:</span>

                    <Select defaultValue="" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>

                        <Option value="周考1">周考1</Option>
                        <Option value="周考2">周考2</Option>
                        <Option value="月考">月考</Option>
                    </Select>

                    <span>题目类型:</span>
                    <Select defaultValue="" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                        <Option value="简答题">简答题</Option>
                        <Option value="代码管理">代码管理</Option>
                        <Option value="代码补全">代码补全</Option>
                        <Option value="修改bug">修改bug</Option>
                        <Option value="手写代码">手写代码</Option>
                    </Select>
                    <Button type="primary" icon="search">查询</Button>
                </div>
                {/* 试题列表的渲染 */}
                <div className="boxitem">
                    {
                        list && list.map((item, index) => <div className='itemadd' key={index} onClick={() => this.robot(item, index)}>
                            <li>{item.title}</li>
                            <span className="borderand">{item.questions_type_text}</span>
                            <span className="borderand">{item.questions_type_text}</span>
                            <span className="borderand">{item.exam_name}</span>
                            <li>dingshaoshan 发布</li>

                        </div>)
                    }
                </div>

            </div>
        )
    }
}