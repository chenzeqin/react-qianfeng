import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router';
import { history } from './utils/auth'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import AuthProvider from './components/Auth/AuthProvider';


function App() {
  return (
    <div className="App" >
      <HistoryRouter history={history}>
        <AuthProvider>
          <AppRouter></AppRouter>
        </AuthProvider>
      </HistoryRouter>
    </div>
  );
}

export default App;
