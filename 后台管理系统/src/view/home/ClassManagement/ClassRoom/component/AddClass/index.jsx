/*
 * @Author: fengdm 
 * @Date: 2019-12-07 07:49:11 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-13 09:34:18
 * 添加教室的弹框 
 */

import React, { Component } from 'react';
import { Modal, Button, Input } from 'antd';
import Axios from "@/utils/headertoken"

class AddClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      classroom: '',
    };
    this.handleChangeclassroom = this.handleChangeclassroom.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    Axios.post('/manger/room', {
      room_text: this.state.classroom,
    }).then(res => {
      if (res.code === 1) {
        this.props.getclassList()
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
  handleChangeclassroom(event) {
    this.setState({ classroom: event.target.value });
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
            <h3>教室号</h3>
            <Input placeholder="请选择教室号" value={this.state.classroom} onChange={this.handleChangeclassroom} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddClass;