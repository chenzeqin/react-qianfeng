import React, { Component } from 'react';
import styled from 'styled-components';
export default class Demo01 extends Component {
  render() {
    const StyleDiv = styled.div`
      background-color: pink;
      font-weight: 600;
      line-height: 30px;
      border: 2px solid #ccc;
    `;

    return (
      <div>
        <StyleDiv>demo01</StyleDiv>
      </div>
    );
  }
}
