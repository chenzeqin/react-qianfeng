import React from 'react';
import TodoList from './pages/todo-list';
import CreateRefDemo from './pages/createRef';
import DangerouslySetInnerHTML from './pages/dangerouslySetInnerHTML'

function App() {
  return (
    <div className="App">
      {/* 1. todo list 案例 */}
      <TodoList></TodoList>
      {/* 2. createRef, 及ref转发 */}
      <CreateRefDemo></CreateRefDemo>
      {/* 3. 渲染富文本 */}
      <DangerouslySetInnerHTML></DangerouslySetInnerHTML>
    </div>
  );
}

export default App;
