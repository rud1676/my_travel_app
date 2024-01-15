"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { FooterWrapper } from "../plandetail.style";
import { Pretendard_Bold } from "@/assets/fonts/fonts";
import { myPlanApi } from "@/api/myplan";

const Footer = ({ details, isSetting, curdate, plan, setIsSetting }) => {
  const navigator = useRouter();

  const onClickBottom = () => {
    if (isSetting) return toast.error("편집중이 아니여야 합니다.");
    return navigator.push(`/schedule/plan/${plan.id}/make?day=20${curdate}`);
  };

  const onClickOrderPost = () => {
    const PostOrdering = async (data) => {
      try {
        await myPlanApi.orderingDetails(data);
        toast.success("순서편집완료");
      } catch (err) {
        toast.error(err);
      }
      setIsSetting(false);
    };
    PostOrdering(details);
  };

  return (
    <FooterWrapper
      className={Pretendard_Bold.className}
      onClick={isSetting ? onClickOrderPost : onClickBottom}
    >
      {isSetting ? "순서 적용하기" : "상세 일정 만들기"}
    </FooterWrapper>
  );
};

export default Footer;
