import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default function Films(props: RouteComponentProps) {
  const films = [
    { id: 0, name: '阿甘正传' },
    { id: 2, name: '泰坦尼克号' },
    { id: 3, name: '肖申克的救赎' },
  ];
  function handleClick() {
    props.history.push('/mobx/detail');
  }

  return (
    <ul className="films">
      {films.map((item) => (
        <li key={item.id} onClick={handleClick}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
