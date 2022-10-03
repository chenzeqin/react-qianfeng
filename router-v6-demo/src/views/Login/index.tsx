import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => {
        localStorage.setItem('access-token', 'access-token-xxx')
        navigate('/')
      }}>一键登陆</button>
    </div>
  )
}
