import React, { useEffect } from 'react'
import request from '../../utils/request'

export default function Center() {
  // 测试代理
  useEffect(()=>{
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4').then(res=>{
      console.log(res)
    })
    request('/user').then(res=>{
      console.log(res)
    })
  },[])
  return (
    <div>Center</div>
  )
}
