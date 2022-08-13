import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { store } from '../../redux';
import { useList } from './useList';

export default function Cinemas(props: RouteChildrenProps) {
  const { list } = useList();
  const { city } = store.getState().cityRuducer;
  return (
    <div>
      <h2>Cinemas</h2>
      <p
        onClick={() => {
          props.history.push('/city');
        }}
      >
        当前城市：{city}
      </p>
      <button
        onClick={() => {
          props.history.push('/cinemas/search');
        }}
      >
        搜索
      </button>
      <ul>
        {list.map((item) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
