import axios from 'axios';
import React, { Component } from 'react';
import { Result, CinemaItem } from '../maizuo/type';
import BScroll from '@better-scroll/core';

interface DataState {
  list: CinemaItem[];
}

export default class BetterScroll extends Component {
  state: DataState = {
    list: [],
  };
  componentDidMount() {
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
        this.setState(
          {
            list: res.data.data.cinemas,
          },
          () => {
            // 数据更新结束再调用
            let wrapper = document.querySelector('.wrapper') as HTMLDivElement;
            let bs = new BScroll(wrapper, {});
          }
        );
      });
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <h3>betterScroll demo: 拖动列表查看效果</h3>
        <div className="wrapper">
          <ul className="cinema-list">
            {list.map((item) => {
              return (
                <li key={item.cinemaId}>
                  <p>{item.name}</p>
                  <p>地址：{item.address}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
