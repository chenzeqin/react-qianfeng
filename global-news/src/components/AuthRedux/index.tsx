import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { rightTreeAction, userAction } from '../../store/actions/useActions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
/* redux版本auth组件 */
const whiteList = ['/login', '/news', '/news-detail']


interface Props {
  children: React.ReactNode
}

export default function AuthRedux(props: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useAppSelector(state => state.user.token)
  const userInfo = useAppSelector(state => state.user.userInfo)
  const rightTree = useAppSelector(state => state.user.rightTree)
  const dispatch = useAppDispatch()


  // token 更新时重新获取用户信息
  useEffect(() => {
    if (whiteList.some(item => location.pathname.indexOf(item) > -1)) {
      return
    }
    // 路由拦截
    if (!token || !userInfo.id) {
      if (location.pathname !== '/login') {
        navigate('/login')
      }
      return
    }

    if (!rightTree.length) {
      dispatch(userAction(userInfo.id))
      dispatch(rightTreeAction())
    }

  }, [token, userInfo.id, location.pathname, dispatch, navigate, rightTree.length])


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
