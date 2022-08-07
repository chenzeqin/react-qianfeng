import React, { useRef, useCallback, useState, ChangeEvent } from 'react';
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
  }, []);

  return (
    <div>
      <h3>useRef</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>获取input值</button>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
