import React, { Component } from 'react';

interface DataState {
  count: number;
}

export default class SetStateDemo extends Component {
  state: DataState = {
    count: 0,
  };
  // 异步，合并更新。  执行多次后，只加一次
  handleClick1 = () => {
    this.setState({ count: Math.random() + 1 });
    console.log(this.state.count);
    this.setState({ count: Math.random() + 1 });
    console.log(this.state.count);
    this.setState({ count: Math.random() + 1 });
    console.log(this.state.count);
  };
  // v18.2 新版本也是异步
  handleClick2 = () => {
    setTimeout(() => {
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
    }, 0);
  };
  // 调用两次，执行两次
  handleClick3 = () => {
    // 依赖上一个值，需要写成函数形式
    this.setState((state: Readonly<DataState>) => {
      return { count: state.count + 1 };
    });
    this.setState(
      (state: Readonly<DataState>) => {
        return { count: state.count + 1 };
      },
      () => {
        // 回调中获取最新的state
        console.log(this.state.count);
      }
    );
  };
  componentDidMount() {
    console.log('componentDidMount')
    // v18.2 新版本也是异步
    document.getElementById('add4')?.addEventListener('click', () => {
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
      this.setState({ count: Math.random() + 1 });
      console.log(this.state.count);
    });
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>SetState可能是异步的</h3>
        <p>{count}</p>
        <button onClick={this.handleClick1}>add1</button>
        <button onClick={this.handleClick2}>add2</button>
        <button onClick={this.handleClick3}>add3</button>
        <button id="add4">add4</button>
      </div>
    );
  }
}
