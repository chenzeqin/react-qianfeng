import React, { ChangeEvent, Component, createRef } from 'react';

interface LoginState {
  name: string;
  pwd: string;
}

export default class Login extends Component {
  state: LoginState = {
    name: '',
    pwd: '',
  };
  // react中，onchange和原生oninput事件行为一致
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  login = () => {
    console.log(this.state);
  };
  render() {
    const { name, pwd } = this.state;
    return (
      <div>
        <h3>受控表单</h3>
        <p>
          name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </p>
        <p>
          pwd:
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button onClick={this.login}>login</button>
        </p>
      </div>
    );
  }
}
