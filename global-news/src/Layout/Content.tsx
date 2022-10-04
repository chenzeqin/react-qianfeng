import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
const { Content } = Layout;

export default function APPContent() {
  return (
    <Content>
      <Outlet></Outlet>
    </Content>
  )
}
