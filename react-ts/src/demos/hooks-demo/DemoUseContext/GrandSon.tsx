import React, { Component, ReactNode, useContext } from 'react';
import { myContext } from './myContext';

interface GrandSonProps {
  children: () => ReactNode;
}
// useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>。
export default function GrandSon(props: GrandSonProps) {
  const { info, changeInfo } = useContext(myContext);
  return (
    <div style={{ background: 'pink' }}>
      <h5>GrandSon接收index数据</h5>
      <div>{props.children()}</div>
      <div>
        <p>{info}</p>
        <button onClick={() => changeInfo(`已经修改${Date.now()}`)}>
          修改context
        </button>
      </div>
    </div>
  );
}
