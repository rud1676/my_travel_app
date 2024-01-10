import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  validateStatus: status => status === 200, // status 가 200 이 아니면 에러처리
});

export default axiosInstance;
