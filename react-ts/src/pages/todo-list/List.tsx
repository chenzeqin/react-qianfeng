import React from 'react';
import { Todo } from './type';
/* 
  组件事件：https://zh-hans.reactjs.org/docs/handling-events.html 
  react中的事件是合成事件，不是绑定在具体节点上，
  而是绑定在根节点上，通过事件冒泡的触发（调试可查看）
*/
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
            {item.name}
            <button
              onClick={() => {
                props.deleteTodo(item.id);
              }}
            >
              delete
            </button>
            {/* 向事件传递参数第二种写法 */}
            <button onClick={props.deleteTodo.bind(null, item.id)}>
              delete2
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
