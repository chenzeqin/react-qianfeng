import React, { useMemo, useState } from 'react';
import { useList } from './useList';
import { SearchBar } from 'antd-mobile';
import { RouteComponentProps } from 'react-router-dom';

export default function Search(props: RouteComponentProps) {
  const { cinemaList } = useList();

  const [text, setText] = useState('');
  const filterdList = useMemo(() => {
    return cinemaList.filter((item) => item.name.includes(text));
  }, [text, cinemaList]);

  function handleCencel() {
    props.history.goBack();
  }

  return (
    <div>
      <SearchBar
        value={text}
        placeholder="请输入内容"
        onChange={(value) => {
          setText(value);
        }}
        showCancelButton={() => true}
        onCancel={handleCencel}
      />
      <ul>
        {filterdList.map((item) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
