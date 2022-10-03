import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './TabBar.css'

export default function TabBar() {
  return (
    <ul className="TabBar">
      <li>
        {/* 渲染成a标签 */}
        {/* <Link to="/films">电影</Link> */}
        <NavLink
          to="/films"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }
        >电影</NavLink>
      </li>
      <li>
        <NavLink
          to="/cinemas"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }>影院</NavLink>
      </li>
      <li>
        <NavLink
          to="/center"
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }>个人中心</NavLink>
      </li>
    </ul >
  )
}
