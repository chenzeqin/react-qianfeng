import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Films from '../router-pages/films';
import Cinemas from '../router-pages/Cinemas';
import Center from '../router-pages/Center';
import NotFound from '../router-pages/NotFound';

function HomeRouter() {
  return (
    <HashRouter>
      <Switch>
        {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
        <Route path="/films" component={Films}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
        {/* 路由重定向 */}
        {/* exact： 精确匹配 */}
        <Redirect to="/films" from="/" exact></Redirect>
        {/* 404 路由兜底页面 */}
        <Route component={NotFound}></Route>
      </Switch>
    </HashRouter>
  );
}

export default HomeRouter;
