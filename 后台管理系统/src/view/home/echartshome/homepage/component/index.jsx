import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import Axios from '@/utils/headertoken'
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class EchartsTest extends Component {
    state = {
        subject:''
    }
    componentDidMount() {
        Axios.get('/api/exam/subject').then(res => {
           res.data.map((item,index)=>{
                this.setState({subject:item.subject_text})
           })
        })
    }
    getOption = () =>{

    var dataAxis = ['js上','js下','模块化开发','移动端开发','node基础','组件化开发','渐进式开发','项目实战','node高级','js高级']

     let option = {
            title: { text: '题目类型统计' },
            tooltip: {},
            xAxis: {
                data:dataAxis
            },
            yAxis: {},
            series: [{
                name: '题目类型统计',
                type: 'bar',
                itemStyle:{
                    normal:{
                        color:'skyblue'
                    }
                },
                data: [35, 50, 60, 140, 40,30, 28,25,24,22]
            }]
        }
        return option
    }

    render() {       
        // const subject  = this.state
        return (
            <Card.Grid className="bar_a" style={{width: "1000px", height:"370",marginTop:"5%"}}>
                <ReactEcharts option={this.getOption()}  style = {{width:"700px",height:"345px"}}/>
            </Card.Grid>
        )
    }
}
