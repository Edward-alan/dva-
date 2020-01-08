/*
 * @Author: fengdm 
 * @Date: 2019-12-06 13:45:44 
 * @Last Modified by: fengdm
 * @Last Modified time: 2019-12-06 16:26:02
 * 班级管理界面
 */
import React, { Component } from 'react';
import MainHeight from '../components/main-header.jsx'
import MainCount from '../components/main-count/index.jsx'

class Index extends Component {
    state={
        headtit:"班级管理"
    }
    render() {
        return (
            <div className='main'>
                <MainHeight arr={this.state.headtit}></MainHeight>
                <MainCount></MainCount>
            </div>
        );
    }
}

export default Index;