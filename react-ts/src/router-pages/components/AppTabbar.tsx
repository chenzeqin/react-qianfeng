import React, { Component } from 'react';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { store } from '../../redux';
import { Badge, TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

class AppTabbar extends Component<RouteComponentProps> {
  tabs = [
    {
      key: '/maizuo/films',
      title: '电影',
      icon: <AppOutline />,
    },
    {
      key: '/maizuo/cinemas',
      title: '影院',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/maizuo/center',
      title: '我的',
      icon: <UserOutline />,
    },
    {
      key: '/maizuo/city',
      title: '城市',
      icon: <UserOutline />,
    },
  ];
  state = {
    activeKey: this.props.location.pathname,
  };
  setActiveKey = (activeKey: string) => {
    console.log(activeKey,this.props);
    this.setState({ activeKey });
    this.props.history.push(activeKey)
  };
  render() {
    const { activeKey } = this.state;
    return (
      <div className="app-tabbar">
        <TabBar activeKey={activeKey} onChange={this.setActiveKey}>
          {this.tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    );
  }
}

export default withRouter(AppTabbar);
