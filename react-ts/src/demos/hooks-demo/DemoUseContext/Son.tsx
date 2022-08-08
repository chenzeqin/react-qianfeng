import React, { Component } from 'react';
import { PureComponent } from 'react';
import GrandSon from './GrandSon';
import { myContext } from './myContext';

export default class Son extends PureComponent {
  static contextType = myContext; // 指定具体contextType，也可以获取共享数据
  context!: React.ContextType<typeof myContext>;
  render() {
    console.log('son:render')
    console.log(this.context);
    return (
      <div style={{ background: '#ccc' }}>
        <h5>Son</h5>
        <p>指定具体contextType，也可以获取共享数据:</p>
        <p>{this.context.info}</p>
        <GrandSon>
          {() => {
            return <div>chilren可以传入函数</div>;
          }}
        </GrandSon>
      </div>
    );
  }
}
