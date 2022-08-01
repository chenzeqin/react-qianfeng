import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Result, CinemaItem } from '../type';
import BScroll from '@better-scroll/core';

export default function Cinema() {
  const [list, setList] = useState<CinemaItem[]>([]);
  const [allList, setAllList] = useState<CinemaItem[]>([]);
  const [value, setValue] = useState<string>('北京首都');

  useEffect(() => {
    axios
      .get<Result<Record<'cinemas', CinemaItem[]>>>(
        'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5767894',
        {
          headers: {
            'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"16592753012062937216778241","bc":"110100"}`,
            'X-Host': `mall.film-ticket.cinema.list`,
          },
        }
      )
      .then((res) => {
        setAllList(res.data.data.cinemas);
      });
  }, []);

  /* 过滤功能 */
  useEffect(() => {
    const newList = allList.filter((item) => item.name.indexOf(value) > -1);
    setList(newList);
  }, [value, allList]);
  // 重新初始化滚动功能
  useEffect(() => {
    let wrapper = document.querySelector(
      '.cinema-list-wrapper'
    ) as HTMLDivElement;
    let bs = new BScroll(wrapper, {});
  }, [list]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
    setValue(e.currentTarget.value);
  }

  return (
    <div>
      <h4>Cinema</h4>
      <div>
        <input type="text" value={value} onChange={handleChange} />
      </div>
      <div className="cinema-list-wrapper">
        {/* betterScroll 保证只用一个子节点，才能有效果 */}
        <ul className="cinema-list">
          {list.map((item) => {
            return (
              <li key={item.cinemaId}>
                <p>{item.name}</p>
                <p>地址：{item.address}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
