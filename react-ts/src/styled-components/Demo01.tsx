import React, { Component, useState } from 'react';
import { StyledDiv, StyledInput } from './StyleDiv';
/* 基础使用 */
interface Props {
  color?: string;
}
export default class Demo01 extends Component<Props> {
  state = {
    text: 'ddd',
  };
  componentDidMount() {
    (this as any).timer = setInterval(() => {
      this.setState({ text: Date.now().toLocaleString() });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval((this as any).timer);
  }
  render() {
    return (
      //  优化性能: 创建StyledDiv组件不能写在render里面，每次会重新创建
      // StyleDiv 会创建一个div 每次重新渲染会重新创建，input状态也会丢失
      <StyledDiv color="green">
        <div>demo01-{this.state.text}</div>
        <input type="text" />
        <ul className="list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        {/* 支持属性透传 */}
        <StyledInput placeholder="请输入"></StyledInput>
      </StyledDiv>
    );
  }
}
