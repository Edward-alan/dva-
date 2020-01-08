/*
 * @Author: mikey.zhaopeng 
 * @Date: 2019-12-10 16:46:41 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-10 16:47:15
 * 阅卷详情
 */
import React, { Component } from 'react'
import "./scss/style.css"
import { Select, Button, Table } from 'antd';
import { connect } from 'dva'
const { Column, ColumnGroup } = Table;

@connect(state => {
    //es7方法修饰符调用
    return state.questions;
})
export class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listtype: []
        }
    }
    componentDidMount() {
        this._quest()
        this._grade()
    }
    _quest() {
        this.props.dispatch({ type: 'questions/getQuestionsType' }).then(res => {
            this.setState({
                listtype: res.data
            })
        })
    }
    _grade(){
        this.props.dispatch({ type: 'questions/getstudent' }).then(res => {
            console.log(res)
        })
    }
    handleChange(value) {
        console.log(`selected ${value}`);
        //模糊搜索
    }
    inquire() {
        console.log(123)
    }
    render() {
        // console.log(this.props.location.query)
        const { Option } = Select;
        let { listtype } = this.state
        console.log(listtype)
        return (
            <div className="wrap-boxxs">
                <div className="leixing">
                    <span>状态:</span>
                    <Select defaultValue="" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>

                    </Select>

                    <span>班级:</span>
                    <Select defaultValue="" style={{ width: 200 }} onChange={this.handleChange.bind(this)}>
                        {listtype && listtype.map((item, index) => <Option key={index} value={item.grade_name}>{item.grade_name}</Option>)}
                    </Select>
                    <Button type="primary" icon="search" onClick={this.inquire}>查询</Button>
                </div>
                <Table dataSource={listtype} rowKey="grade_id" pagination={false}>
                    <ColumnGroup>
                        <Column title="班级名" dataIndex="grade_name" key="grade_name" />
                        <Column title="课程名称" dataIndex="subject_text" key="subject_text" />
                        <Column title="阅卷状态" dataIndex="age" key="age" />
                        <Column title="课程名称" dataIndex="subject_text" key="exam_exam_id" />
                        <Column title="成才率" dataIndex="room_text" key="room_text" />
                        <Column
                            title="操作"
                            key="action"
                            defaultPageSize={1}
                            render={(text, record) => (
                                <span>
                                    <span >已阅卷</span>
                                </span>
                            )}
                        />
                    </ColumnGroup>
                </Table>
            </div>
        )
    }
}

export default Detail
