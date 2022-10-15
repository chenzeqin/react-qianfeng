import React from 'react'
import { useAuth } from './hooks/useAuth'
import { Spin } from 'antd';
import NoPermission from '../../views/401';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { token, loading, user } = useAuth()
  const { pathname } = useLocation()
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
