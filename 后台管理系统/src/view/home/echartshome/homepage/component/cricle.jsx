import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class Cricle extends Component {

    // 绘制柱状图
    getOptionAxis = () => {
        let option = {
            title: {
                zlevel: 0,
                text: ['总共200道题'].join('\n'),
                top: 'center',
                left: '230',
                textAlign: 'center',
                textStyle: {
                    rich: {
                        value: {
                            color: '#666',
                            fontSize: 40,
                            fontWeight: 'bold',
                            lineHeight: 40,
                        },
                        name: {
                            color: '#666',
                            lineHeight: 20
                        },
                    },
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b}({d}%)"
            },
            legend: {
                bottom: 25,
                left: 'center',
                data: ['简答题', '代码阅读量', '代码补全', '修改bug', '手写代码']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{b}{per|{d}%}  ',
                            backgroundColor: '#fff',
                            borderColor: '#fff',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                b: {
                                    fontSize: '16px',
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#666',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        { value: 620, name: '简答题', itemStyle: { color: 'skyblue' } },
                        { value: 330, name: '代码阅读量', itemStyle: { color: '#acd' } },
                        { value: 270, name: '修改bug', itemStyle: { color: '#0f0' } },
                        { value: 220, name: '代码补全', itemStyle: { color: 'orange' } },
                        { value: 130, name: '手写代码', itemStyle: { color: '#faa' } }

                    ]
                }
            ]
        }
        return option

    }
    render() {
        return (
            <Card.Grid className="bar_a" style={{
                width: '500px',
                height: '350px'
            }}>
                <ReactEcharts
                    option={this.getOptionAxis()}
                    style={{
                        width: '100%',
                        height: '350px'
                    }}
                />
            </Card.Grid>
        )
    }
}
