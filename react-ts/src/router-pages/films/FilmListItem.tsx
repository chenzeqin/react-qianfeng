import React, { Component } from 'react';
import type { FilmItem } from '../type';

export default class FilmListItem extends Component<FilmItem> {
  render() {
    // console.log(this.props);
    const { name, poster } = this.props;
    return (
      <li>
        <img style={{ width: '100px' }} src={poster} alt="" />
        <span>{name}</span>
      </li>
    );
  }
}
