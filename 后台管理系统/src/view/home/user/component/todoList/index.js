import React, { Component } from "react";
import { Button } from "antd";
import CreateTodo from "./popout";

export class TodoLists extends Component {
  state = {
    visible: false,
    adds: ""
  };

  but = () => {
    //点击弹框显示
    this.setState({
      visible: true
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  subpack = () => {
    console.log(123);
  };

  render() {
    const { visible } = this.state;
   
    return (
      <div>
        <div>
          {/* 点击弹框 */}
          <Button type="primary" onClick={this.but}>
            添加角色
          </Button>
        </div>
        {/* 弹框组件 */}
        <CreateTodo
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
          visible={visible}
        />
        {/* <Table dataSource={adds} columns={columns} /> */}
      </div>
    );
  }
}

export default TodoLists;
