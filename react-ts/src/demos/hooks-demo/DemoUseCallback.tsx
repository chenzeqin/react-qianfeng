import React, { ChangeEvent, useCallback, useState } from 'react';
/*
  demo: useCallback
  防止不相关状态修改时，渲染整个组件，函数重新被创建, 优化性能
*/
export default function DemoUseCallback() {
  console.log('DemoUseCallback');

  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log(text); // 如果依赖项为[], text永远都是空字符串 ''
      setText(e.target.value);
    },
    [text] // text改变时，函数相关重新生成一次，重新获取最新状态，不相关时，使用缓存
  );
  // 例如，修改name时， 组件重新渲染，handleChange 函数无需重新声明一次。
  const handleChange2 = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log(name);
      setName(e.target.value);
    },
    [name]
  );

  return (
    <div>
      <h3>DemoUseCallback</h3>
      <p>text: {text}</p>
      <input type="text" value={text} onChange={handleChange} />
      <p>name: {name}</p>
      <input type="text" value={name} onChange={handleChange2} />
    </div>
  );
}
