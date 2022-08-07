import React, { Component } from 'react';
import { ReactDOM } from 'react';

interface ChildProps {
  children: ReactDOM;
}
class Child extends Component<any, ChildProps> {
  render() {
    // 多个节点，children=> 数组
    // 单个节点，children=> 对象
    console.log(this.props.children);
    return <div>{this.props.children}</div>;
  }
}

export default class Slot extends Component {
  render() {
    return (
      <div>
        <h3>react 中的Slot： this.props.children</h3>
        <Child>
          <p>单个节点传入到插槽中</p>
        </Child>
      </div>
    );
  }
}
