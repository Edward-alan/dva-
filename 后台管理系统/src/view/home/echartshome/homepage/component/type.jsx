import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'

export default class Type extends Component {

    // 绘制柱状图
    getOptionAxis = () => {
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b}({d}%)"
            },
            legend: {
                bottom: 25,
                left: 'center',
                data: ['周考一', '周考二', '周考三', '月考']
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
                        { value: 520, name: '周考一', itemStyle: { color: '#ace' } },
                        { value: 290, name: '周考二', itemStyle: { color: '#faa' } },
                        { value: 260, name: '周考三', itemStyle: { color: 'orange' } },
                        { value: 210, name: '月考', itemStyle: { color: '#eda' } }

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
                height: '350px',
                marginLeft:"10%"
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
