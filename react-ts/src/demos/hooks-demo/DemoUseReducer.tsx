import React, { useReducer } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

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

const CountContext = createContext<{
  state: IState;
  dispatch: React.Dispatch<Action>;
}>({
  state: { count: 0 },
  dispatch: () => {},
});

export default function DemoUseReducer({ initialCount }: CounterProps) {
  // 每一个useReducer都创建一个新的state,和其他组件创建的state不相关
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', value: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {/* useReducer 结合 context，实现redux功能 */}
      <CountContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <CounterA></CounterA>
      </CountContext.Provider>
    </>
  );
}

function CounterA() {
  const context = useContext(CountContext);
  const { state, dispatch } = context;
  return (
    <p>
      <span>CounterA ----- count:{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </p>
  );
}
