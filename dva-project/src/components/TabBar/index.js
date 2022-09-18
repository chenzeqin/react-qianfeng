import { NavLink } from "dva/router";
import React from "react";
import styles from "./index.css";

export default function TabBar() {
  return (
    <ul className={styles.tabbar}>
      <li className={styles.tabbarItem}>
        <NavLink to="/films" activeClassName={styles.active}>
          电影
        </NavLink>
      </li>
      <li className={styles.tabbarItem}>
        <NavLink to="/cinemas" activeClassName={styles.active}>
          影院
        </NavLink>
      </li>
      <li className={styles.tabbarItem}>
        <NavLink to="/center" activeClassName={styles.active}>
          个人中心
        </NavLink>
      </li>
    </ul>
  );
}
