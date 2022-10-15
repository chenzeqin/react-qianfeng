import React from 'react'
import { useAuth } from './hooks/useAuth'

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { token, rightTree } = useAuth()

  if (!token || !rightTree.length) {
    return <div style={{ color: 'red', fontSize: '40px' }}>no permission</div>
  }

  return (
    <>
      {token}
      {children}
    </>
  )
}
