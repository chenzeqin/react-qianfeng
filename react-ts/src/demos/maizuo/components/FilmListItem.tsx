import React, { Component } from 'react';
import type { FilmItem } from '../type';
import { bus } from '../bus';

export default class FilmListItem extends Component<FilmItem> {
  showDetail = () => {
    bus.pushlish('show-detail', this.props.synopsis);
  };

  render() {
    console.log(this.props);
    const { name, poster } = this.props;
    return (
      <li onClick={this.showDetail}>
        <img style={{ width: '100px' }} src={poster} alt="" />
        <span>{name}</span>
      </li>
    );
  }
}
