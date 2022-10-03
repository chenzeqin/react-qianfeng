import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Films from '../views/Films';
import Cinemas from '../views/Cinemas';
import Center from '../views/Center';
import MyRedirect from '../components/MyRedirect';
import NotFound from '../views/404';
import ComingSoon from '../views/Films/ComingSoon';
import NowPlaying from '../views/Films/NowPlaying';
import FilmDetail from '../views/Films/FilmDetail';
import FilmDetail2 from '../views/Films/FilmDetail2';

export default function index() {
  // {/* 使用Routes替代v5 Switch */ }
  return (
    <Routes>
      {/* 使用element属性替代v5 component */}
      <Route path='/films' element={<Films></Films>}>
        {/* index 指定匹配不到路由，指定默认路由 */}
        <Route index element={<NowPlaying></NowPlaying>}></Route>
        {/* 相对路径写法(推荐) */}
        <Route path='NowPlaying' element={<NowPlaying></NowPlaying>}></Route>
        {/* 全路径写法 */}
        <Route path='/films/ComingSoon' element={<ComingSoon></ComingSoon>}></Route>
      </Route>
      <Route path="filmDetail/:id" element={<FilmDetail></FilmDetail>}></Route>
      <Route path="filmDetail" element={<FilmDetail2></FilmDetail2>}></Route>
      <Route path='/cinemas' element={<Cinemas></Cinemas>}></Route>
      <Route path='/center' element={<Center></Center>}></Route>
      {/* 使用Navigate替代Redirect */}
      {/* 重定向方式1 */}
      {/* <Route path="/" element={<Navigate to="/films"></Navigate>}></Route> */}
      {/* 重定向方式2 自定义重定向组件 */}
      <Route path="/" element={<MyRedirect to="/films"></MyRedirect>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}
