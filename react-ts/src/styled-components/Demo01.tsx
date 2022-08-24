import React, { Component } from 'react';
import styled from 'styled-components';
export default class Demo01 extends Component {
  render() {
    const StyleDiv = styled.div`
      background-color: pink;
      font-weight: 600;
      line-height: 30px;
      border: 2px solid #ccc;
      /* 支持scss语法 */
      .list {
        text-align: center;
      }
      li {
        color: #fff;
      }
    `;

    return (
      <div>
        <StyleDiv>
          <div>demo01</div>
          <ul className="list">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </StyleDiv>
      </div>
    );
  }
}
