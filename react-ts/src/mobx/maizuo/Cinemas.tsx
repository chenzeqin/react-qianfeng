import { autorun } from 'mobx';
import React, { useEffect, useState } from 'react';
import { CinemaItem } from '../../demos/maizuo/type';
import store from '../mobx/store';

export default function Cinemas() {
  const [list, setList] = useState<CinemaItem[]>([]);
  useEffect(() => {
    if (!store.list.length) {
      store.getCinemaList();
    } else {
      // setList(store.list);
    }

    const unsubscribe = autorun(() => {
      // console.log(store.tabbarVisible);
      setList(store.list);
    });

    return () => {
      console.log('取消订阅');
      // 取消订阅, 防止autorun回调重复执行
      unsubscribe();
    };
  }, []);
  return (
    <div>
      <h3>Cinemas</h3>
      <ul>
        {list.map((item) => (
          <li key={item.cinemaId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
