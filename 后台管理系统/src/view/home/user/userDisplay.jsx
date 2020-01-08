import React, { Component } from 'react'
import { Layout, Tabs } from 'antd';
import UserDate from './userdisplay/userdata'
import IdentityData from './userdisplay/Identitydata'
import IdentityApi from './userdisplay/IdentityApi'
import IdentityView from './userdisplay/IdentityView'
import Authority from './userdisplay/authority'
import View from './userdisplay/view'
// import TodoList from '@/models/todoList'
const { TabPane } = Tabs;
const { Header } = Layout;

function callback(key) {
    console.log(key);
}

class UserDisplay extends Component {
    render() {
        return (
            <Layout>

                <Header style={{ background: "#fff", fontSize: "20px", display: 'flex', lineHeight: "35px" }}>
                    {/* <TodoList /> */}
                    用户展示
                </Header>

                <Tabs onChange={callback} type="card">
                    <TabPane tab="用户数据" key="1">
                        <UserDate />
                    </TabPane>
                    <TabPane tab="身份数据" key="2">
                        <IdentityData />
                    </TabPane>
                    <TabPane tab="api接口权限" key="3">
                        <Authority />
                    </TabPane>
                    <TabPane tab="身份和api接口关系" key="4">
                        <IdentityApi />
                    </TabPane>
                    <TabPane tab="视图接口权限" key="5">
                        <View />
                    </TabPane>
                    <TabPane tab="身份和视图权限关系" key="6">
                        <IdentityView />
                    </TabPane>
                </Tabs>
            </Layout>
        )
    }
}
export default UserDisplay