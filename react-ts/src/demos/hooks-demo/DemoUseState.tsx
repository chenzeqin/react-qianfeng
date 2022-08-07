import React, { ChangeEvent, useState } from 'react';
/*
 demo: useState
*/

export default function DemoUseState() {
  const [text, setText] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div>
      <h3>useState</h3>
      <p>text: {text}</p>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
