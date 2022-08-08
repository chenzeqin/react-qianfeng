import React, { Component } from 'react';
import './index.css';
import Tabbar from '../router-pages/components/Tabbar';
import HomeRouter from '../router-v5';

export default class Maizuo extends Component {
  render() {
    return (
      <HomeRouter>
        <Tabbar></Tabbar>
      </HomeRouter>
    );
  }
}
