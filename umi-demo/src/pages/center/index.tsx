import React from 'react'
import { useHistory } from 'umi';

function Center() {
  const history = useHistory()
  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          history.push("/login");
        }}
      >
        退出登陆
      </button>
    </div>
  )
}

// 自动把Auth作为父组件
Center.wrappers = ['@/wrappers/Auth']
export default Center
