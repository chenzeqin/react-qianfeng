import React from 'react';
import TodoList from './pages/todo-list';
import CreateRefDemo from './pages/createRef';

function App() {
  return (
    <div className="App">
      {/* 1. todo list 案例 */}
      <TodoList></TodoList>
      {/* 2. createRef, 及ref转发 */}
      <CreateRefDemo></CreateRefDemo>
    </div>
  );
}

export default App;
