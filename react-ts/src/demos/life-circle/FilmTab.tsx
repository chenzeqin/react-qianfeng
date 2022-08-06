import React, { Component } from 'react';
import type { FilmItem, Result } from '../maizuo/type';
import axios from 'axios';
/* 
getDerivedStateFromProps
demo: props.type类型变化，重新发送请求
*/
export default class FilmTab extends Component {
  state = {
    type: 1,
  };
  render() {
    const { type } = this.state;
    return (
      <div>
        <h4>getDerivedStateFromProps {type}</h4>
        <ul className="tab-list">
          <li onClick={() => this.setState({ type: 1 })}>正在热映</li>
          <li onClick={() => this.setState({ type: 2 })}>即将上映</li>
        </ul>
        <FilmList type={type}></FilmList>
      </div>
    );
  }
}

interface FilmListState {
  list: FilmItem[];
}

class FilmList extends Component<any, FilmListState> {
  state: FilmListState = {
    list: [],
  };
  getFilmList = () => {
    if (this.props.type === 1) {
      axios
        .get<Result<Record<'films', FilmItem[]>>>(
          'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=5&type=1&k=7866747',
          {
            headers: {
              'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
              'X-Host': `mall.film-ticket.film.list`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.setState({
            list: res.data.data.films,
          });
        });
    } else {
      axios
        .get<Result<Record<'films', FilmItem[]>>>(
          'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=3&type=2&k=5408118',
          {
            headers: {
              'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
              'X-Host': `mall.film-ticket.film.list`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          this.setState({
            list: res.data.data.films,
          });
        });
    }
  };
  componentDidMount() {
    this.getFilmList();
  }
  // 初始化、父组件setState，本组件setState都会触发
  // 很少用，一般只用于把属性转化成自己的状态
  static getDerivedStateFromProps(props: any) {
    // 返回 patialState,覆盖state
    return {
      type: props.type,
    };
  }
  componentDidUpdate(prevProps: any, prevState: FilmListState, snapshot: any) {
    // console.log('film-tab: componentDidUpdate');
    console.log(prevProps, prevState, snapshot);
    // 防止循环 getFilmList
    if (prevProps.type === this.props.type) {
      return;
    }
    console.warn(prevProps.type);
    this.getFilmList();
  }
  render() {
    // console.log('film-tab-render', this.state);
    const { list } = this.state;
    return (
      <div>
        <ul className="film-list">
          {list.map((item) => {
            return (
              <li key={item.filmId}>
                <img style={{ width: '100px' }} src={item.poster} alt="" />
                <span> {item.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
