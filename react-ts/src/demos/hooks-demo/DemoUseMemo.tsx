import React, { ChangeEvent, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Result, FilmItem } from '../maizuo/type';
import FilmListItem from '../maizuo/components/FilmListItem';
/*
  demo: useMemo
   返回第一个参数执行的结果，如果是返回函数，作用和useCallback类似
  作用：类似vue计算属性
*/
export default function DemoUseMemo() {
  const [text, setText] = useState('');
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

  const filteredList = useMemo(() => {
    console.log('useMemo');
    return list.filter((item) => item.name.includes(text));
  }, [text, list]);

  // 返回第一个参数执行的结果，如果是返回函数，作用和useCallback类似
  const handleChange = useMemo(() => {
    console.log('change');
    return (e: ChangeEvent<HTMLInputElement>) => {
      console.log(text);
      setText(e.target.value);
    };
  }, [text]);

  return (
    <div>
      <h3>demo: useMemo</h3>
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
