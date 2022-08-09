import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Login extends Component<RouteComponentProps> {
  handleClick = () => {
    localStorage.setItem('token', 'mytoken_xxx');
    this.props.history.push('/')
  };
  render() {
    return (
      <div>
        <h2>Login</h2>
        <input type="text" />
        <button onClick={this.handleClick}>登陆</button>
      </div>
    );
  }
}
