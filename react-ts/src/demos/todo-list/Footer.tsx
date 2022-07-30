/*
  class组件 demo
  ps: 同一个项目一般只用class组件或者function组件中的一种，不要混合使用
*/

import React, { ChangeEvent, Component } from 'react';

interface FooterProps {
  checkAll: (checked: boolean) => void;
}
interface FooterState {
  checked: boolean;
}

export default class Footer extends Component<FooterProps, FooterState> {
  constructor(props: Readonly<FooterProps>) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  handleChagne = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    console.log(checked);
    this.setState({
      checked,
    });
    this.props.checkAll(checked);
  };
  render() {
    const { checked } = this.state;
    return (
      <div>
        <label htmlFor='ck'>{checked ? '取消全选' : '全选'}</label>
        <input type="checkbox" id="ck" checked={checked} onChange={this.handleChagne} />
      </div>
    );
  }
}
