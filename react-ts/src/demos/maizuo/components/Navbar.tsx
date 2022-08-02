import React, { Component } from 'react';
import propTypes from 'prop-types';

export interface NavbarItem {
  id: number;
  text: string;
}

interface NavbarProps {
  data: NavbarItem;
  className: string;
  onClick: (id: number) => void;
}

export default class Navbar extends Component<NavbarProps, any> {
  // 属性类型
  static propTypes = {
    data: propTypes.object.isRequired,
  };
  // 默认属性
  static defaultProps = {
    onClick: () => {
      console.log('xxx');
    },
    className: 'un-active',
  };
  render() {
    console.log(this.props)
    const { data, onClick, className } = this.props;

    return (
      <li className={className} onClick={onClick.bind(this, data.id)}>
        {data.text}
      </li>
    );
  }
}
