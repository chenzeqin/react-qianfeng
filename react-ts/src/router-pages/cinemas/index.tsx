import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { store } from '../../redux';

export default class Cinemas extends Component<RouteChildrenProps> {
  handleClick = () => {
    this.props.history.push('/city');
  };
  render() {
    const { city } = store.getState().cityRuducer;
    console.log(city);
    return (
      <div>
        <h2>Cinemas</h2>
        <p onClick={this.handleClick}>当前城市：{city}</p>
      </div>
    );
  }
}
