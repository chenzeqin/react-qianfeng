import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { store } from '../../redux';
import { useList } from './useList';
import { NavBar } from 'antd-mobile';
import { SearchOutline } from 'antd-mobile-icons';

export default function Cinemas(props: RouteChildrenProps) {
  const { cinemaList } = useList();
  const { city } = store.getState().cityRuducer;
  return (
    <div>
      <NavBar
        back={null}
        right={
          <SearchOutline
            onClick={() => {
              props.history.push('/maizuo/cinemas/search');
            }}
          />
        }
        left={
          <div
            onClick={() => {
              props.history.push('/maizuo/city');
            }}
          >
            {city}
          </div>
        }
      >
        影院
      </NavBar>
      <ul>
        {cinemaList.map((item) => {
          return <li key={item.cinemaId}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
