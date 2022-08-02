import React, { useEffect, useState } from 'react';
import { bus } from '../bus';

export default function FileItemDetail() {
  const [synopsis, setSynopsis] = useState('');
  useEffect(() => {
    console.log('订阅了');
    bus.subscribers('show-detail', (synopsis: string) => {
      console.log('执行了....');
      setSynopsis(synopsis);
    });

    return () => {
      // 取消订阅
      bus.clear('show-detail');
    };
  }, []);

  return (
    <div>
      <h4>detail</h4>
      <p>{synopsis}</p>
    </div>
  );
}
