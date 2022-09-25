import React, { Component } from "react";
import { IRouteComponentProps } from "umi";



export default class Login extends Component<IRouteComponentProps> {

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>请登录！</h3>

        <button
          onClick={() => {
            fetch("/user/login", {
              method: "POST",
              body: JSON.stringify({
                name: "koke",
                password: 123,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then(res => res.json())
              .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.token);

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
