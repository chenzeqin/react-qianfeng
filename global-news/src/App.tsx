import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router';
import { history } from './utils/auth'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App" >
      <HistoryRouter history={history}>
        <AppRouter></AppRouter>
      </HistoryRouter>
    </div>
  );
}

export default App;
