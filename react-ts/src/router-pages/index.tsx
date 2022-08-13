import React, { Component } from 'react';
import './index.css';
import Tabbar from '../router-pages/components/Tabbar';
import HomeRouter from '../router-v5';
import { store } from '../redux';

export default class Maizuo extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    console.log('index-componentDidMount step-3');
    store.subscribe(() => {
      console.log('redux subscribe');
      // 手动触发组件更新
      this.setState({});
    });
  }

  render() {
    const { show } = store.getState();
    console.log('index-render step-1', store.getState());
    return <HomeRouter>{show && <Tabbar></Tabbar>}</HomeRouter>;
  }
}
