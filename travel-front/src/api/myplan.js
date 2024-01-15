import axiosInstance from "./axiosInstance";

export const myPlanApi = {
  list: async (order) => {
    let query;
    if (order) {
      query = new URLSearchParams({ order }).toString();
    }
    try {
      const res = await axiosInstance.get(`/travel/myPlan?${query}`);
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },
  getPlanById: async (id) => {
    try {
      const res = await axiosInstance.get(`/travel/myPlan/${id}`);
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },

  orderingDetails: (details) => {
    return axiosInstance.post(`/travel/myPlan/detail`, details);
  },

  getDetailById: async (id) => {
    try {
      const res = await axiosInstance.get(`/travel/myPlan/detail/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  deleteMyPlan: async (id) => {
    try {
      const res = await axiosInstance.delete(`/travel/myPlan/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  deleteMyPlanDetail: async (id) => {
    try {
      const res = await axiosInstance.delete(`/travel/myPlan/detail/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  getDetailByIdAndDay: (id, day) => {
    return axiosInstance.get(`/travel/myPlan/${id}/detail?date=${day}`);
  },
  getDetailListByDay: async (day) => {
    try {
      const res = await axiosInstance.get(`/travel/myPlan/day/${day}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  createMyPlan: async (data) => {
    try {
      const res = await axiosInstance.post(`travel/myPlan`, data);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  modifyMyPlan: async (data, id) => {
    try {
      const res = await axiosInstance.put(`travel/myPlan/${id}`, data);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
  createPlanDetail: async (data, id) => {
    try {
      const res = await axiosInstance.post(`travel/myPlan/${id}/detail`, data);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
