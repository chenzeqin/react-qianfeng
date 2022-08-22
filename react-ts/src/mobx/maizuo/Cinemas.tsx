import { autorun } from 'mobx';
import React, { useEffect, useState } from 'react';
import { CinemaItem } from '../../demos/maizuo/type';
import store from '../mobx/store';
import { Observer } from 'mobx-react';

export default function Cinemas() {
  useEffect(() => {
    if (!store.list.length) {
      store.getCinemaList();
    } else {
      // setList(store.list);
    }
    
    // 不需要自己订阅和取消订阅
    // const unsubscribe = autorun(() => {
    //   // console.log(store.tabbarVisible);
    //   setList(store.list);
    // });

    // return () => {
    //   console.log('取消订阅');
    //   // 取消订阅, 防止autorun回调重复执行
    //   unsubscribe();
    // };
  }, []);
  return (
    <div>
      <h3>Cinemas</h3>
      <ul>
        {/* 还是需要自己引入store，不需要自己监听 */}
        <Observer>
          {() => {
            return store.list.map((item) => (
              <li key={item.cinemaId}>{item.name}</li>
            ));
          }}
        </Observer>
      </ul>
    </div>
  );
}
