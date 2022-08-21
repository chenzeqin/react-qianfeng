import React from 'react';
import { observable, autorun } from 'mobx';

/* 
  引用数据类型监听
*/
// 方式1
const obObj = observable({
  name: 'kobe',
  age: 18,
});
// 方式2 设置获取需要使用 set ,get
const obObj2 = observable.map({
  name: 'kobe',
  age: 18,
});

autorun(() => {
  // 初始化会执行一次，并收集依赖
  // 修改 obObj.name  不会触发
  console.warn('obObj.age change', obObj.age);
});
autorun(() => {
  // 初始化会执行一次，并收集依赖
  // 修改 obObj2.name  不会触发
  console.warn('obObj2.age change', obObj2.get('age'));
});
autorun(() => {});

setTimeout(() => {
  obObj.name = 'curry';
}, 4000);

setTimeout(() => {
  obObj2.set('name', 'curry');
}, 4000);

export default function Demo01() {
  return <div>引用数据类型监听</div>;
}
