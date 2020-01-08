import React, { Component } from 'react'
import { Layout } from 'antd'
import EchartsTest from './component'
import Cricle from './component/cricle'
import Type from './component/type'
const {Header}  =  Layout
class HomePage extends Component {
    render() {
        return (
            <div className = 'homepage'>
                <Header style={{ background: "#fff", fontSize: "20px",marginTop:'-2%'}}>
                    统计概览
                </Header>
                <div className="echarts">
                    <Cricle/>
                    <Type/>
                </div>
                <EchartsTest/>
            </div>
        )
    }
}
export default HomePage