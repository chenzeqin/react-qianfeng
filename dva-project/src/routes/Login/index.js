import React, { Component } from "react";
import request from "../../utils/request";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h3>请登录！</h3>

        <button
          onClick={() => {
            request("/user/login", {
              method: "POST",
              body: JSON.stringify({
                name: "koke",
                password: 123,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.data.token);

                this.props.history.push("/center");
              })
              .catch((e) => console.error(e));
          }}
        >
          一键登陆
        </button>
      </div>
    );
  }
}
