import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Result, FilmItem } from '../maizuo/type';
import FilmListItem from '../maizuo/components/FilmListItem';
import FileItemDetail from '../maizuo/components/FileItemDetail';

function useList() {
  const [list, setList] = useState<FilmItem[]>([]);

  useEffect(() => {
    axios
      .get<Result<Record<'films', FilmItem[]>>>(
        'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=20&type=2&k=1178624',
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
  return {
    list,
  };
}

function useFilterList(list: FilmItem[], text: string) {
  // 和vue的计算属性类型
  const filteredList = useMemo(() => {
    console.log('useMemo');
    return list.filter((item) => item.name.includes(text));
  }, [text, list]);

  return {
    filteredList,
  };
}

export default function CunstomHooks() {
  console.log('film render');
  const [text, setText] = useState('');
  const { list } = useList();
  const { filteredList } = useFilterList(list, text);
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div>
      <h4>Film</h4>
      <p>text: {text}</p>
      <input type="text" value={text} onChange={handleChange} />
      <ul className="film-list" style={{ flexWrap: 'wrap' }}>
        {filteredList.map((item) => {
          return <FilmListItem key={item.filmId} {...item}></FilmListItem>;
        })}
      </ul>
    </div>
  );
}
