import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Films from './views/Films';
import Cinemas from './views/Cinemas';
import Center from './views/Center';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* 使用Routes替代v5 Switch */}
        <Routes>
          {/* 使用element属性替代v5 component */}
          <Route path='/films' element={<Films></Films>}></Route>
          <Route path='/cinemas' element={<Cinemas></Cinemas>}></Route>
          <Route path='/center' element={<Center></Center>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
