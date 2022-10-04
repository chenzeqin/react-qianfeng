import { Layout } from 'antd';
import React, { useState } from 'react';
import APPContent from './Content';
import AppHeader from './Header';
import './index.scss'
import SiderMenu from './SiderMenu';

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="main-layout" >
      <SiderMenu collapsed={collapsed}></SiderMenu>
      <Layout className="right-layout">
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed}></AppHeader>
        <APPContent></APPContent>
      </Layout>
    </Layout >
  );
};

export default AppLayout;