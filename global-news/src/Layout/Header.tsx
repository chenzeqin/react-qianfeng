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
    <Menu items={[
      {
        key: '1',
        label: '超级管理员',
      },
      {
        key: '2',
        label: '退出',
        danger: true
      },
    ]}>
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
