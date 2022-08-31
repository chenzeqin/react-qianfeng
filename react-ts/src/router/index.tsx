import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import NotFound from '../router-pages/404';
import Maizuo from '../router-pages/index';
import Demo from '../demos';
import HooksDemo from '../demos/hooks-demo';
import Maoyan from '../proxy-demo/Maoyan';
import AntdDemo from '../antd-demo';
import ImmutableDemo from '../immutable';
import MobxDemo from '../mobx';
import StyledComponents from '../styled-components';
import ReduxSagaDemo from '../redux-saga';
import MoreReactDemos from '../more-react-demos';

function HomeRouter() {
  return (
    <BrowserRouter>
      <ul className="router-links">
        <li>
          <NavLink to="/more-react-demos" activeClassName="tab-active">
            react补充
          </NavLink>
        </li>
        <li>
          <NavLink to="/redux-saga" activeClassName="tab-active">
            redux-saga
          </NavLink>
        </li>
        <li>
          <NavLink to="/styled-components" activeClassName="tab-active">
            styled-components
          </NavLink>
        </li>
        <li>
          <NavLink to="/mobx" activeClassName="tab-active">
            mobx
          </NavLink>
        </li>
        <li>
          <NavLink to="/immutable" activeClassName="tab-active">
            immutable.js
          </NavLink>
        </li>
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
        <Route path="/more-react-demos" component={MoreReactDemos}></Route>
        <Route path="/redux-saga" component={ReduxSagaDemo}></Route>
        <Route path="/styled-components" component={StyledComponents}></Route>
        <Route path="/mobx" component={MobxDemo}></Route>
        <Route path="/immutable" component={ImmutableDemo}></Route>
        <Route path="/basic-demo" component={Demo}></Route>
        <Route path="/hooks-demo" component={HooksDemo}></Route>
        <Route path="/maoyan" component={Maoyan}></Route>
        <Route path="/antd-demo" component={AntdDemo}></Route>
        {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
        <Route path="/maizuo" component={Maizuo}></Route>
        <Redirect from="/" to="/more-react-demos" exact></Redirect>
        {/* 404 路由兜底页面 */}
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default HomeRouter;
