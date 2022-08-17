import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import NotFound from '../router-pages/404';
import Maizuo from '../router-pages/index';
import Demo from '../demos';
import HooksDemo from '../demos/hooks-demo';
import Maoyan from '../proxy-demo/Maoyan';
import AntdDemo from '../antd-demo';

function HomeRouter() {
  return (
    <BrowserRouter>
      <ul className='router-links'>
        <li>
          <NavLink to="/maizuo" activeClassName="tab-active">
            卖座电影
          </NavLink>
        </li>
        <li>
          <NavLink to="/antd-demo" activeClassName="tab-active">
            antd 组件
          </NavLink>
        </li>
        <li>
          <NavLink to="/maoyan" activeClassName="tab-active">
            猫眼电影
          </NavLink>
        </li>
        <li>
          <NavLink to="/basic-demo" activeClassName="tab-active">
            基础 demo
          </NavLink>
        </li>
        <li>
          <NavLink to="/hooks-demo" activeClassName="tab-active">
            hook demos
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/basic-demo" component={Demo}></Route>
        <Route path="/hooks-demo" component={HooksDemo}></Route>
        <Route path="/maoyan" component={Maoyan}></Route>
        <Route path="/antd-demo" component={AntdDemo}></Route>
        {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
        <Route path="/maizuo" component={Maizuo}></Route>
        {/* 404 路由兜底页面 */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default HomeRouter;
