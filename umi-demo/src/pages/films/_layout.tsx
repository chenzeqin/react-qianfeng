import React, { ReactChildren } from 'react'

interface Props {
  children: ReactChildren
}
// 浏览器输入/films/comingsoon 自动匹配到 ComingSoon
export default function Films(props: Props) {
  return (
    <div className='films'>
      <div>banner</div>
      {props.children}
    </div>
  )
}
