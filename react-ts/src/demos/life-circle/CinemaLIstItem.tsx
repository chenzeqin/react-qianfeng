import React, { Component } from 'react';
import { CinemaItem } from '../maizuo/type';
import propTypes from 'prop-types';
/* 
 shouldComponentUpdate
 demo: 点击高亮，性能优化
*/
interface IProps {
  item: CinemaItem;
  activeId?: number;
  updateActiveId: (id: number) => void;
}

export default class CinemaLIstItem extends Component<IProps> {
  static propTypes = {
    item: propTypes.object,
    activeId: propTypes.number,
  };
  handleClick = (id: number) => {
    this.props.updateActiveId(id);
  };
  // 性能优化，点击高亮，不需要整个列表都渲染
  // 优化用，最多只重新渲染两个listItem
  shouldComponentUpdate(nextProps: IProps) {
    const { item, activeId } = this.props;
    if (
      item.cinemaId === activeId || // 旧高亮
      item.cinemaId === nextProps.activeId // 新的高亮
    ) {
      return true;
    }
    return false;
  }
  render() {
    console.warn('list item render');
    const { item, activeId } = this.props;
    const style = {
      border: activeId === item.cinemaId ? '1px solid red' : 'none',
    };
    return (
      <li
        style={style}
        onClick={() => {
          this.handleClick(item.cinemaId);
        }}
      >
        <p>{item.name}</p>
        <p>地址：{item.address}</p>
      </li>
    );
  }
}
