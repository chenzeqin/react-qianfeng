import React, { Component } from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import ComingSoon from './ComingSoon';
import { Space, Swiper } from 'antd-mobile';
import styles from './index.module.css';
import { Tabs } from 'antd-mobile';
export default class Films extends Component<RouteComponentProps> {
  componentDidMount() {
    console.warn(this.props.location)
  }
  setActiveKey = (activeKey: string) => {
    console.log(activeKey, this.props);
    this.props.history.push(activeKey);
  };
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
      <div className='films'>
        {/* 轮播图 */}
        <Swiper slideSize={40} trackOffset={10}>
          {items}
        </Swiper>
        <div className="films-tabs">
          <Tabs activeKey={this.props.location.pathname} onChange={this.setActiveKey}>
            <Tabs.Tab
              title="正在热映"
              key="/maizuo/films/nowplaying"
            ></Tabs.Tab>
            <Tabs.Tab
              title="即将上映"
              key="/maizuo/films/comingsoon"
            ></Tabs.Tab>
          </Tabs>
        </div>

        <Switch>
          <Route path="/maizuo/films/nowplaying" component={NowPlaying}></Route>
          <Route path="/maizuo/films/comingsoon" component={ComingSoon}></Route>
          <Redirect
            from="/maizuo/films"
            to="/maizuo/films/nowplaying"
            exact
          ></Redirect>
        </Switch>
      </div>
    );
  }
}
