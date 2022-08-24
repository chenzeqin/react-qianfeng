import React, { Component, useState } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
}
export default class Demo01 extends Component<Props> {
  render() {
    const StyleDiv = styled.div`
      background-color: ${(props: Props) => props.color};
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
    const StyledInput = styled.input`
      background: blue;
      color: #fff;
    `;

    return (
      //  TODO: 需要优化性能
      // StyleDiv 会创建一个div 每次重新渲染会重新创建，input状态也会丢失
      <StyleDiv color="green">
        <div>demo01</div>
        <input type="text" />
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        {/* 支持属性透传 */}
        <StyledInput placeholder="请输入"></StyledInput>
      </StyleDiv>
    );
  }
}
