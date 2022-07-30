import React, { ChangeEvent, useState } from 'react';

interface HedearProps {
  addTodo: (name: string) => void;
}

export default function Header(props: HedearProps) {
  const [search, setSearch] = useState<string>('');
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // 合成事件，也支持阻止冒泡
    // e.preventDefault();
    // e.stopPropagation();

    const value = e.target.value;
    setSearch(value);
  }
  function add() {
    if (!search) return;

    props.addTodo(search);
    setSearch('');
  }

  return (
    <div>
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={add}>add</button>
    </div>
  );
}
