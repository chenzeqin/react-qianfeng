import React, { Component } from 'react';
import store from './redux/store';
/* 
redux-saga 基本使用
*/

export default class CinemaList extends Component {
  handleClick = () => {
    // 数据只请求一次
    const list = store.getState().list1;
    if (!list.length) {
      store.dispatch({
        type: 'get-list1',
      });
    } else {
      console.log('数据来自缓存-list1 ', list);
    }
  };
  handleClick2 = () => {
    // 数据只请求一次
    const list = store.getState().list2;
    if (!list.length) {
      store.dispatch({
        type: 'get-list2',
      });
    } else {
      console.log('数据来自缓存-list2 ', list);
    }
  };
  render() {
    return (
      <div>
        <h3>CinemaList</h3>
        <button onClick={this.handleClick}>获取数据1</button>
        <button onClick={this.handleClick2}>获取数据2</button>
      </div>
    );
  }
}
