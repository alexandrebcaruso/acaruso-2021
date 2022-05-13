import React, { useState, useEffect } from 'react';
import Logo from './components/logo/Logo';
import Triad from './components/triad/Triad';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    HomeOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

import './antd.less';
import "./App.scss";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const SiderLayout = () => {
    const [collapsed, setCollapsed] = useState(0);

    useEffect(() => {
        // sidenav initial state is collapsed
        setCollapsed(false);
    },[]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider 
                theme="light"
                collapsible 
                collapsed={collapsed} 
                onCollapse={() => setCollapsed(!collapsed)}
                style={{position: "fixed", height: "100vh"}}
            >
                <div className="logo" />
                <Menu defaultSelectedKeys={["1"]} mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<PieChartOutlined />} title="Profile">
                        <Menu.Item key="3">Plan</Menu.Item>
                        <Menu.Item key="4">Design</Menu.Item>
                        <Menu.Item key="5">Development</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Alexandre Caruso ©2021
                </Footer>
            </Layout>
        </Layout>
    );
};

const App = () => {
    return (
        <>
            <Triad />
            <Logo />
            <SiderLayout />
        </>
    );
};

export default App;
