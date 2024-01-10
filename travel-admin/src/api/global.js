import { LocalSave } from '../LocalSave';
import axiosInstance from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const authApi = {
  login: (email, password) => axiosInstance.post('login', { email, password }),
  adminLogin: (email, password) =>
    axiosInstance.post('login/admin', { email, password }),
  logout: () => {
    LocalSave.setToken('');
    axiosInstance.defaults.headers.common.Authorization = '';
  },
  setToken: token => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};
