import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Films() {
  return (
    <div>
      films
      {/* 类似vue中 router-view */}
      <Outlet></Outlet>
    </div>
  )
}
