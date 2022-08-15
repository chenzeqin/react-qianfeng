import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import ComingSoon from './ComingSoon';
import { Space, Swiper } from 'antd-mobile';
import styles from './index.module.css';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
export default class Films extends Component {
  componentDidMount(){
    // 卖座新版接口没了
  }
  render() {
    const items = colors.map((color, index) => (
      <Swiper.Item key={index}>
        <div className={styles.content} style={{ background: color }}>
          {index + 1}
        </div>
      </Swiper.Item>
    ));
    return (
      <div>
        {/* 轮播图 */}
        <Swiper>{items}</Swiper>
        <Switch>
          <Route path="/films/nowplaying" component={NowPlaying}></Route>
          <Route path="/films/comingsoon" component={ComingSoon}></Route>
          <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
        </Switch>
      </div>
    );
  }
}
