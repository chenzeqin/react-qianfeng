import React, { ReactNode } from 'react'
import Login from '../../views/Login'
import { Navigate } from 'react-router-dom'

interface Props {
  children?: ReactNode
}

export default function Auth(props: Props) {
  return (
    <>
      {hasAuth() ? props.children : <Navigate to="/login"></Navigate>}
    </>
  )
}

function hasAuth() {
  return localStorage.getItem('token')
}
