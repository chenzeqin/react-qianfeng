import React, { Component, useState } from 'react';
import styled from 'styled-components';
/* 
  样式扩展
*/

export default class Demo01 extends Component {
  render() {
    const StyleButton = styled.button`
      font-size: 20px;
      border: 1px solid #ccc;
      background: #ccc;
    `;
    const DangerButton = styled(StyleButton)`
      background: red;
    `;
    const GreenButton = styled(StyleButton)`
      background: green;
    `;

    return (
      <div>
        <div>样式扩展</div>
        <StyleButton>普通按钮</StyleButton>
        <DangerButton>红色按钮</DangerButton>
        <GreenButton>绿色按钮</GreenButton>
      </div>
    );
  }
}
