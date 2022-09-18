import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import request from "../../utils/request";

export default function Films(props) {
  const [list, setList] = useState([]);
  useEffect(() => {
    request(
      "https://m.maizuo.com/gateway?cityId=440300&pageNum=2&pageSize=10&type=1&k=6112799",
      {
        headers: {
          "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
          "X-Host": `mall.film-ticket.film.list`,
        },
      }
    ).then((res) => {
      console.log(res);
      setList(res.data.data.films);
    });
  }, []);
  return (
    <div>
      <h3>电影</h3>
      <ul>
        {list.map((item) => (
          <li
            key={item.filmId}
            onClick={() => {
              // 查看详情
              console.log(props);
              props.history.push(`/film-detail/${item.filmId}`);
            }}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
