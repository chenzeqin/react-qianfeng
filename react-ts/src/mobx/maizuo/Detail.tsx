import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import store from '../mobx/store';

export default function Detail(props: RouteComponentProps) {
  useEffect(() => {
    // store.tabbarVisible = false;
    store.setTabbarHide();
    return () => {
      // store.tabbarVisible = true;
      store.setTabbarShow();
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
