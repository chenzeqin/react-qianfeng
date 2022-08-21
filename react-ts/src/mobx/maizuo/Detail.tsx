import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { store } from '../mobx/store';

export default function Detail(props: RouteComponentProps) {
  useEffect(() => {
    store.tabbarVisible = false;
    return () => {
      store.tabbarVisible = true;
    };
  }, []);

  return (
    <div>
      <h4>
        <button onClick={() => props.history.goBack()}>back</button>
        <span>Detail</span>
      </h4>
    </div>
  );
}
