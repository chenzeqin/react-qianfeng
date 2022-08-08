import React, { Component } from 'react';
import { myContext } from './myContext';
import Son from './Son';

interface IState {
  count: number;
  provideValue: {
    info: string;
    changeInfo: (info: string) => void;
  };
}
export default class ContextDemo extends Component<any, IState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }
  changeInfo = (info: string) => {
    this.setState((preState) => {
      return {
        provideValue: {
          ...preState.provideValue,
          info,
        },
      };
    });
  };
  state = {
    count: 1,
    provideValue: {
      info: '父组件index提供的数据',
      changeInfo: this.changeInfo,
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
          // 用于修改状态，测试是否重新渲染son 和 grandson
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
