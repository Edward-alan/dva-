/*
 * @Author: fengdm 
 * @Date: 2019-12-07 07:49:48 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-13 09:36:37
 * 添加班级的弹框
 */

import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import Axios from "@/utils/headertoken"

class AddFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      class: '',
      classroom: '',
      lesson: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeclassroom = this.handleChangeclassroom.bind(this);
    this.handleChangelesson = this.handleChangelesson.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    Axios.post('/manger/grade', {
      grade_name: this.state.class,
      room_id: this.state.classroom,
      subject_id: this.state.lesson
    }).then(res => {
      console.log(res);
      if (res.code === 1) {
        this.props.getclassList()
        this.setState({
          class: '',
          classroom: '',
          lesson: ''
        })
      }
    })
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  //班级名
  handleChange(event) {
    this.setState({ class: event.target.value });
  }
  handleChangeclassroom(event) {
    this.setState({ classroom: event.target.value });
  }
  handleChangelesson(event) {
    this.setState({ lesson: event.target.value });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <span>+</span><span>{this.props.butit}</span>
        </Button>
        <Modal
          title={this.props.butit}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <h3>班级名</h3>
            <Input placeholder="班级名" value={this.state.class} onChange={this.handleChange} />
          </div>
          <div>
            <h3>教室号</h3>
            <Input placeholder="请选择教室号" value={this.state.classroom} onChange={this.handleChangeclassroom} />
          </div>
          <div>
            <h3>课程名</h3>
            <Input placeholder="课程名" value={this.state.lesson} onChange={this.handleChangelesson} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddFrame;