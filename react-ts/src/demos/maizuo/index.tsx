/* TODO: tabs耦合性太强了，需要改装成不需要判断的使用方式 */
import React, { useState } from 'react';

import Navbar, { NavbarItem } from './components/Navbar';
import Siderbar from './components/Sidebar';
import Film from './components/Film';
import Cinema from './components/Cinema';
import PersonalCenter from './components/PersonalCenter';

/* 实现选项卡功能 */
export default function MaiZuo() {
  const [list, setList] = useState<NavbarItem[]>([
    { id: 1, text: '电影' },
    { id: 2, text: '影院' },
    { id: 3, text: '我的' },
  ]);
  const [activeId, setActiveId] = useState<number>(1);

  function handleClick(id: number) {
    console.log(id);
    setActiveId(id);
  }

  function bodyRender() {
    switch (activeId) {
      case 1:
        return <Film></Film>;
      case 2:
        return <Cinema></Cinema>;
      case 3:
        return <PersonalCenter></PersonalCenter>;
      default:
        break;
    }
  }

  return (
    <div>
      <h3>4. 卖座电影 demo</h3>
      <Siderbar></Siderbar>
      <ul className="tab-list">
        {list.map((item) => (
          <Navbar
            className={item.id === activeId ? 'active' : ''}
            data={item}
            key={item.id}
            onClick={handleClick}
            /* 没有定义也可以传 */
            notDefinedprops={item.id + item.text}
            // 传入一个object,（不是解构），全部传入简写jsx语法
            {...item}
          ></Navbar>
        ))}
      </ul>
      <div className="tabs-body">{bodyRender()}</div>
    </div>
  );
}
