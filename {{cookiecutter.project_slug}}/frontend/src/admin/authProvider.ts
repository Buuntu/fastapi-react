type loginFormType = {
  username: string;
  password: string;
};

const authProvider = {
  login: ({ username, password }: loginFormType) => {
    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const request = new Request('/api/token', {
      method: 'POST',
      body: formData,
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ access_token }) => {
        localStorage.setItem('token', access_token);
      });
  },
  logout: () => {
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: (error: { status: number }) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
  getPermissions: () =>
    localStorage.getItem('token') ? Promise.resolve() : Promise.reject(),
};

export default authProvider;
