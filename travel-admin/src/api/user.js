import axiosInstance from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const userApi = {
  list: (offset, limit) => {
    const query = new URLSearchParams({
      offset,
      limit,
    }).toString();
    return axiosInstance.get(`users?${query}`);
  },
  detail: id => axiosInstance.get(`users/${id}`),
  delete: id => axiosInstance.delete(`users/${id}`),
};
