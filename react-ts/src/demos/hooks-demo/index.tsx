import React from 'react';
import DemoUseState from './DemoUseState';
import '../index.css';
import DemoUseCallback from './DemoUseCallback';
import DemoUseMemo from './DemoUseMemo';
import DemoUseRef from './DemoUseRef';
export default function HooksDemo() {
  return (
    <div>
      <h2>HooksDemo</h2>
      <DemoUseState></DemoUseState>
      <DemoUseCallback></DemoUseCallback>
      <DemoUseMemo></DemoUseMemo>
      <DemoUseRef></DemoUseRef>
    </div>
  );
}
