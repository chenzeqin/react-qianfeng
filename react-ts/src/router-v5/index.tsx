import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Films from '../router-pages/Films';
import Cinemas from '../router-pages/Cinemas';
import Center from '../router-pages/Center';

function HomeRouter() {
  return (
    <HashRouter>
      <Route path="/films" component={Films}></Route>
      <Route path="/cinemas" component={Cinemas}></Route>
      <Route path="/center" component={Center}></Route>
    </HashRouter>
  );
}

export default HomeRouter;
