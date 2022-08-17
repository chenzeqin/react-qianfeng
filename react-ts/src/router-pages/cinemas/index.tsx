import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { store } from '../../redux';
import { useList } from './useList';

export default function Cinemas(props: RouteChildrenProps) {
  const { cinemaList } = useList();
  const { city } = store.getState().cityRuducer;
  return (
    <div>
      <h2>Cinemas</h2>
      <p
        onClick={() => {
          props.history.push('/maizuo/city');
        }}
      >
        当前城市：{city}
      </p>
      <button
        onClick={() => {
          props.history.push('/maizuo/cinemas/search');
        }}
      >
        搜索
      </button>
      <ul>
        {cinemaList.map((item) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
