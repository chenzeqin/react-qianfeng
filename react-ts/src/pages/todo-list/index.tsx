import React, { useState } from 'react';
import Header from './Header';
import List from './List';
import { Todo } from './type';

export default function TodoList() {
  const [list, setList] = useState<Todo[]>([]);

  function addTodo(name: string) {
    setList([
      ...list,
      {
        name: name,
        id: Date.now(),
        done: false,
      },
    ]);
  }

  function deleteTodo(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function setCheck(id: number, done: boolean) {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: done,
        };
      }
      return item;
    });

    setList(newList);
  }

  return (
    <div>
      <Header addTodo={addTodo}></Header>
      <List list={list} deleteTodo={deleteTodo} setCheck={setCheck}></List>
    </div>
  );
}
