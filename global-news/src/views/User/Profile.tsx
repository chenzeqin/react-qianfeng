import React, { useEffect } from 'react'
import { getUser } from '../../api/user'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export default function Profile() {
  const user = useAppSelector((state: RootState) => {
    return state.user.userInfo
  })


  return (
    <div>
      <p>{user.id}</p>
      <p>{user.username || '未登陆'}</p>
      <p>{user.region}</p>
    </div>
  )
}
