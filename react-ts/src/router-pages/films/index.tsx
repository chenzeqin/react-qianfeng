import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import ComingSoon from './ComingSoon';

export default class Films extends Component {
  render() {
    return (
      <div>
        <h3>Films</h3>
        <Route path="/films/nowplaying" component={NowPlaying}></Route>
        <Route path="/films/comingsoon" component={ComingSoon}></Route>
      </div>
    );
  }
}
