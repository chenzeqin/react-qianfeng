import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Result, FilmItem } from '../type';
import FilmListItem from './FilmListItem';
import FileItemDetail from './FileItemDetail';

export default function Film() {
  console.log('film render');
  const [list, setList] = useState<FilmItem[]>([]);

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
        console.log(res);
        setList(res.data.data.films);
      });
  }, []);

  return (
    <div>
      <h4>Film</h4>
      <ul>
        {list.map((item) => {
          return <FilmListItem key={item.filmId} {...item}></FilmListItem>;
        })}
      </ul>
      <FileItemDetail></FileItemDetail>
    </div>
  );
}
