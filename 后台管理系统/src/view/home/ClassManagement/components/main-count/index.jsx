import React, { Component } from 'react';
import AddFrame from '../AddFrame/index.jsx'
// eslint-disable-next-line no-redeclare
import { Table, Divider, Modal, Input, Select } from 'antd';
import Axios from "@/utils/headertoken"

const { Option } = Select;
class MainCount extends Component {
  state = {
    buttit: '添加教室',
    columns: [
      {
        title: '班级名',
        dataIndex: 'grade_name',
      },
      {
        title: '课程名',
        dataIndex: 'subject_text',
      },
      {
        title: '教室号',
        dataIndex: 'room_text',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={() => this.showModal(record)}>修改</a>
            <Divider type="vertical" />
            <a onClick={() => this.removeclass(record)}>删除</a>
          </span>
        ),
      }
    ],
    data: [],
    grade_id: '',
    visible: false,
    newclass: '',
    newclassid: '',
    newlesson: '',
    newoptions: [],
    items: ['34302', '34313', '34310', '34403', '34311', '34401'],
    lessons: ['模块化开发', '渐进式开发', '组件化开发', 'javascript下']
  }

  //获取班级数据
  getclassList() {
    let that = this;
    Axios.get('/manger/grade').then(res => {
      console.log(res.data, "55555555555");
      if (res.code === 1) {
        that.setState({
          data: res.data,
          options: res.data
        })
      }
    })
  }

  //删除班级
  removeclass(record) {
    Axios.delete('/manger/grade/delete', { data: { grade_id: record.grade_id } }).then(res => {
      console.log(res);
      if (res.code === 1) {
        this.getclassList();
      }
    })
  }
  //弹框
  showModal(record) {
    console.log(record);
    this.setState({
      newclass: record.grade_name,
      newclassid: record.room_text,
      newlesson: record.subject_text,
      visible: true,
    });
  };

  handleOk = e => {
    Axios.put('/manger/room/update', {})
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    })
  };
  componentDidMount() {
    this.getclassList();
  }
  render() {
    const { items } = this.state;
    return (
      <div className='count'>
        <AddFrame butit={this.state.buttit} getclassList={this.getclassList.bind(this)}></AddFrame>
        <Table columns={this.state.columns} dataSource={this.state.data} size="middle" rowKey="grade_id" />
        <div>
          <Modal
            title={this.state.buttit}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div>
              <h3>班级名</h3>
              <Input placeholder="班级名" value={this.state.newclass} onChange={this.handleChange} disabled />
            </div>
            <div>
              <h3>教室号</h3>
              <Select
                style={{ width: 240 }}
                placeholder={this.state.newclassid}
                dropdownRender={menu => (
                  <div>
                    {menu}
                  </div>
                )}
              >
                {items.map(item => (
                  <Option key={item}>{item}</Option>
                ))}
              </Select>
            </div>
            <div>
              <h3>课程名</h3>
              <Select
                style={{ width: 240 }}
                placeholder={this.state.newlesson}
                dropdownRender={menu => (
                  <div>
                    {menu}
                  </div>
                )}
              >
                {this.state.lessons.map(item => (
                  <Option key={item}>{item}</Option>
                ))}
              </Select>
            </div>
          </Modal>
        </div>

      </div>
    );
  }
}

export default MainCount;