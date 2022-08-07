import React from 'react';
import DemoUseState from './DemoUseState';
import '../index.css';
import DemoUseCallback from './DemoUseCallback';
export default function HooksDemo() {
  return (
    <div>
      <h2>HooksDemo</h2>
      <DemoUseState></DemoUseState>
      <DemoUseCallback></DemoUseCallback>
    </div>
  );
}
