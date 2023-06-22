import decodeJwt from 'jwt-decode';

export const isAuthenticated = () => {
  const permissions = localStorage.getItem('permissions');
  if (!permissions) {
    return false;
  }
  return permissions === 'user' || permissions === 'admin' ? true : false;
};

/**
 * Login to backend and store JSON web token on success
 *
 * @param email
 * @param password
 * @returns JSON data containing access token on success
 * @throws Error on http errors or failed attempts
 */
export const login = async (email: string, password: string) => {
  // Assert email or password is not empty
  if (!(email.length > 0) || !(password.length > 0)) {
    throw new Error('Email or password was not provided');
  }
  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('username', email);
  formData.append('password', password);

  const request = new Request('/api/token', {
    method: 'POST',
    body: formData,
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();

  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }

  if ('access_token' in data) {
    const decodedToken: any = decodeJwt(data['access_token']);
    localStorage.setItem('token', data['access_token']);
    localStorage.setItem('permissions', decodedToken.permissions);
  }

  return data;
};

/**
 * Sign up via backend and store JSON web token on success
 *
 * @param email
 * @param password
 * @returns JSON data containing access token on success
 * @throws Error on http errors or failed attempts
 */
export const signUp = async (
  email: string,
  password: string,
  passwordConfirmation: string
) => {
  // Assert email or password or password confirmation is not empty
  if (!(email.length > 0)) {
    throw new Error('Email was not provided');
  }
  if (!(password.length > 0)) {
    throw new Error('Password was not provided');
  }
  if (!(passwordConfirmation.length > 0)) {
    throw new Error('Password confirmation was not provided');
  }

  const formData = new FormData();
  // OAuth2 expects form data, not JSON data
  formData.append('username', email);
  formData.append('password', password);

  const request = new Request('/api/signup', {
    method: 'POST',
    body: formData,
  });

  const response = await fetch(request);

  if (response.status === 500) {
    throw new Error('Internal server error');
  }

  const data = await response.json();
  if (response.status > 400 && response.status < 500) {
    if (data.detail) {
      throw data.detail;
    }
    throw data;
  }

  if ('access_token' in data) {
    const decodedToken: any = decodeJwt(data['access_token']);
    localStorage.setItem('token', data['access_token']);
    localStorage.setItem('permissions', decodedToken.permissions);
  }

  return data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('permissions');
};
