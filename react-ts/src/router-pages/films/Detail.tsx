import axios from 'axios';
import React, { Component } from 'react';
import { Result, FilmItem } from '../type';
import { RouteComponentProps } from 'react-router-dom';

import { RootState } from '../../redux';
import { connect, ConnectedProps } from 'react-redux';

// 该组件不需要state，可以在connect传入null
const mapState = (state: RootState) => ({
  show: state.tabReducer.show,
  // 也可以传入其他数据来源,例如
  tip: '(热门)',
});

// 如果有写action creator,引入需要的即可
const mapDispatch = {
  // 返回 action 用于dispatch
  toggleOn: () => ({ type: 'show', payload: { show: true } }),
  toggleOff: () => ({ type: 'hide', payload: { show: false } }),
};
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  // 组件的其他属性 ...
  // backgroundColor: string;
}

type IState = Partial<FilmItem>;
class Detail extends Component<RouteComponentProps<{ id: string }> & Props> {
  state: IState = {};
  componentDidMount() {
    // 所有reducer都会触发
    // store.dispatch({ type: 'show', payload: { show: false } });
    this.props.toggleOff();
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
    // store.dispatch({ type: 'hide', payload: { show: true } });
    this.props.toggleOn();
  }
  render() {
    // console.log(this.props.match.params.id);
    const { name, synopsis, poster } = this.state;
    const { tip } = this.props;
    return (
      <div>
        <h4>
          {name}-{tip}
        </h4>
        {poster && <img src={poster} alt="" style={{ width: '400px' }} />}
        <p>{synopsis}</p>
      </div>
    );
  }
}

export default connector(Detail);
