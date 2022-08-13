import axios from 'axios';
import React, { Component } from 'react';
import { Result, FilmItem } from '../type';
import { RouteComponentProps } from 'react-router-dom';
import { store } from '../../redux';

type IState = Partial<FilmItem>;
export default class Detail extends Component<
  RouteComponentProps<{ id: string }>
> {
  state: IState = {};
  componentDidMount() {
    console.log('detail-componentDidMount step-2');
    store.dispatch({ type: 'show', payload: { show: false } });
    const filmId = this.props.match.params.id;
    if (!filmId) {
      this.props.history.replace('/films');
      return;
    }
    axios
      .get<Result<Record<'film', FilmItem>>>(
        `https://m.maizuo.com/gateway?filmId=${filmId}&k=7547438`,
        {
          headers: {
            'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
            'X-Host': `mall.film-ticket.film.info`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        this.setState(res.data.data.film);
      });
  }
  componentWillUnmount() {
    store.dispatch({ type: 'hide', payload: { show: true } });
  }
  render() {
    console.info('detail-render');
    // console.log(this.props.match.params.id);
    const { name, synopsis, poster } = this.state;
    return (
      <div>
        <h4>{name}</h4>
        {poster && <img src={poster} alt="" style={{ width: '400px' }} />}
        <p>{synopsis}</p>
      </div>
    );
  }
}
