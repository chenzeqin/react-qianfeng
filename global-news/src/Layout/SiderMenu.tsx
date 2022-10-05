import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import { getPermissionTree } from '../api/user';
import { PermissionTreeData } from '../views/Permission/type';
const { Sider } = Layout;

interface Props {
  collapsed: boolean
}
export default function SiderMenu(props: Props) {
  const { collapsed } = props
  const navigate = useNavigate()
  const handleClick: MenuProps['onClick'] = ({ item, key, keyPath, domEvent }) => {
    navigate(key)
  }

  const [menu, setMenu] = useState<MenuProps['items']>([])
  // fetch menu data
  useEffect(() => {
    getPermissionTree().then(res => {
      console.log(res)
      setMenu(generateMenu(res))
    }).catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布系统</div>
      <div className="ant-menu-wrapper">
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[]}
          onClick={handleClick}
          items={menu}
        />
      </div>
    </Sider>
  )
}

// 后端数据处理为符合菜单格式的数据
// pagepermisson = 1 才渲染菜单项
function generateMenu(data: PermissionTreeData): MenuProps['items'] {
  const menu = data.map((item) => {
    const { key, title, id, pagepermisson } = item
    if (pagepermisson !== 1) {
      return undefined
    }
    if (item.children && item.children.length) {
      return {
        key,
        label: title,
        id,
        children: generateMenu(item.children)
      }
    } else {
      return {
        key,
        label: title,
        id
      }
    }
  })
  return menu.filter(item => !!item) as MenuProps['items']

  // return [
  //   {
  //     key: '/home',
  //     icon: <UserOutlined />,
  //     label: '首页'
  //   },
  //   {
  //     key: '/user',
  //     icon: <VideoCameraOutlined />,
  //     label: '用户管理',
  //     children: [
  //       {
  //         key: '/user/list',
  //         label: '用户列表',
  //       }
  //     ]
  //   },
  //   {
  //     key: '/permission',
  //     icon: <UploadOutlined />,
  //     label: '权限管理',
  //     children: [
  //       {
  //         key: '/permission/list',
  //         label: '权限列表',
  //       }
  //     ]
  //   },
  // ]
}