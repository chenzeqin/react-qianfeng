import React from 'react'
import { Button } from 'antd-mobile'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useHistory, useLocation } from 'umi'

export default function Cinemas() {
  const history = useHistory()
  const back = () => {
    history.goBack()
  }

  return (
    <div>
      <NavBar back='广州' onBack={back} backArrow={false} right={
         <div style={{ fontSize: 24 }}>
         <Space style={{ '--gap': '16px' }}>
           <SearchOutline />
         </Space>
       </div>
      } >
        影院
      </NavBar>
    </div>
  )
}
