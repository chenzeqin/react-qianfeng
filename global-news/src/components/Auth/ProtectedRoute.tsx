import React from 'react'
import { useAuth } from './hooks/useAuth'

interface Props {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { token, rightTree, loading } = useAuth()

  if (!token || !rightTree.length) {
    return <div style={{ color: 'red', fontSize: '40px' }}>no permission</div>
  }

  return (
    <>
      {loading ? <div>用户信息查询中...</div> : children}
    </>
  )
}
