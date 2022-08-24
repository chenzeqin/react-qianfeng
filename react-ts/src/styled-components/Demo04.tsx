import React, { Component, useState } from 'react';
import styled, { keyframes } from 'styled-components';
/* 
  动画
*/

export default class Demo01 extends Component {
  render() {
    const animation = keyframes`
    from{
      transform: rotate(0deg)
    }
    to{
      transform: rotate(360deg)
    }
    `;
    const StyleDiv = styled.div`
      animation: ${animation} 2s infinite;
      font-size: 20px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      text-align: center;
      border: 1px solid #ccc;
      background: #ccc;
    `;

    return (
      <div>
        <div>动画</div>
        <StyleDiv>loading...</StyleDiv>
      </div>
    );
  }
}
