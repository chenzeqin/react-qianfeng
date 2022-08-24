import React, { Component, useState } from 'react';
import styled from 'styled-components';
/* 
  样式化组件
*/

export default class Demo01 extends Component {
  render() {
    const StyleChild = styled(Child)`
      background: yellow;
    `;

    return (
      <StyleChild color="green">
        <div>样式扩展</div>
      </StyleChild>
    );
  }
}

function Child(props: any) {
  // 必须要接收className!!!
  return <div className={props.className}>child</div>;
}
