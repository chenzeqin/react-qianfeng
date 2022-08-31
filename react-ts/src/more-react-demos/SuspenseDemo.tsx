import React, { Suspense, useState } from 'react';
// import NowPlaying from './components/NowPlaying'
// import ComingSoon from '../router-pages/films/ComingSoon'

/* 
  组件懒加载： React.lazy + Suspense
*/
const NowPlaying = React.lazy(() => import('./components/NowPlaying'));
const ComingSoon = React.lazy(() => import('./components/ComingSoon'));

export default function SuspenseDemo() {
  const [tab, setTab] = useState(1);

  return (
    <div>
      <h3>SuspenseDemo</h3>
      <button
        onClick={() => {
          setTab(1);
        }}
      >
        正在热映
      </button>
      <button
        onClick={() => {
          setTab(2);
        }}
      >
        即将上映
      </button>
      <Suspense fallback={<div>loading</div>}>
        {tab === 1 ? <NowPlaying></NowPlaying> : <ComingSoon></ComingSoon>}
      </Suspense>
    </div>
  );
}
