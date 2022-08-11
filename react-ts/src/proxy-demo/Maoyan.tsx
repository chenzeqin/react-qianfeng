import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './index.module.css';
console.log(style); // 导出一个对象
/*
 测试api 代理
*/
export default function Maoyan() {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(
        '/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4'
      )
      .then((res) => {
        console.log(res);
        setList(res.data.data.hot);
      });
  }, []);
  return (
    <div id={style['film-list-id']}>
      <h2>猫眼电影列表</h2>
      <ul className={style['maoyan-list']}>
        {list.map((item) => {
          return (
            <li className={`${style['film-item']} other-class`} key={item.id}>
              <img src={item.img} style={{ width: '200px' }} alt="" />
              <p>{item.nm}</p>
              <p>{item.cat}</p>
              <p>{item.desc}</p>
              <p className="btn">{item.showInfo}</p>
              <p>{item.boxInfo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
