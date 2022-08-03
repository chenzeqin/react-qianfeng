import React, { Component, ReactNode } from 'react';
import { PureComponent } from 'react';
import { myContext } from './myContext';

interface GrandSonProps {
  children: () => ReactNode;
}
export default class GrandSon extends PureComponent<GrandSonProps> {
  render() {
    console.log('grandson render');
    console.log(this.props);
    return (
      <div style={{ background: 'pink' }}>
        <h5>GrandSon接收index数据</h5>
        <div>{this.props.children()}</div>
        <myContext.Consumer>
          {({ info, changeInfo }) => {
            return (
              <div>
                <p>{info}</p>
                <button onClick={() => changeInfo(`已经修改${Date.now()}`)}>
                  修改context
                </button>
              </div>
            );
          }}
        </myContext.Consumer>
      </div>
    );
  }
}
