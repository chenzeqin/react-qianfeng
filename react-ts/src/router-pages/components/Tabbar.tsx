import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><a href="#/films">电影</a></li> */}
          <NavLink to="/films">电影</NavLink>
          <NavLink to="/cinemas">影院</NavLink>
          <NavLink to="/center">我的</NavLink>
        </ul>
      </div>
    );
  }
}
