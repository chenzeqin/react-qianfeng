import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../utils/request";

export default function FilmDetail(props) {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    console.log(props);
    const id = props.match.params.id;
    request(`https://m.maizuo.com/gateway?filmId=${id}&k=8190260`, {
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        "X-Host": `mall.film-ticket.film.info`,
      },
    }).then((res) => {
      console.log(res);
      setDetail(res.data.data.film);
    });
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      <h4>{detail.name}</h4>
      <img style={{ width: "100%" }} src={detail.poster} alt="" />
      <p>{detail.synopsis}</p>
    </div>
  );
}
