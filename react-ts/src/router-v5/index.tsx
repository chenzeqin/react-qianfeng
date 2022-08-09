import React, { ReactNode } from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Films from '../router-pages/films';
import Cinemas from '../router-pages/cinemas';
import Center from '../router-pages/center';
import NotFound from '../router-pages/404';
import Detail from '../router-pages/films/Detail';

interface HomeProps {
  children: ReactNode;
}

function HomeRouter(props: HomeProps) {
  return (
    <HashRouter>
      {/* 写在 Switch 不会被渲染！ */}
      {/* Tabbar 渲染在这里， NavLink需要包含在Router中*/}
      {props.children}
      <Switch>
        {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        {/* 路由重定向 */}
        {/* exact： 精确匹配 */}
        <Redirect from="/" to="/films" exact></Redirect>
        {/* 404 路由兜底页面 */}
        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  );
}

export default HomeRouter;
