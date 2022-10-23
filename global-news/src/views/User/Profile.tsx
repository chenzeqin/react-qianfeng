import { Button } from 'antd'
import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../../api/user'
import { RootState } from '../../store'
import { tokenAction, userAction } from '../../store/actions/useActions'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export default function Profile() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state: RootState) => {
    return state.user.userInfo
  })

  const handleLogout = () => {
    dispatch(tokenAction(''))
    dispatch(userAction())
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.username || '未登陆'}</p>
      <p>{user.region}</p>
      <Button type='primary' onClick={handleLogout}>退出登陆</Button>
    </div>
  )
}
