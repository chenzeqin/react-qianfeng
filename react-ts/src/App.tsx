import React from 'react';
import TodoList from './demos/todo-list';
import CreateRefDemo from './demos/createRef';
import DangerouslySetInnerHTML from './demos/dangerouslySetInnerHTML'
import Tabs from './demos/tabs';

function App() {
  return (
    <div className="App">
      {/* 1. todo list 案例 */}
      <TodoList></TodoList>
      {/* 2. createRef, 及ref转发 */}
      <CreateRefDemo></CreateRefDemo>
      {/* 3. 渲染富文本 */}
      <DangerouslySetInnerHTML></DangerouslySetInnerHTML>
      {/* 4. 实现tabs功能 */}
      <Tabs></Tabs>
    </div>
  );
}

export default App;
