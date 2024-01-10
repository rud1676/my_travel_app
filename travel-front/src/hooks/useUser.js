import useSWR from "swr";
import axiosInstance from "../api/axiosInstance";
import { LocalSave } from "../LocalSave";
import { setToken } from "@/api/global";
import { toast } from "react-hot-toast";

export default function useUser() {
  const { data, isLoading, mutate } = useSWR(
    `/profile`,
    async (url) => {
      if (LocalSave.getToken() === "") {
        return;
      }
      setToken(LocalSave.getToken());

      const result = await axiosInstance.get(url);
      return result;
    },
    { revalidateOnFocus: false, shouldRetryOnError: false }
  );

  if (!data || data.status !== 200) {
    return { user: null, isLoading };
  }

  return { user: data.data, isLoading, mutate };
}

export const isLogin = () => {
  const { user } = useUser();
  if (!user) {
    toast.error("로그인이 필요한 서비스입니다 로그인 화면으로 이동합니다.");
    return false;
  }
  return true;
};
