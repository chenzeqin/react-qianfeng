import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

export function getToken() {
  return localStorage.getItem('token');
}

export function logout() {
  console.info('logout');
  localStorage.removeItem('token');
  history.push('/login');
}
