import React, { Component, PureComponent } from 'react';
import { Collection, fromJS, List, Map } from 'immutable';

/*
 进阶使用， 修改深层数据
 查看demo03修改逻辑，过于繁琐麻烦，使用api  fromJS自动生成嵌套的Immutable对象
 updateIn setIn用于更新深层数据
*/

interface IState {
  user: User;
}

interface User extends Map<string, any> {
  age: number;
  name: string;
  habits: List<string>;
  info: Info;
}
interface Info extends Map<string, any> {
  height: string;
  position: string;
}

export default class ImmutableDemo extends Component {
  state = {
    user: fromJS({
      age: 18,
      name: 'kobe',
      habits: ['writting', 'playball', 'reading'],
      info: {
        height: '198cm',
        position: 'point guade',
      },
    })
  };
  //
  handleClick = () => {
    console.log(this.state.user);
    // 可支持链式操作
    const user = (this.state.user as User)
      .set('name', 'curry')
      .setIn(['info', 'height'], '333cm')
      .setIn(['habits', 2], 'sleep')
      .updateIn(['habits'], (habits: any) => {
        console.log(habits);
        return habits.push('updateIn 修改数据');
      })
      .updateIn(['info'], (info: any) => {
        console.log(info);
        return info;
      });
    this.setState({ user });
  };
  render() {
    const { user } = this.state as any;
    return (
      <div>
        <h4>进阶使用</h4>
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
