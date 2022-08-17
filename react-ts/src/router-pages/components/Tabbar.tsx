import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { store } from '../../redux';

export default class Tabbar extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li><a href="#/films">电影</a></li> */}
          <NavLink to="/maizuo/films" activeClassName="tab-active">
            电影
          </NavLink>
          <NavLink to="/maizuo/cinemas" activeClassName="tab-active">
            影院
          </NavLink>
          <NavLink to="/maizuo/center" activeClassName="tab-active">
            我的
          </NavLink>
          <NavLink to="/maizuo/city" activeClassName="tab-active">
            城市
          </NavLink>
        </ul>
      </div>
    );
  }
}
