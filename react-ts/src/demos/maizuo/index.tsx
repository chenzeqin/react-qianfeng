import React, { useState } from 'react';
import './index.css';

import Film from './components/Film';
import Cinema from './components/Cinema';
import PersonalCenter from './components/PersonalCenter';

interface ListItem {
  id: number;
  text: string;
}

/* 实现选项卡功能 */
export default function MaiZuo() {
  const [list, setList] = useState<ListItem[]>([
    { id: 1, text: '电影' },
    { id: 2, text: '影院' },
    { id: 3, text: '我的' },
  ]);
  const [activeId, setActiveId] = useState<number>(1);

  function handleClick(id: number) {
    setActiveId(id);
  }

  function BodyRender() {
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
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={activeId === item.id ? 'active' : ''}
          >
            {item.text}
          </li>
        ))}
      </ul>
      <div className="tabs-body">{BodyRender()}</div>
    </div>
  );
}
