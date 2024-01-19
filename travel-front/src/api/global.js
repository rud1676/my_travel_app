import axiosInstance from "./axiosInstance";

export const globalApi = {
  naverLogin: (info) => {
    return axiosInstance.post("/login/naver", info);
  },
  kakaoLogin: (info) => {
    return axiosInstance.post("/login/kakao", info);
  },
  snsJoin: async (info) => {
    try {
      const res = await axiosInstance.post("/join/sns", info, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },
  profile: () => {
    return axiosInstance.get("/profile");
  },
  withdraw: () => {
    return axiosInstance.delete("/withdraw");
  },
  localLogin: (info) => {
    return axiosInstance.post("/login", info);
  },
  profileDetail: (id) => {
    return axiosInstance.get(`/users/${id}`);
  },
  profilePut: async (formData, id) => {
    try {
      const res = await axiosInstance.put(`/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res.data; // 데이터를 반환하도록 수정
    } catch (error) {
      throw error;
    }
  },
};

export const setToken = (token) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
