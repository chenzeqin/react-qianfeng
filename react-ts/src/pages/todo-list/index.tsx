import React, { useState } from 'react';
import Header from './Header';
import List from './List';
import { Todo } from './type';
// 添加css module 样式表: https://www.html.cn/create-react-app/docs/adding-a-css-modules-stylesheet/
import styles from './index.module.css';

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
    // 类名渲染为： todo-list_TodoList__SG1T0
    <div className={styles.TodoList}>
      <Header addTodo={addTodo}></Header>
      <List list={list} deleteTodo={deleteTodo} setCheck={setCheck}></List>
    </div>
  );
}
