import React from "react"
import TabsControl from "./index"
import { Checkbox } from 'antd';


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    // this.props.msg = `${e.target.checked}`
}

class TabComponent extends React.Component {

    render() {
        console.log(this.props.msg)
        return (
            <div className="container">
                <TabsControl>
                    <div name="视图权限">
                        <div className="authority">
                            <p>试题管理</p>

                            <Checkbox
                                value="n083ob-u54cop"
                                onChange={onChange}>
                                添加试题
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                试题分类
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                查看试题
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                编辑试题
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                试题详情
                            </Checkbox>
                        </div>
                        <div className="authority">
                            <p>用户管理</p>
                            <Checkbox
                                onChange={onChange}>
                                添加用户
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                角色管理
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                用户展示
                            </Checkbox>
                        </div>
                        <div className="authority">
                            <p>考试管理</p>
                            <Checkbox
                                onChange={onChange}>
                                添加考试
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                试题列表
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                创建试题
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                试卷详情
                            </Checkbox>
                        </div>
                        <div className="authority">
                            <p>班级管理</p>
                            <Checkbox
                                onChange={onChange}>
                                班级管理
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                教师管理
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                学生管理
                            </Checkbox>
                        </div>
                        <div className="authority">
                            <p>阅卷管理</p>
                            <Checkbox
                                onChange={onChange}>
                                待批班级
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                批卷详情
                            </Checkbox>
                            <Checkbox
                                onChange={onChange}>
                                阅卷
                            </Checkbox>
                        </div>
                    </div>
                    <div name="接口权限">
                        <p>Content of tab 2</p>
                    </div>
                </TabsControl>
            </div>
        )
    }
}

export default TabComponent