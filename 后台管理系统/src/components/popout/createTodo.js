import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { classify } from "@/api/serve";

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

@Form.create()
export class CreateTodo extends Component {
  handleCancel = e => {
    this.props.handleCancel();
  };
  handleOk = () => {
    this.props.handleOk();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        classify(values.addSome, values.crea);
      }
    });
  };

  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title="创建新类型"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>
            <Form.Item {...formItemLayout}>
              {getFieldDecorator("addSome", {
                rules: [
                  {
                    required: true,
                    message: "请输入类型名称"
                  }
                ]
              })(<Input placeholder="请输入类型" />)}
            </Form.Item>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateTodo;
