import React, { Component, PureComponent } from 'react';
import { Map } from 'immutable';

/* demo2 基础使用2： state是普通对象 */
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
    // 可支持链式操作
    const newUser = Map(this.state.user)
      .set('age', Math.random())
      .set('name', 'curry');

    // toJS 会把属性的immutable一并转换成普通对象
    console.log(newUser.toJS());
    //  设置完成之后，转换回来
    this.setState({ user: newUser.toJS() });
  };
  render() {
    return (
      <div>
        <h4>基本使用2</h4>
        <button onClick={this.handleClick}>update</button>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.age}</p>
        <Child info={this.state.user.info}></Child>
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
    console.log('demo2 child render!');
  }
  render() {
    const { info } = this.props;
    return (
      <div>
        <h4>Child</h4>
        <p>{info.height}</p>
        <p>{info.position}</p>
      </div>
    );
  }
}
