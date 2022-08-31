import React, { memo, useState } from 'react';

export default function MomoDemo() {
  const [text, setText] = useState('abc');
  return (
    <div>
      <h3>MomoDemo-{text}</h3>
      <button
        onClick={() => {
          setText(Math.random() + '');
        }}
      >
        update
      </button>
      <Child></Child>
    </div>
  );
}

const Child = memo(() => {
  console.log('chilid render');
  return <div>child</div>;
});
