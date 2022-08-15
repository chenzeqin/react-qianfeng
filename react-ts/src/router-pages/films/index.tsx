import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import ComingSoon from './ComingSoon';
import { Space, Swiper } from 'antd-mobile';
import styles from './index.module.css';
export default class Films extends Component {
  componentDidMount() {
    // 卖座新版接口没了
  }
  render() {
    const items = [
      <Swiper.Item key={1}>
        <div className={styles.content}>
          <img
            style={{ width: '100%' }}
            src="https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
            alt="人生大事"
          />
        </div>
      </Swiper.Item>,
      <Swiper.Item key={2}>
        <div className={styles.content}>
          <img
            style={{ width: '100%' }}
            src="https://p0.pipi.cn/mmdb/25bfd6d72c992367cb537c020675f703a7045.jpg?imageMogr2/thumbnail/2500x2500%3E"
            alt="独行月球"
          />
        </div>
      </Swiper.Item>,
      <Swiper.Item key={3}>
        <div className={styles.content}>
          <img
            style={{ width: '100%' }}
            src="https://p0.pipi.cn/mmdb/25bfd671339c7e8ea33139d0476cb0d92908d.jpg?imageMogr2/thumbnail/2500x2500%3E"
            alt="人生大事"
          />
        </div>
      </Swiper.Item>,
      <Swiper.Item key={4}>
        <div className={styles.content}>
          <img
            style={{ width: '100%' }}
            src="https://p0.pipi.cn/mmdb/25bfd6d72c992367cb537c020675f703a7045.jpg?imageMogr2/thumbnail/2500x2500%3E"
            alt="独行月球"
          />
        </div>
      </Swiper.Item>,
    ];
    return (
      <div>
        {/* 轮播图 */}
        <Swiper slideSize={80} trackOffset={10}>
          {items}
        </Swiper>
        <Switch>
          <Route path="/films/nowplaying" component={NowPlaying}></Route>
          <Route path="/films/comingsoon" component={ComingSoon}></Route>
          <Redirect from="/films" to="/films/nowplaying" exact></Redirect>
        </Switch>
      </div>
    );
  }
}
