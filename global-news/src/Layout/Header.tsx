import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean,
  setCollapsed: (collapsed: boolean) => void
}

export default function AppHeader(props: HeaderProps) {
  const { collapsed, setCollapsed } = props
  const menu = (
    <Menu>
      <Menu.Item>超级管理员</Menu.Item>
      <Menu.Item danger>退出</Menu.Item>
    </Menu>
  );
  return (
    <Header>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className="profile">
        <Dropdown overlay={menu}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Dropdown>
      </div>
    </Header >
  )
}
