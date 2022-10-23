import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd';
import { useAppSelector } from '../store/hooks';
const { Content } = Layout;

export default function APPContent() {
  const loading = useAppSelector(state => state.user.loading)
  return (
    <Content>
      <Spin size='large' spinning={loading}>
        <Outlet></Outlet>
      </Spin>
    </Content>
  )
}
