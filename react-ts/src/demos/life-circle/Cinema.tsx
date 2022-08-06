import React, { Component } from 'react';
import axios from 'axios';
import { Result, CinemaItem } from '../maizuo/type';
import BScroll from '@better-scroll/core';
import CinemaLIstItem from './CinemaLIstItem';

interface ChildState {
  count: number;
  list: CinemaItem[];
  activeId?: number;
}
interface ChildPorps {
  name: string;
}
export default class Cinema extends Component<ChildPorps, ChildState> {
  constructor(props: any) {
    super(props);
    console.log('constructor');
  }
  state: ChildState = {
    count: 0,
    list: [],
    activeId: undefined,
  };
  addCount = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
  };
  // 废弃，因为新版react引入了fiber,优化性能
  // 把渲染任务划成更小的任务（有优先级）
  // 如果有优先级更高的任务需要执行，终止UNSAFE_componentWillMount，后续处理完其他任务后再重新调用
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
    axios
      .get<Result<Record<'cinemas', CinemaItem[]>>>(
        'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5767894',
        {
          headers: {
            'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
            'X-Host': `mall.film-ticket.cinema.list`,
          },
        }
      )
      .then((res) => {
        this.setState({ list: res.data.data.cinemas }, () => {
          let wrapper = document.querySelector(
            '.cinema-list-wrapper'
          ) as HTMLDivElement;
          let bs = new BScroll(wrapper, {});
        });
      });
  }
  // prevProps prevState
  componentDidMount() {
    console.log('componentDidMount');
  }
  shouldComponentUpdate(nextProps: ChildPorps, nextState: ChildState) {
    return nextState.count % 2 === 0;
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  updateActiveId = (id: number) => {
    this.setState({ activeId: id });
  };
  render() {
    const { count, list, activeId } = this.state;
    console.log('render');
    return (
      <div>
        <div className="cinema-list-wrapper">
          {/* betterScroll 保证只用一个子节点，才能有效果 */}
          <ul className="cinema-list">
            {list.map((item) => {
              return (
                <CinemaLIstItem
                  activeId={activeId}
                  item={item}
                  key={item.cinemaId}
                  updateActiveId={this.updateActiveId}
                ></CinemaLIstItem>
              );
            })}
          </ul>
        </div>
        <p>{count}</p>
        <button onClick={this.addCount}>count++</button>
      </div>
    );
  }
}
