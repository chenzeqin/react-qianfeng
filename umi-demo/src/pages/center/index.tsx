import React from 'react'

 function Center() {
  return (
    <div>Center</div>
  )
}

// 自动把Auth作为父组件
Center.wrappers = ['@/wrappers/Auth']
export default Center
