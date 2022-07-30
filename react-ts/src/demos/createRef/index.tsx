import React, { useEffect } from 'react';
import InputAInputAutoFocusRFCuto from './InputAutoFocusRFC';

export default function CreateRefDemo() {
  // 通过createRef 获取当前input
  const inputRef1 = React.createRef<HTMLInputElement>();
  useEffect(() => {
    inputRef1.current?.focus();
  }, [inputRef1]);

  // 通过 ref转发，获取组件内input元素
  const inputRef2 = React.createRef<HTMLInputElement>();
  useEffect(() => {
    console.log(inputRef2.current?.value);
  }, [inputRef2]);
  return (
    <div>
      <h3>2. createRef Demo</h3>
      <input type="text" ref={inputRef1} />

      {/* 通过 ref转发，获取组件内input元素 */}
      <InputAInputAutoFocusRFCuto ref={inputRef2}></InputAInputAutoFocusRFCuto>
    </div>
  );
}
