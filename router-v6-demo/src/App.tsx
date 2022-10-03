import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import MRouter from './router/index'
import TabBar from './components/TabBar';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MRouter></MRouter>
        <TabBar></TabBar>
      </HashRouter>
    </div>
  );
}

export default App;
