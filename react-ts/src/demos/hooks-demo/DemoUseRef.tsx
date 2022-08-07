import React, {
  useRef,
  useCallback,
  useState,
  ChangeEvent,
  FC,
  ReactNode,
} from 'react';
import InputAutoFocusRFC from '../createRef/InputAutoFocusRFC';
/*
  demo: useRef
*/

export default function DemoUseRef() {
  const inputRef = useRef<HTMLInputElement>(null);

  // 1. 获取dom
  const handleClick = () => {
    console.log(inputRef.current?.value);
  };
  // 2. 保存数据，重新渲染数据不会丢失
  const [text, setText] = useState('');
  const textRef = useRef('');
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    textRef.current = e.target.value;
    setText(e.target.value);
    console.log('text:', text); // 一直为空 ''
    console.log('ref.current', textRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // 3. 不支持通过ref获取函数组件，如有需要，使用React.forwardRef
  // demo: react-ts\src\demos\createRef\InputAutoFocusRFC.tsx
  const rfcInputRef = useRef<HTMLInputElement>(null);
  function handleClick2() {
    console.log(rfcInputRef.current?.value);
  }
  return (
    <div>
      <h3>useRef</h3>
      {/* 1 */}
      <p>
        <input type="text" ref={inputRef} />
      </p>
      {/* 2 */}
      <p>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleClick}>获取input值</button>
      </p>
      {/* 3 */}
      <p>
        <InputAutoFocusRFC ref={rfcInputRef}></InputAutoFocusRFC>
        <button onClick={handleClick2}>获取子组件input值</button>
      </p>
    </div>
  );
}
