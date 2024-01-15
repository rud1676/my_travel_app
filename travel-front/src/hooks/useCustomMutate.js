import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const useCustomMutate = (mutationFn, SuccessMessage, SuccessRoute) => {
  const navigator = useRouter();
  const { mutate } = useMutation({
    mutationFn,
    onMutate: () => {
      // 뮤테이션 시작 시 로딩 토스트 표시
      toast.loading("처리 중입니다...");
    },
    onSuccess: (data, _variables, _context) => {
      toast.dismiss();
      toast.success(SuccessMessage);
      if (SuccessRoute(data)) navigator.replace(SuccessRoute(data));
    },
    onError: (error, _variables, _context) => {
      toast.dismiss();
      toast.error(
        `서버에 오류가 있습니다 관리자에게 문의하세요. \n 에러내용 : ${error.message}`
      );
    },
  });

  return mutate;
};

export default useCustomMutate;
