import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Films from './views/Films';
import Cinemas from './views/Cinemas';
import Center from './views/Center';
import MyRedirect from './components/MyRedirect';
import NotFound from './views/404';

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
          {/* 使用Navigate替代Redirect */}
          {/* 重定向方式1 */}
          {/* <Route path="/" element={<Navigate to="/films"></Navigate>}></Route> */}
          {/* 重定向方式2 自定义重定向组件 */}
          <Route path="/" element={<MyRedirect to="/films"></MyRedirect>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
