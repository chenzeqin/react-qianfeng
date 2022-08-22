import React, { useEffect, useState, Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Films from './Films';
import Detail from './Detail';
import Tabbar from './Tabbar';
import Cinemas from './Cinemas';
import { inject, observer } from 'mobx-react';

// TODO 装饰器目前需要class组件
@inject('store')
@observer
class Maizuo extends Component<any> {
  render() {
    const store = this.props.store;
    return (
      <div>
        <Switch>
          <Route path="/mobx/films" component={Films}></Route>
          <Route path="/mobx/cinemas" component={Cinemas}></Route>
          <Route path="/mobx/detail" component={Detail} exact></Route>
          <Redirect from="/mobx" to="/mobx/films" exact></Redirect>
        </Switch>
        {store.tabbarVisible && <Tabbar></Tabbar>}
      </div>
    );
  }
}

export default Maizuo;
