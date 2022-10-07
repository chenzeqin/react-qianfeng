import React from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';
const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean,
  setCollapsed: (collapsed: boolean) => void
}

export default function AppHeader(props: HeaderProps) {
  const { collapsed, setCollapsed } = props
  const navigate = useNavigate()
  const handleClick: MenuProps['onClick'] = ({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent)
    if (key === '2') {
      logout()
      // navigate('/login')
    }
    // navigate(key)
  }
  const menu = (
    <Menu onClick={handleClick} items={[
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
          <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          {/* <Avatar src="https://joeschmoe.io/api/v1/random" /> */}
        </Dropdown>
      </div>
    </Header >
  )
}
