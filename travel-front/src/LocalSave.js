export const LocalSave = {
  getToken: () => window.localStorage.getItem(`myToken`),
  setToken: (token) => {
    localStorage.setItem(`myToken`, token);
  },
};
