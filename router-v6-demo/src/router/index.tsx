import React from 'react'
import { HashRouter, Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import Films from '../views/Films';
import Cinemas from '../views/Cinemas';
import Center from '../views/Center';
import MyRedirect from '../components/MyRedirect';
import NotFound from '../views/404';
import ComingSoon from '../views/Films/ComingSoon';
import NowPlaying from '../views/Films/NowPlaying';
import FilmDetail from '../views/Films/FilmDetail';
import FilmDetail2 from '../views/Films/FilmDetail2';
import Auth from '../components/Auth';
import Login from '../views/Login';
import { lazyLoad } from '../components/lazyLoad';

export default function MRouter() {
  const element = useRoutes([
    {
      path: '/login',
      element: lazyLoad('Login/index')
    },
    {
      path: '/films',
      element: <Films></Films>,
      children: [
        {
          path: '',
          element: <Navigate to="/films/NowPlaying"></Navigate>
        },
        {
          path: 'NowPlaying',
          element: <NowPlaying></NowPlaying>
        },
        {
          path: 'ComingSoon',
          element: <ComingSoon></ComingSoon>
        },
      ]
    },
    {
      path: '/filmDetail/:id',
      element: <FilmDetail></FilmDetail>
    },
    {
      path: '/filmDetail',
      element: <FilmDetail2></FilmDetail2>
    },
    {
      path: '/cinemas',
      element: lazyLoad('Cinemas/index')
    },
    {
      path: '/center',
      element: <Auth><Center></Center></Auth>
    },
    {
      path: '/',
      element: <Films></Films>,
    },
    {
      path: '*',
      element: <NotFound></NotFound>,
    },
  ])
  return element
}
