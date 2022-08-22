import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import { AppOutline } from 'antd-mobile-icons';

class AppTabbar extends Component<RouteComponentProps> {
  tabs = [
    {
      key: '/mobx/films',
      title: '电影',
      icon: <AppOutline />,
    },
    {
      key: '/mobx/cinemas',
      title: '影院',
      icon: <AppOutline />,
    },
  ];

  setActiveKey = (activeKey: string) => {
    this.props.history.push(activeKey);
  };

  render() {
    const path = this.props.location.pathname.split('/');
    const activeKey = `/${path[1]}/${path[2]}`;
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
