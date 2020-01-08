import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import './css/style.css'
import SiderMeru from './SiderMeru'
import RouterView from '@/router/routerView'
import { withRouter } from 'dva/router'
import Axios from '@/utils/headertoken'
import { Avatar, Popover, Button } from 'antd';

const { Header, Content, Sider } = Layout;

@withRouter
export class Index extends Component {

    state = {
        username: '',
        clicked: false,
        hovered: false,
    }
    componentDidMount() {
        Axios.get('/user/userInfo').then(res => {
            this.setState({ username: res.data.user_name })
        })
    }
    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };
    close = () => {


        this.props.history.push('/login');

    }
    render() {
        const { routes } = this.props;
        const { username } = this.state;
        const content = (
            <div>
                <p>个人中心</p>
                <p>我的班级</p>
                <p>设置</p>
                <p onClick={this.close}>退出登录</p>
            </div>
        );
        return (
            <div className="wraps">
                <Layout className="boxs-kuan">
                    <Header className="header">
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            style={{ lineHeight: '64px' }}
                            defaultSelectedKeys={['1']}
                            mode="inline">
                            <span>北京八维研修学院</span>
                            <div>
                                <Popover
                                    style={{ width: 500 }}
                                    content={content}
                                    trigger="hover"
                                    visible={this.state.hovered}
                                    onVisibleChange={this.handleHoverChange}
                                >
                                    <Popover
                                        content={content}
                                        trigger="click"
                                        visible={this.state.clicked}
                                        onVisibleChange={this.handleClickChange}
                                    >
                                        <Button style={{ border: 0, background: '#001529', color: '#fff' }}>
                                            <span><Avatar style={{ marginRight: "10px" }} icon="user" />{username}</span>
                                        </Button>
                                    </Popover>
                                </Popover>
                            </div>

                        </Menu>
                    </Header>
                    <Layout className="box-wrap">
                        <Sider width={200} style={{ background: '#fff' }}>
                            <SiderMeru />
                        </Sider>

                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>添加试题</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}>
                                <RouterView routes={routes} />
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Index


