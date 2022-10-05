import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import Auth from '../components/Auth'
import Layout from '../Layout'
import NotFound from '../views/404'
import Home from '../views/Home'
import Login from '../views/Login'
import PermissionList from '../views/Permission/List'
import UserList from '../views/User/List'

export default function AppRouter() {
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
          path: 'home',
          element: <Home></Home>
        },
        {
          path: '/user-manage/list',
          element: <UserList></UserList>
        },
        {
          path: '/right-manage/role/list',
          element: <PermissionList></PermissionList>
        },
        {
          path: '/right-manage/right/list',
          element: <PermissionList></PermissionList>
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
