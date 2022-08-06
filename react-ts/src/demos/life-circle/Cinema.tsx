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
