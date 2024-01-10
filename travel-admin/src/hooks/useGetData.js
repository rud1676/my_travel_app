import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useGetData(url, initData) {
  const staleTime = 300; // 60 초 동안 캐싱된 데이터를 유효하게 설정
  const cacheTime = 3600000; // 1시간 동안 캐시된 데이터를 유지

  const { data, isLoading, refetch } = useQuery({
    queryKey: [`${url}`],
    queryFn: () => axiosInstance.get(url).then(res => res),
    staleTime,
    cacheTime,
  });

  if (!data || data.status !== 200) {
    return { data: initData, isLoading, refetch };
  }

  return { data: data.data, isLoading, refetch };
}
