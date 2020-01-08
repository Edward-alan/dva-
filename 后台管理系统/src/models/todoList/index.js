import React, { Component } from "react";
import { Table, Button } from "antd";
import CreateTodo from "@/components/popout/createTodo";
import Axios from "@/utils/headertoken";

export class TodoLists extends Component {
  state = {
    visible: false,
    adds: ""
  };
  componentDidMount() {
    Axios.get("/exam/getQuestionsType").then(res => {
      this.setState({
        adds: res.data
      });
    });
  }
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
    const { adds } = this.state;
    const { visible } = this.state;
    const columns = [
      {
        title: "类型ID",
        dataIndex: "questions_type_id",
        key: "questions_type_id"
      },
      {
        title: "类型名称",
        dataIndex: "questions_type_text",
        key: "questions_type_text"
      },
      {
        title: "操作",
        dataIndex: "cz",
        key: "cz"
      }
    ];
    return (
      <div>
        <div>
          {/* 点击弹框 */}
          <Button type="primary" onClick={this.but}>
            添加类型
          </Button>
        </div>
        {/* 弹框组件 */}
        <CreateTodo
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
          visible={visible}
        />
        <Table dataSource={adds} columns={columns} />
      </div>
    );
  }
}

export default TodoLists;
