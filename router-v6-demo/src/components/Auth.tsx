import React, { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

export default function Auth(props: PropsWithChildren) {
  return (
    <div>
      {
        hasAuth() ? props.children : <Navigate to="/login"></Navigate>
      }
    </div>
  )
}

function hasAuth() {
  return localStorage.getItem('access-token')
}