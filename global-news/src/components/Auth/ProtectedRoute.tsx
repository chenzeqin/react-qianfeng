import React from 'react'
import { useAuth } from './hooks/useAuth'
import { Spin } from 'antd';
import NoPermission from '../../views/401';
import { useLocation } from 'react-router-dom';

interface Props {
  authPath?: string // 动态参数路由path
  children: React.ReactNode
}

export default function ProtectedRoute(props: Props) {
  const { children, authPath } = props
  const { token, loading, user } = useAuth()
  let { pathname } = useLocation()

  // console.log(props, useMatch({
  //   path: '/news-manage/preview/:id',
  //   caseSensitive: false,
  //   end: true
  // }))

  // 处理动态路由参数,临时使用传入参数判断。 TODO: 查找路由配置的path api
  if (authPath) pathname = authPath

  const rights = user.role?.rights || []

  const notNeedPermissionRoute = ['/', '/login', '/404']

  const isNoPermission = !notNeedPermissionRoute.includes(pathname) && !rights.includes(pathname)


  if (!loading && (!token || isNoPermission)) {
    return <NoPermission></NoPermission>
  }

  return (
    <>
      {loading ? <Spin tip="用户信息查询中..."></Spin> : children}
    </>
  )
}
