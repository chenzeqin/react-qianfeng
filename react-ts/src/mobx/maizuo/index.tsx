import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Films from './Films';
import Detail from './Detail';
import Tabbar from './Tabbar';
import { autorun } from 'mobx';
import store from '../mobx/store';
import Cinemas from './Cinemas';

export default function Maizuo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubcribe = autorun(() => {
      console.log('store.', store.tabbarVisible);
      setVisible(store.tabbarVisible);
    });

    return () => {
      // 取消订阅
      unsubcribe();
    };
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/mobx/films" component={Films}></Route>
        <Route path="/mobx/cinemas" component={Cinemas}></Route>
        <Route path="/mobx/detail" component={Detail} exact></Route>
        <Redirect from="/mobx" to="/mobx/films" exact></Redirect>
      </Switch>
      {visible && <Tabbar></Tabbar>}
    </div>
  );
}
