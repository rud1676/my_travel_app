import axiosInstance from "./axiosInstance";

export const travelPackageApi = {
  list: async (search = null, order = null) => {
    let query;
    if (search && !order) {
      query = new URLSearchParams({ search }).toString();
    } else if (!search && order) {
      query = new URLSearchParams({ order }).toString();
    } else if (search && order) {
      query = new URLSearchParams({ search, order }).toString();
    } else {
      query = "";
    }
    try {
      const res = await axiosInstance.get(`/travel/packages?${query}`);
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },

  getTravelPackage: async (id) => {
    try {
      const res = await axiosInstance.get(`/travel/packages/${id}`);
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },
  createTravelPackage: (info) => {
    return axiosInstance.post("/travel/packages", info);
  },
  updateTravelPackage: (id, info) => {
    return axiosInstance.put(`/travel/packages/${id}`, info);
  },
  deleteTravelPackage: (id) => {
    return axiosInstance.delete(`/travel/package/${id}`);
  },
  createReservePackage: async (data, id) => {
    const res = await axiosInstance.post(
      `/travel/packages/${id}/reserve`,
      data
    );

    return res.data;
  },
  getReservePackage: async (id) => {
    try {
      const res = await axiosInstance.get(`/travel/packages/reserve/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  getReserve: async () => {
    try {
      const res = await axiosInstance.get(`/travel/packages/reserve`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};

export const travelSearchApi = {
  getRecentSearch: () => {
    return axiosInstance.get(`travel/search/recent`);
  },
  getPopularSearch: () => {
    return axiosInstance.get(`travel/search/popular`);
  },
  deleteRecentSearch: (id) => {
    return axiosInstance.delete(`travel/search/recent/${id}`);
  },
};
