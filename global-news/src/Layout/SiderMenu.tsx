import * as iconMap from '@ant-design/icons';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate, useLocation, useMatch } from 'react-router-dom'
import { getPermissionTree } from '../api/permission';
import { Right } from '../views/Permission/type';
import { User } from '../views/User/type';
import { Role } from '../views/Role/type';
console.log(iconMap)
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
  const jsonStr = localStorage.getItem('user')
  let user: Partial<User> = {
    username: '',
    role: {}
  }
  if (jsonStr) user = JSON.parse(jsonStr)
  const [menu, setMenu] = useState<MenuProps['items']>([])
  // fetch menu data
  useEffect(() => {
    getPermissionTree().then(res => {
      setMenu(generateMenu(res, user.role!))
    }).catch(err => {
      console.error(err)
    })
  }, [])

  // 默认选中，默认展开
  // defaultSelectedKeys 不是可控属性， 需要设置selectedKeys，数据修改才会重新设置状态
  const location = useLocation()
  const { pathname } = location
  const openKey = pathname.split('/')[1]

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" >全球新闻发布系统</div>
      <div className="ant-menu-wrapper">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={[`/${openKey}`]}
          onClick={handleClick}
          items={menu}
        />
      </div>
    </Sider>
  )
}


// 后端数据处理为符合菜单格式的数据
function generateMenu(data: Right[], role: Partial<Role>): MenuProps['items'] {
  const menu = data.map((item) => {
    const { key, title, id, pagepermisson, icon, } = item
    // 通过数据，动态渲染菜单
    const iconEle = icon && (iconMap as any)[icon] ? React.createElement((iconMap as any)[icon]) : undefined
    const rights = role.rights || []
    // pagepermisson = 1 才渲染菜单项
    if (pagepermisson !== 1 || !rights.includes(key)) {
      return undefined
    }
    if (item.children && item.children.length) {
      return {
        key,
        label: title,
        id,
        icon: iconEle,
        children: generateMenu(item.children, role)
      }
    } else {
      return {
        key,
        label: title,
        icon: iconEle,
        id
      }
    }
  })
  return menu.filter(item => !!item) as MenuProps['items']
}