import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import MRouter from './router/index'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <MRouter></MRouter>
      </HashRouter>
    </div>
  );
}

export default App;
