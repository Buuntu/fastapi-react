import decodeJwt from 'jwt-decode';

export const isAuthenticated = () => {
  const permissions = localStorage.getItem('permissions');
  if (!permissions) {
    return false;
  }
  return permissions === 'user' || permissions === 'admin' ? true : false;
};

export const login = async (email: string, password: string) => {
  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('username', email);
  formData.append('password', password);

  const request = new Request('/api/token', {
    method: 'POST',
    body: formData,
  });

  const response = await fetch(request);

  if (response.status === 401 || response.status === 403) {
    return false;
  }

  const data = await response.json();

  if (response.status === 422) {
    return false;
    // TODO: handle validation errors
  }

  if ('access_token' in data) {
    const decodedToken: any = decodeJwt(data['access_token']);
    localStorage.setItem('token', data['access_token']);
    localStorage.setItem('permissions', decodedToken.permissions);
  }

  return true;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('permissions');
};
