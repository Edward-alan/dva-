import React, { Component } from "react";
import { Form, Row, Col} from "antd";

@Form.create()
export class SuperForm extends Component {
  handleSmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubimit(values);
      }
    });
  };

  get renderFields() {
    const { getFieldDecorator } = this.props.form;
    const { fields } = this.props;
    const children = fields.map(item => {
      <Col span={8} key={item.name}>
        <Form.Item label={item.label}>
          {getFieldDecorator(item.name,item.options)(
              item.content
          )}
        </Form.Item>
      </Col>;
    })
    return children
  }

  render() {
    const { buttons } = this.props;
    return (
      <Form onSubmit={this.handleSmit}>
        <Row gutter={24}>{this.renderFields}</Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            {buttons}
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SuperForm;
