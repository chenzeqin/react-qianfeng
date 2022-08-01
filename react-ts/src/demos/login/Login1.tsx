import React, { Component, createRef } from 'react';

export default class Login extends Component {
  nameRef = createRef<HTMLInputElement>();
  pwdNameRef = createRef<HTMLInputElement>();
  login = () => {
    console.log(this.nameRef.current?.value);
    console.log(this.pwdNameRef.current?.value);
  };
  render() {
    return (
      <div>
        <h3>非受控表单</h3>
        <p>
          name: <input defaultValue={''} type="text" ref={this.nameRef} />
        </p>
        <p>
          pwd: <input type="password" ref={this.pwdNameRef} />
        </p>
        <p>
          <button onClick={this.login}>login</button>
        </p>
      </div>
    );
  }
}
