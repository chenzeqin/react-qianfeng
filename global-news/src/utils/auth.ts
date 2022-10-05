export function getToken() {
  return localStorage.getItem('token');
}

export function logout() {
  console.info('logout');
}
