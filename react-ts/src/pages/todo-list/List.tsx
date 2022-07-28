import React from 'react';
import { Todo } from './type';

interface ListProps {
  list: Todo[];
  deleteTodo: (id: number) => void;
  setCheck: (id: number, done: boolean) => void;
}

export default function List(props: ListProps) {
  function handleChange(id: number, done: boolean) {
    console.log(id, done);
    props.setCheck(id, done);
  }

  return (
    <ul>
      {props.list.map((item) => {
        return (
          <li key={item.id}>
            {item.name}{' '}
            <button
              onClick={() => {
                props.deleteTodo(item.id);
              }}
            >
              delete
            </button>
            <input
              checked={item.done}
              onChange={() => {
                handleChange(item.id, !item.done);
              }}
              type="checkbox"
            />
          </li>
        );
      })}
    </ul>
  );
}
