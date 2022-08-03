import React, { Component } from 'react';
import { myContext } from './myContext';
import Son from './Son';

export default class ContextDemo extends Component {
  render() {
    return (
      <div style={{ background: '#91c255' }}>
        <h4>ContextDemo</h4>
        <myContext.Provider value={{ info: '父组件index提供的数据' }}>
          <Son></Son>
        </myContext.Provider>
      </div>
    );
  }
}
