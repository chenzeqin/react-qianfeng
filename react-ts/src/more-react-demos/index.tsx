import React from 'react';
import MomoDemo from './MomoDemo';
import PortalDemo from './PortalDemo';
import SuspenseDemo from './SuspenseDemo';

export default function MoreReactDemos() {
  return (
    <div>
      <h2>react 补充内容</h2>
      <PortalDemo></PortalDemo>
      <SuspenseDemo></SuspenseDemo>
      <MomoDemo></MomoDemo>
    </div>
  );
}
