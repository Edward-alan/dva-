import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import Mask from "@/components/mask"

export class Createpaper extends Component {
    state = {
        visible: false,
        data:JSON.parse(localStorage.getItem("arr"))
    }
    render() {
        return (
            <div className="createpaper-page"> 
               <div>
                    <Button type="primary" onClick={this.showDrawer}>
                        + 添加新题
                    </Button>
                    <Drawer
                        width={'60%'} 
                        title="所有题目"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        <Mask />
                    </Drawer>
               </div>
               <div className="question">
                    {
                        this.state.data.map((item,index)=>{
                            return <div key={index} className="itemQuestion">
                                <div className="headers">
                                    <div>{item.title}</div>
                                    <a>删除</a>
                                </div>
                                <div>{item.questions_stem}</div>

                            </div>
                        })
                    }
               </div>
               <div className="createExam">
                    <Button onClick={this.toTestpaper} className="demandBtn">
                        创建试题
                    </Button>
               </div>
            </div>
        );
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    onClose = () => {
        this.setState({
          visible: false,
        });
    };
    toTestpaper=()=>{
        this.props.history.push("/home/testpaper")
    }
}

export default Createpaper;
