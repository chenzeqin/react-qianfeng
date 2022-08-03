import React, { Component } from 'react';
import { myContext } from './myContext';

export default class GrandSon extends Component {
  render() {
    return (
      <div>
        <h5>GrandSon接收index数据</h5>
        <myContext.Consumer>
          {(value) => {
            return <div>{value.info}</div>;
          }}
        </myContext.Consumer>
      </div>
    );
  }
}
