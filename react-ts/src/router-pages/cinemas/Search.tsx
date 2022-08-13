import React, { useMemo, useState } from 'react';
import { CinemaItem } from '../type';
import { useList } from './useList';

export default function Search() {
  const { list } = useList();

  const [text, setText] = useState('');
  const filterdList = useMemo(() => {
    return list.filter((item) => item.name.includes(text));
  }, [text, list]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <ul>
          {filterdList.map((item) => {
            return <li key={item.cinemaId}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
