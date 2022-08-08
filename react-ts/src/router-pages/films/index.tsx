import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import ComingSoon from './ComingSoon';

export default class Films extends Component {
  render() {
    return (
      <div>
        <h3>Films</h3>
        <Switch>
          <Route path="/films/nowplaying" component={NowPlaying}></Route>
          <Route path="/films/comingsoon" component={ComingSoon}></Route>
          <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
        </Switch>
      </div>
    );
  }
}
