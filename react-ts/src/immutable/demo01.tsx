import React, { Component, PureComponent } from 'react';
import { Map } from 'immutable';

/*
  immutable.js  修改对象属性，生成新的immutable对象，其他属性不会修改
  why:
    1. 展开运算符复制复杂类型有隐患
    2. JSON.parse 丢失undefined属性
    3. 深拷贝性能不佳
*/


// demo01 基本使用1： 数据是Immut
export default class ImmutableDemo extends Component {
  state = {
    user: Map({
      age: 18,
      name: 'kobe',
      habit: ['writting', 'play ball', 'reading'],
      info: Map({
        height: '198cm',
        position: 'point guade',
      }),
    }),
  };
  handleClick = () => {
    // 可支持链式操作
    const newUser = this.state.user.set('age', Math.random()).set('name', 'curry')
    console.log(newUser);
    this.setState({ user: newUser });
  };
  render() {
    return (
      <div>
        <h4>基本使用1</h4>
        <button onClick={this.handleClick}>update</button>
        <p>{this.state.user.get('name')}</p>
        <p>{this.state.user.get('age')}</p>
        <Child info={this.state.user.get('info')}></Child>
      </div>
    );
  }
}

interface ChildProps {
  info: any;
}

class Child extends Component<ChildProps> {
  render() {
    const { info } = this.props;
    return (
      <div>
        <h4>Child</h4>
        <p>{info.get('height')}</p>
        <p>{info.get('position')}</p>
      </div>
    );
  }
}
