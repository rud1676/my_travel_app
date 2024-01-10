import useSWR from 'swr';
import axiosInstance from '../api/axiosInstance';
import { LocalSave } from '../LocalSave';
import { authApi } from '../api/global';

export default function useUser() {
  authApi.setToken(LocalSave.getToken());
  const { data, isLoading, mutate } = useSWR(
    `${import.meta.env.VITE_API_URL}/api/profile`,
    async url => {
      if (LocalSave.getToken() === '') {
        return null;
      }
      authApi.setToken(LocalSave.getToken());
      const result = await axiosInstance.get(url);

      return result;
    },
    { revalidateOnFocus: false, shouldRetryOnError: false },
  );

  if (!data || data.status !== 200) {
    return { user: null, isLoading };
  }

  return { user: data.data, isLoading, mutate };
}
