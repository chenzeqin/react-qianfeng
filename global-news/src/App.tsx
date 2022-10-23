import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router';
import { history } from './utils/auth'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import AuthProvider from './components/Auth/AuthProvider';
import store, { persistor } from './store/index'
import { Provider } from 'react-redux'
import AuthRedux from './components/AuthRedux';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <div className="App" >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HistoryRouter history={history}>
            {/* AuthProvider AuthRedux 是两个版本全局用户数据共享Provider */}
            <AuthRedux>
              <AuthProvider>
                <AppRouter></AppRouter>
              </AuthProvider>
            </AuthRedux>
          </HistoryRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
