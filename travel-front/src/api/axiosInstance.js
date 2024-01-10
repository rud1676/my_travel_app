import axios from "axios";

import { DEV_API_URL } from "./index";

const axiosInstance = axios.create({
  baseURL: `${DEV_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache", // 서버에서 설정했었도 클라이언트에서 이 설정을 안하니깐 디스크 캐시가 발생함
    Pragma: "no-cache",
  },
  validateStatus: (status) => status === 200, // status 가 200 이 아니면 에러처리
});

export default axiosInstance;
