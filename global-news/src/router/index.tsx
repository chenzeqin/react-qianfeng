import React, { useEffect } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import ProtectedRoute from '../components/Auth/ProtectedRoute'
import Layout from '../Layout'
import NotFound from '../views/404'
import Home from '../views/Home'
import Login from '../views/Login'
import PermissionList from '../views/Permission/List'
import RoleList from '../views/Role/List'
import UserList from '../views/User/List'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style
import AddNews from '../views/News/Add'
import Draft from '../views/News/Draft'
import AuditList from '../views/Audit/List'

export default function AppRouter() {

  NProgress.start()
  useEffect(() => {
    console.log('router -config')
    NProgress.done()
  })

  const element = useRoutes([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '',
          element: <Navigate to="/home"></Navigate>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/user-manage/list',
          element: <ProtectedRoute><UserList></UserList></ProtectedRoute>
        },
        {
          path: '/right-manage/role/list',
          element: <ProtectedRoute><RoleList></RoleList></ProtectedRoute>
        },
        {
          path: '/right-manage/right/list',
          element: <ProtectedRoute><PermissionList></PermissionList></ProtectedRoute>
        },
        {
          path: '/news-manage/add',
          element: <ProtectedRoute><AddNews></AddNews></ProtectedRoute>
        },
        // 草稿箱
        {
          path: '/news-manage/draft',
          element: <ProtectedRoute><Draft></Draft></ProtectedRoute>
        },
        // 审核列表
        {
          path: '/audit-manage/list',
          element: <ProtectedRoute><AuditList></AuditList></ProtectedRoute>
        },
        {
          path: '/404',
          element: <NotFound></NotFound>
        },
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/',
      element: <Navigate to="/home"></Navigate>
    },
    {
      path: '*',
      element: <Navigate to="/404"></Navigate>
    },
  ])
  return element
}
