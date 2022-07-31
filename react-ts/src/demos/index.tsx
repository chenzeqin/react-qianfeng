import React from 'react';
import './index.css';
import TodoList from './todo-list';
import CreateRefDemo from './createRef';
import DangerouslySetInnerHTML from './dangerouslySetInnerHTML';
import MaiZuo from './maizuo';
import SetStateDemo from './setState/index'
import BetterScroll from './better-scroll'

export default function Demos() {
  return (
    <div>
      <h2>demos</h2>
      {/* 1. todo list 案例 */}
      <TodoList></TodoList>
      {/* 2. createRef, 及ref转发 */}
      <CreateRefDemo></CreateRefDemo>
      {/* 3. 渲染富文本 */}
      <DangerouslySetInnerHTML></DangerouslySetInnerHTML>
      {/* 4. 实现MaiZuo功能 */}
      <MaiZuo></MaiZuo>
      {/* 5. setState， 可能是异步的 */}
      <SetStateDemo></SetStateDemo>
      {/* 6. betterScroll demo */}
      <BetterScroll></BetterScroll>
    </div>
  );
}
