import React, { ReactNode } from 'react';
import {
  HashRouter as Router,
  BrowserRouter as Router2,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Films from '../router-pages/films';
import Cinemas from '../router-pages/cinemas';
import Center from '../router-pages/center';
import NotFound from '../router-pages/404';
import Detail from '../router-pages/films/Detail';
import Login from '../router-pages/Login';

interface HomeProps {
  children: ReactNode;
}

function hasAuth() {
  return localStorage.getItem('token');
}

function HomeRouter(props: HomeProps) {
  return (
    <Router2>
      {/* 写在 Switch 不会被渲染！ */}
      {/* Tabbar 渲染在这里， NavLink需要包含在Router中*/}
      {props.children}
      <Switch>
        {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        {/* 路由拦截： react没有路由拦截的概念，TODO: 需要自己封装拦截组件 */}
        <Route
          path="/center"
          render={(props) => {
            // 通过props可以获取路由组件属性
            return hasAuth() ? (
              <Center {...props}></Center>
            ) : (
              <Redirect to="/login"></Redirect>
            );
          }}
        ></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        {/* <Route path="/detail" component={Detail}></Route> */}

        <Route path="/login" component={Login}></Route>
        {/* 路由重定向 */}
        {/* exact： 精确匹配 */}
        <Redirect from="/" to="/films" exact></Redirect>
        {/* 404 路由兜底页面 */}
        <Route component={NotFound}></Route>
      </Switch>
    </Router2>
  );
}

export default HomeRouter;
