import React, { useReducer } from 'react';

/* 
demo: useRuducer
 把状态提升到外层
*/

function init(initialCount: number) {
  return { count: initialCount };
}

interface Action {
  type: 'increment' | 'decrement' | 'reset';
  value?: number;
}
interface IState {
  count: number;
}

function reducer(state: IState, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.value!);
    default:
      throw new Error();
  }
}

interface CounterProps {
  initialCount: number;
}

export default function Counter({ initialCount }: CounterProps) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', value: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
