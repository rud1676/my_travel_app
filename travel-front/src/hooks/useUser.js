import useSWR from "swr";
import axiosInstance from "../api/axiosInstance";
import { LocalSave } from "../LocalSave";
import { setToken } from "@/api/global";

export default function useUser() {
  const { data, isLoading, mutate } = useSWR(
    `/profile`,
    async (url) => {
      if (!LocalSave.getToken() || LocalSave.getToken() === "") {
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
