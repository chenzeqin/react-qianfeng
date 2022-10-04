import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  if (token) {
    navigate('/')
  }
  return (
    <div>Login</div>
  )
}
