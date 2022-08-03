import React, { Component } from 'react';
import { myContext } from './myContext';
import Son from './Son';

interface IState {
  count: number;
  info: string;
  provideValue: { info: string };
}
export default class ContextDemo extends Component<any, IState> {
  state = {
    count: 1,
    info: '',
    provideValue: {
      info: '父组件index提供的数据',
    },
  };
  render() {
    return (
      <div style={{ background: '#91c255' }}>
        <h4>ContextDemo</h4>
        <p>
          修改index数据，会导致，son,grandson重新渲染,
          因为value浅对比,重新render之后，value是一个新的对象,
          应该把provide的数据放在state中.
        </p>
        {/* <myContext.Provider value={{ info: '父组件index提供的数据' }}> */}
        <myContext.Provider value={this.state.provideValue}>
          <Son></Son>
        </myContext.Provider>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState((preState) => {
              return {
                count: preState.count + 1,
              };
            });
          }}
        >
          修改index组件数据
        </button>
      </div>
    );
  }
}
