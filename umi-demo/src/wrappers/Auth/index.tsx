import React, { ReactChildren, ReactPropTypes } from 'react'
import { Redirect } from 'umi'
import { useAuth } from './useAuth'

interface Props {
  children: ReactChildren
}

export default (props: Props) => {
  const { isLogin } = useAuth();

  console.info(`路由拦截：${isLogin ? '已登陆' : '未登录'}`)

  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
}
