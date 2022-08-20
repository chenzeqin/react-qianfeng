import React, { Component, PureComponent } from 'react';
import { List, Map } from 'immutable';

/*
1. scu判断是否更新
2. list


*/
export default class ImmutableDemo extends Component {
  state = {
    user: Map({
      age: 18,
      name: 'kobe',
      habits: List(['writting', 'play ball', 'reading']),
      info: Map({
        height: '198cm',
        position: 'point guade',
      }),
    }),
  };
  handleClick = () => {
    // 可支持链式操作
    const newUser = this.state.user
      .set('age', Math.random())
      .set('name', 'curry');
    // 修改list
    const habits = (this.state.user.get('habits') as List<any>)
      .push('travle')
      .push('ccc');
    const newUser2 = newUser.set('habits', habits);
    console.log(habits);
    this.setState({ user: newUser2 });
  };
  render() {
    const { user } = this.state;
    return (
      <div>
        <h4>基本使用3</h4>
        <button onClick={this.handleClick}>update</button>
        <p>{user.get('name')}</p>
        <p>{user.get('age')}</p>
        <p>habits {user.get('habits')}</p>
        <Child info={user.get('info')}></Child>
      </div>
    );
  }
}

interface ChildProps {
  info: any;
}

class Child extends Component<ChildProps> {
  // false
  shouldComponentUpdate(nextProps: ChildProps, nextState: any) {
    return this.props.info !== nextProps.info;
  }
  componentDidUpdate() {
    console.log('child render!');
  }
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
