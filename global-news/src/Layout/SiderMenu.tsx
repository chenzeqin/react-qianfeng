import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
const { Sider } = Layout;

interface SiderMenuProps {
  collapsed: boolean
}
export default function SiderMenu(props: SiderMenuProps) {
  const navigate = useNavigate()

  const handleClick: MenuProps['onClick'] = ({ item, key, keyPath, domEvent }) => {
    navigate(key)
  }

  const { collapsed } = props
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[]}
        onClick={handleClick}
        items={[
          {
            key: '/home',
            icon: <UserOutlined />,
            label: '首页'
          },
          {
            key: '/user',
            icon: <VideoCameraOutlined />,
            label: '用户管理',
            children: [
              {
                key: '/user/list',
                label: '用户列表',
              }
            ]
          },
          {
            key: '/permission',
            icon: <UploadOutlined />,
            label: '权限管理',
            children: [
              {
                key: '/permission/list',
                label: '权限列表',
              }
            ]
          },
        ]}
      />
    </Sider>
  )
}
