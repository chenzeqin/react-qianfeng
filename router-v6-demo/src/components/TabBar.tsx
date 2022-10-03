import React from 'react'
import { Link } from "react-router-dom";
import './TabBar.css'

export default function TabBar() {
  return (
    <ul className="TabBar">
      <li>
        {/* 渲染成a标签 */}
        <Link to="/films">电影</Link>
      </li>
      <li>
        <Link to="/cinemas">影院</Link>
      </li>
      <li>
        <Link to="/center">个人中心</Link>
      </li>
    </ul>
  )
}
