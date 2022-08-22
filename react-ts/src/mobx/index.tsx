import React from 'react';
import Demo01 from './Demo01';
import Demo02 from './Demo02';
import Maizuo from './maizuo';
import { Provider } from 'mobx-react';
import store from './mobx/store';

export default function MobxDemo() {
  return (
    <div>
      <h2>Mobx Demo</h2>
      {/* <Demo01></Demo01>
      <Demo02></Demo02> */}
      <Provider store={store}>
        <Maizuo></Maizuo>
      </Provider>
    </div>
  );
}
