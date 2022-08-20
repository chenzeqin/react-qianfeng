import React, { Component, PureComponent } from 'react';

/*
 */

// demo01 基本使用1： 数据是Immut
export default class ImmutableDemo extends Component {
  state = {
    user: {
      age: 18,
      name: 'kobe',
      habit: ['writting', 'play ball', 'reading'],
      info: {
        height: '198cm',
        position: 'point guade',
      },
    },
  };
  handleClick = () => {
    // 修改age
    this.setState({
      user: {
        ...this.state.user,
        age: Math.random(),
      },
    });
  };
  render() {
    const { name, age, info } = this.state.user;
    return (
      <div>
        <h4>不用immutable原始写法</h4>
        <button onClick={this.handleClick}>update</button>
        <p>{name}</p>
        <p>{age}</p>
        <Child info={info}></Child>
      </div>
    );
  }
}

interface ChildProps {
  info: any;
}

class Child extends Component<ChildProps> {
  shouldComponentUpdate(nextProps: ChildProps, nextState: any) {
    return this.props.info !== nextProps.info;
  }
  componentDidUpdate() {
    console.log('demo00 child render!');
  }
  render() {
    const { info } = this.props;
    const { height, position } = info;
    return (
      <div>
        <h4>Child</h4>
        <p>{height}</p>
        <p>{position}</p>
      </div>
    );
  }
}
