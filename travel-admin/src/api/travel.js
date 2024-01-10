import axiosInstance from './axiosInstance';

// eslint-disable-next-line import/prefer-default-export
export const travelPackageApi = {
  list: (offset, limit, search) => {
    const searchWhere = search || '';
    const query = new URLSearchParams({
      offset,
      limit,
      search: searchWhere,
    }).toString();
    return axiosInstance.get(`travel/admin/travelPackages?${query}`);
  },
  add: data => {
    return axiosInstance.post('travel/packages', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  update: (id, data) => {
    return axiosInstance.put(`travel/packages/${id}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  delete: id => {
    return axiosInstance.delete(`travel/packages/${id}`);
  },
  addInfo: (packageId, data) => {
    return axiosInstance.post(`travel/packages/${packageId}/addInfo`, data);
  },
  get: id => {
    return axiosInstance.get(`travel/packages/${id}`);
  },
};

export const reservedPackageApi = {
  list: (offset, limit, search) => {
    const searchWhere = search || '';
    const query = new URLSearchParams({
      offset,
      limit,
      search: searchWhere,
    }).toString();
    return axiosInstance.get(`travel/admin/reservedPackages?${query}`);
  },
  get: id => {
    return axiosInstance.get(`travel/packages/reserve/${id}`);
  },
  statusChange: (id, status) => {
    return axiosInstance.put(`travel/packages/reserve/${id}/confirm`, {
      status,
    });
  },
};
