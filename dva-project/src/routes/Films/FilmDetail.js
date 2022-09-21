import { connect } from "dva";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../utils/request";

function FilmDetail(props) {
  const [detail, setDetail] = useState({});
  useEffect(() => {
    console.log(props);
    props.toggleTab(false);
    // props.dispatch({ type: "maizuo/toggleTab", payload: { visible: false } });

    const id = props.match.params.id;
    request(`https://m.maizuo.com/gateway?filmId=${id}&k=8190260`, {
      headers: {
        "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.1","e":"16592753012062937216778241"}`,
        "X-Host": `mall.film-ticket.film.info`,
      },
    }).then((res) => {
      setDetail(res.data.data.film);
    });

    return () => {
      props.toggleTab(true);
      // props.dispatch({ type: "maizuo/toggleTab", payload: { visible: true } });
    };
  }, []);
  return (
    <div style={{ padding: "10px" }}>
      <h4>{detail.name}</h4>
      <img style={{ width: "100%" }} src={detail.poster} alt="" />
      <p>{detail.synopsis}</p>
    </div>
  );
}

// 使用一个对象
const mapDispatchToProps = {
  toggleTab: (visible) => ({
    type: "maizuo/toggleTab",
    payload: { visible },
  }),
};

export default connect(null, mapDispatchToProps)(FilmDetail);
