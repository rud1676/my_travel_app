"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import PlanDetail from "../plandetail.style";
import { Pretendard_SemiBold, Pretendard_Medium } from "@/assets/fonts/fonts";

const FooterDrawer = ({ details, plan_id, open, setOpen }) => {
  const navigator = useRouter();

  return (
    <PlanDetail.DrawFooterWrapper
      anchor="bottom"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => {
        setOpen(true);
      }}
    >
      <PlanDetail.DrawerOuterWrapper>
        <PlanDetail.DrawerInnerWrapper>
          <PlanDetail.ButtonWrapper
            onClick={() => {
              navigator.push(`/schedule/plan/make?id=${plan_id}&step=0`);
            }}
            rad="9px 9px 0px 0px"
          >
            <PlanDetail.ButtonTitle className={Pretendard_Medium.className}>
              여행 제목 변경
            </PlanDetail.ButtonTitle>
          </PlanDetail.ButtonWrapper>
          <PlanDetail.ButtonWrapper
            onClick={() => {
              if (details.length === 0) {
                toast.remove();
                navigator.push(`/schedule/plan/make?id=${plan_id}&step=1`);
              } else {
                toast.error(
                  "이미 작성된 세부 일정이 있어 기간을 변경 할 수 없습니다.세부 일정을 모두 삭제 한 뒤에 기간 변경을 해주세요."
                );
              }
            }}
            rad="0px 0px 9px 9px"
          >
            <PlanDetail.ButtonTitle className={Pretendard_Medium.className}>
              기간 변경
            </PlanDetail.ButtonTitle>
          </PlanDetail.ButtonWrapper>
          <PlanDetail.CloseButtonWrapper
            onClick={() => {
              setOpen(false);
            }}
          >
            <PlanDetail.ButtonTitle className={Pretendard_SemiBold.className}>
              닫기
            </PlanDetail.ButtonTitle>
          </PlanDetail.CloseButtonWrapper>
        </PlanDetail.DrawerInnerWrapper>
      </PlanDetail.DrawerOuterWrapper>
    </PlanDetail.DrawFooterWrapper>
  );
};

export default FooterDrawer;
