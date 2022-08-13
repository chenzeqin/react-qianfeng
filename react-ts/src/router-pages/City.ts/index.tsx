import React, { useEffect, useState } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { store } from '../../redux';

export default function City(props: RouteChildrenProps) {
  const list = ['北京', '上海', '广州', '深圳'];
  const { city: currentCity } = store.getState().cityRuducer;

  useEffect(() => {
    console.log('city');
    // 设置默认值： TODO: 获取实时地址
    store.dispatch({
      type: 'change-city',
      payload: currentCity || '广州',
    });
  }, [currentCity]);

  const handleChange = (city: string) => {
    store.dispatch({
      type: 'change-city',
      payload: city,
    });
    props.history.goBack();
  };

  return (
    <div>
      <h2>City</h2>
      <p>当前城市：{currentCity}</p>
      <ul>
        {list.map((item) => {
          return (
            <li
              key={item}
              onClick={() => {
                handleChange(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
