import React, { ReactChild, useMemo } from 'react'
import { NavLink, Redirect, useHistory, useLocation } from 'umi'
import styles from './index.less'


interface Props {
  children: ReactChild
}

export default function Layouts(props: Props) {
  const location = useLocation()

  // /films重定向
  if (location.pathname === '/films') {
    return <Redirect to="/films/ComingSoon"></Redirect>
  }

  // tabBar 是否可见
  const tabBarVisible = useMemo(() => {
    return ['/films', '/cinemas', '/center'].some(item => {
      return location.pathname.includes(item)
    })
  }, [location.pathname])


  if (!tabBarVisible) {
    return <div>{props.children}</div>
  }
  return (
    <div>
      <ul className={styles.navBar}>
        <li className={styles.navBar.item}>
          <NavLink to='/films' activeClassName={styles.active}>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' activeClassName={styles.active}>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName={styles.active}>个人中心</NavLink>
        </li>
      </ul>
      {props.children}
    </div>
  )
}
