import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>请登录！</h3>
        <button
          onClick={() => {
            localStorage.setItem("token", "auth-abcde");
            console.log(this.props);
            this.props.history.push("/center");
          }}
        >
          一键登陆
        </button>
      </div>
    );
  }
}
