import React, { useEffect, useState } from 'react';
import Demo01 from './Demo01';
import Demo02 from './Demo02';
import Demo03 from './Demo03';

export default function StyledComponents() {
  const [color, setColor] = useState('pink');
  useEffect(() => {
    const timer = setInterval(() => {
      const a = Math.floor(Math.random() * 17);
      const b = Math.floor(Math.random() * 17);
      const c = Math.floor(Math.random() * 17);

      // setColor(`#${a > 9 ? a : 0 + a}${b > 9 ? b : 0 + b}${c > 9 ? c : 0 + c}`);
    }, 20000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h2>StyledComponents</h2>
      <Demo01 color={color}></Demo01>
      <Demo02></Demo02>
      <Demo03></Demo03>
    </div>
  );
}
