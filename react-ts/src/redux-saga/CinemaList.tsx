import React, { Component } from 'react';
import store from './redux/store';
/* 
redux-saga 基本使用
*/

export default class CinemaList extends Component {
  handleClick = () => {
    // 数据只请求一次
    const list = store.getState().list;
    if (!list.length) {
      store.dispatch({
        type: 'get-list',
      });
    } else {
      console.log('数据来自缓存', list);
    }
  };
  render() {
    return (
      <div>
        <h3>CinemaList</h3>
        <button onClick={this.handleClick}>获取数据</button>
      </div>
    );
  }
}
