import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './css/style.css'
import { NavLink } from 'react-router-dom'

const { SubMenu } = Menu;

export class SiderMeru extends Component {
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}>
                <Menu.Item ><NavLink to="/home/homepage">首页</NavLink></Menu.Item>
                <SubMenu key="sub1"
                    title={
                        <span><Icon type="user" />试题管理</span>}>
                    <Menu.Item key="1"><NavLink to="/home/updatashiti">添加试题</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/home/classify">试题分类</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to="/home/select">查看试题</NavLink></Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub2"
                    title={
                        <span><Icon type="laptop" />用户管理</span>}>
                    <Menu.Item key="5"><NavLink to='/home/adduser'>添加用户</NavLink></Menu.Item>
                    <Menu.Item key="6"><NavLink to='/home/roleManagement'>角色管理</NavLink></Menu.Item>
                    <Menu.Item key="7"><NavLink to='/home/userdisplay'>用户展示</NavLink></Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub3"
                    title={
                        <span><Icon type="laptop" />考试管理</span>}>
                    <Menu.Item key="8"><NavLink to='/home/addtest'>添加考试</NavLink></Menu.Item>
                    <Menu.Item key="9"><NavLink to='/home/testpaper'>试卷管理</NavLink></Menu.Item>
                </SubMenu>


                <SubMenu
                    key="sub4"
                    title={
                        <span><Icon type="laptop" />班级管理</span>}>
                    <Menu.Item key="10"><NavLink to='/home/ClassManagement'>班级管理</NavLink></Menu.Item>
                    <Menu.Item key="11"><NavLink to='/home/classroom'>教室管理</NavLink></Menu.Item>
                    <Menu.Item key="12"><NavLink to='/home/student'>学生管理</NavLink></Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub"
                    title={
                        <span><Icon type="laptop" />阅卷管理</span>}>
                    <Menu.Item key="5"><NavLink to='/home/awaiting'>待批班级</NavLink></Menu.Item>
                </SubMenu>
            </Menu>


        )
    }
}

export default SiderMeru;
