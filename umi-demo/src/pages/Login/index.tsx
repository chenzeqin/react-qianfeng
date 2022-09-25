import React from "react";
import { IRouteComponentProps, useHistory } from "umi";



export default function Login() {
  const history = useHistory()

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

              history.push("/center");
            })
            .catch((e) => console.error(e));
        }}
      >
        一键登陆
      </button>
    </div>
  )
}
