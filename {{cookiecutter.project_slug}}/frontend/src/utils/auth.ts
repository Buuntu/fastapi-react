export const isAuthenticated = () => {
  const permissions = localStorage.getItem('permissions');
  if (!permissions) {
    return false;
  }
  return permissions === 'user' || permissions === 'admin' ? true : false;
};

export const login = (email: string, password: string) => {};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('permissions');
};
