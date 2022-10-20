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
import DraftList from '../views/News/DraftList'
import AuditList from '../views/Audit/List'
import Audit from '../views/Audit/Audit'
import DraftPreview from '../views/News/Preview'
import UpdateNews from '../views/News/Update'
import PublishList from '../views/Publish/List'
import Category from '../views/News/Category'

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
        // 草稿箱列表
        {
          path: '/news-manage/draft',
          element: <ProtectedRoute><DraftList></DraftList></ProtectedRoute>
        },
        // 新增文章
        {
          path: '/news-manage/add',
          element: <ProtectedRoute><AddNews></AddNews></ProtectedRoute>
        },
        // 新增文章
        {
          path: '/news-manage/category',
          element: <ProtectedRoute><Category></Category></ProtectedRoute>
        },
        // 编辑文章文章
        {
          path: '/news-manage/update/:id',
          element: <ProtectedRoute authPath='/news-manage/update/:id'><UpdateNews></UpdateNews></ProtectedRoute>
        },
        // 预览
        {
          path: '/news-manage/preview/:id',
          element: <ProtectedRoute authPath='/news-manage/preview/:id'><DraftPreview></DraftPreview></ProtectedRoute>
        },
        // 审核操作
        {
          path: '/audit-manage/audit',
          element: <ProtectedRoute><Audit></Audit></ProtectedRoute>
        },
        // 审核列表
        {
          path: '/audit-manage/list',
          element: <ProtectedRoute><AuditList></AuditList></ProtectedRoute>
        },
        // 新闻列表-待发布
        {
          path: '/publish-manage/unpublished',
          element: <ProtectedRoute><PublishList></PublishList></ProtectedRoute>
        },
         // 新闻列表-已发布
        {
          path: '/publish-manage/published',
          element: <ProtectedRoute><PublishList></PublishList></ProtectedRoute>
        },
         // 新闻列表-已下线
        {
          path: '/publish-manage/sunset',
          element: <ProtectedRoute><PublishList></PublishList></ProtectedRoute>
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
