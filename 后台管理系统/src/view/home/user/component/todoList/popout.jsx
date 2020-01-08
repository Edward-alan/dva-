import React, { Component } from "react";
import { Modal, Form, Input } from "antd";
import { connect } from 'dva'



const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};

@connect(state => {
  //es7方法修饰符调用
  return state.questions;
})
@Form.create()
export class CreateTodo extends Component {
  handleCancel = e => {
    this.props.handleCancel();
  };
  handleOk = () => {
    this.props.handleOk();
    this.props.form.validateFields((err, values) => {
      console.log(values.addSome)
      this.props.dispatch({
        type: 'questions/getAppendId', payload: {
          identity_text: values.addSome
        }
      }).then(res => {
        console.log(res)
      })
    });
  };

  render() {
    const { visible } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Modal
          title="创建新角色"
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
                    message: "请输入角色名称"
                  }
                ]
              })(<Input placeholder="请输入角色" />)}
            </Form.Item>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateTodo;
