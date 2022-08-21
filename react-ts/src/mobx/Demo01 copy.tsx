import React from 'react';
import { observable, autorun } from 'mobx';

/* 
  基本数据类型监听
*/

const obNumber = observable.box(0);
const obString = observable.box('kobe');

autorun(() => {
  // 初始化会执行一次，并收集依赖
  // 除了obNumber修改，其他修改都不会触发，各管各的状态
  console.log('obNumber chenge', obNumber.get());
});
autorun(() => {
  console.log('obString chenge', obString.get());
});

setTimeout(() => {
  obNumber.set(1000);
}, 1000);

setTimeout(() => {
  obString.set('curry');
}, 2000);

export default function Demo01() {
  return <div>Demo01</div>;
}
