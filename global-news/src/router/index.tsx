import React from 'react'
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'
import Auth from '../components/Auth'
import Layout from '../Layout'
import Home from '../views/Home'
import Login from '../views/Login'

export default function AppRouter() {
  const element = useRoutes([
    {
      path: '/',
      element: <Auth>
        <Layout></Layout>
      </Auth>,
      children: [
        {
          path: '',
          element: <Navigate to="/home"></Navigate>
        },
        {
          path: 'home',
          element: <Home></Home>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    }
  ])
  return element
}
