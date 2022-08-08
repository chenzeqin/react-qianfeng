import React from 'react';
import DemoUseState from './DemoUseState';
import '../index.css';
import DemoUseCallback from './DemoUseCallback';
import DemoUseMemo from './DemoUseMemo';
import DemoUseRef from './DemoUseRef';
import DemoUseContext from './DemoUseContext';
import DemoUseReducer from './DemoUseReducer';
import CustomHooks from './CustomHooks';
export default function HooksDemo() {
  return (
    <div>
      <h2>HooksDemo</h2>
      <DemoUseState></DemoUseState>
      <DemoUseCallback></DemoUseCallback>
      <DemoUseMemo></DemoUseMemo>
      <DemoUseRef></DemoUseRef>
      <DemoUseContext></DemoUseContext>
      {/* useReducer */}
      <DemoUseReducer initialCount={0}></DemoUseReducer>
      <CustomHooks></CustomHooks>
    </div>
  );
}
