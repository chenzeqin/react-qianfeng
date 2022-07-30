import React from 'react';
import TodoList from './todo-list';
import CreateRefDemo from './createRef';
import DangerouslySetInnerHTML from './dangerouslySetInnerHTML';
import MaiZuo from './maizuo';

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
    </div>
  );
}