import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Films from './views/Films';
import Cinemas from './views/Cinemas';
import Center from './views/Center';
import MyRedirect from './components/MyRedirect';
import NotFound from './views/404';
import ComingSoon from './views/Films/ComingSoon';
import NowPlaying from './views/Films/NowPlaying';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* 使用Routes替代v5 Switch */}
        <Routes>
          {/* 使用element属性替代v5 component */}
          <Route path='/films' element={<Films></Films>}>
            {/* index 指定匹配不到路由，指定默认路由 */}
            <Route index element={<ComingSoon></ComingSoon>}></Route>
            <Route path='/films/ComingSoon' element={<ComingSoon></ComingSoon>}></Route>
            {/* 相对路径写法 */}
            <Route path='NowPlaying' element={<NowPlaying></NowPlaying>}></Route>
          </Route>
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
