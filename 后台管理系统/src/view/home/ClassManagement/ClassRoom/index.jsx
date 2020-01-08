/*
 * @Author: fengdm 
 * @Date: 2019-12-06 13:43:46 
 * @Last Modified by: fengdm
 * @Last Modified time: 2019-12-12 20:29:20
 * 这是教室管理界面
 */

import React, { Component } from 'react';
import MainHeader from '../components/main-header.jsx'
import ClassMain from './component/ClassMain/index.jsx'

class ClassRoom extends Component {
    state={
        headtit:'教室管理'
    }
    render() {
        return (
            <div>
              <MainHeader arr={this.state.headtit}></MainHeader>
              <ClassMain/>
            </div>
        );
    }
}

export default ClassRoom;