import React, { useEffect } from 'react';
import InputAInputAutoFocusRFCuto from './InputAutoFocusRFC';

export default function CreateRefDemo() {
  // 通过createRef 获取当前input
  const inputRef1 = React.createRef<HTMLInputElement>();
  useEffect(() => {
    inputRef1.current?.focus();
  }, [inputRef1]);
  // ref获取组件
  const inputRef2 = React.createRef<DemoInput>();
  function getInputValue() {
    console.log(inputRef2.current?.state.value);
  }
  function clearInputValue() {
    console.log(inputRef2.current);
    inputRef2.current?.clear('');
  }
  // 通过 ref转发，获取组件内input元素
  const inputRef3 = React.createRef<HTMLInputElement>();
  useEffect(() => {
    console.log(inputRef3.current?.value);
  }, [inputRef3]);
  return (
    <div>
      <h3>2. createRef Demo</h3>
      {/* ref 获取dem */}
      <input type="text" ref={inputRef1} />

      {/* ref获取组件 */}
      <DemoInput ref={inputRef2}></DemoInput>
      <button onClick={getInputValue}>获取input值</button>
      <button onClick={clearInputValue}>清空input值</button>

      {/* 通过 ref转发，获取组件内input元素 */}
      <InputAInputAutoFocusRFCuto ref={inputRef3}></InputAInputAutoFocusRFCuto>
    </div>
  );
}

interface InputProps {
  ref: React.LegacyRef<DemoInput>;
}
class DemoInput extends React.Component<InputProps> {
  state = {
    value: '',
  };
  clear = (val: string) => {
    this.setState({ value: val });
  };
  render(): React.ReactNode {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={(e) => {
          this.setState({ value: e.target.value });
        }}
      />
    );
  }
}
