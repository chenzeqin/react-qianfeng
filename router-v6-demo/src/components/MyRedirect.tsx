import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


interface Props {
  to: string
}

/* 自定义重定向组件 */
export default function MyRedirect(props: Props) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(props.to, { replace: true })
  })
  return (
    <div></div>
  )
}
