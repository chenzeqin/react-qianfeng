import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Result, FilmItem } from '../type';
import {
  HashRouterProps,
  RouteProps,
  StaticRouterProps,
  RouteComponentProps,
} from 'react-router-dom';

// test:通过联合类型，添加属性
interface IProps {
  name?: string;
}
export default function NowPlaying(props: RouteComponentProps & IProps) {
  console.log('NowPlaying render');
  const [list, setList] = useState<FilmItem[]>([]);
  console.log(props.name); //test:通过联合类型，添加属性
  useEffect(() => {
    axios
      .get<Result<Record<'films', FilmItem[]>>>(
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1178624',
        {
          headers: {
            'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
            'X-Host': `mall.film-ticket.film.list`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setList(res.data.data.films);
      });
  }, []);

  function handleClick(id: number) {
    console.log(id);
    // 1. 从match.params获取
    props.history.push(`/detail/${id}`)
    // 2. 从location.query获取（存在内存中）
    // props.history.push({ pathname: `/detail`, query: { id } }); // TODO: 类型检查报错
    // 3. 从location.search获取，通过qs等库转换
    // props.history.push({ pathname: `/detail?id=${id}` });
    // 4. 从location.state获取（存在内存中）
    // props.history.push({ pathname: `/detail`, state: { id } });
  }

  return (
    <div>
      <h4>正在热映</h4>
      <ul className="film-list">
        {list.map((item) => {
          return (
            <li key={item.filmId} onClick={() => handleClick(item.filmId)}>
              <img style={{ width: '100px' }} src={item.poster} alt="" />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}