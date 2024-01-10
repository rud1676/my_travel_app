// eslint-disable-next-line import/prefer-default-export
export const LocalSave = {
  getToken: () => localStorage.getItem('token'),
  setToken: token => {
    localStorage.setItem('token', token);
  },
};
