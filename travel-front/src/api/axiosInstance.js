import axios from "axios";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || `//localhost:4311`}/api`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache", // 서버에서 설정했었도 클라이언트에서 이 설정을 안하니깐 디스크 캐시가 발생함
    Pragma: "no-cache",
  },
  validateStatus: (status) => status === 200, // status 가 200 이 아니면 에러처리
});

const handleError = (err) => {
  if (err.response) {
    switch (err.response.status) {
      case 401: // 401 Unauthorized 에러 처리
        toast.error(
          "로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다."
        );
        return redirect("/login");
    }
  } else if (err.request) {
    // 응답을 못받음
    toast.error("서버가 응답하지 않습니다. 서버관리자에게 문의해주세요.");
  }
  return Promise.reject(err); // 에러를 전달해야됨.
};

axiosInstance.interceptors.response.use((response) => response, handleError);

export default axiosInstance;
