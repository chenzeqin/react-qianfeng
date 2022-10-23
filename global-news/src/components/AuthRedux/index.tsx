import { message } from 'antd';
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getPermissionTree } from '../../api/permission';
import { getUser, login } from '../../api/user';
import { loadingAction, rightTreeAction, tokenAction, userAction } from '../../store/actions/useActions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getToken } from '../../utils/auth';
import { Right } from '../../views/Permission/type';
import { User } from '../../views/User/type';
/* redux版本auth组件 */

interface Props {
  children: React.ReactNode
}

export default function AuthRedux(props: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useAppSelector(state => state.user.token)
  const userInfo = useAppSelector(state => state.user.userInfo)
  const dispatch = useAppDispatch()


  // token 更新时重新获取用户信息
  useEffect(() => {
    // 路由拦截
    if (!token || !userInfo.id) {
      if (location.pathname !== '/login') {
        navigate('/login')
      }
      return
    }

    dispatch(userAction(userInfo.id))
    dispatch(rightTreeAction())
  }, [token, userInfo.id])


  // const handleLogin = useCallback((username: string, password: string) => {
  //   login(username, password).then(res => {

  //     if (res.success) {
  //       dispatch(tokenAction('token-xxxx'))
  //       localStorage.setItem('token', 'token-xxx')
  //       localStorage.setItem('user', JSON.stringify(res.user))
  //       message.success('登陆成功')
  //       navigate('/')
  //     }
  //   })
  // }, []);

  // const handleLogout = useCallback(() => {
  //   dispatch(tokenAction(''))
  //   dispatch(userAction())
  //   localStorage.clear()
  //   navigate('/login')
  // }, [navigate])

  return (
    <>{props.children}</>
  )
}
