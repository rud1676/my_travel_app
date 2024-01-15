"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Plan, {
  Stickers,
  PlanSticker,
  LineSticker,
  Type2LineStickers,
} from "../plan.style";
import PlanFolder from "@/assets/img/PlanFolder.svg";
import { Pretendard_Regular } from "@/assets/fonts/fonts";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const PlanComponent = ({ onClickDeleteButton, plan }) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2);
  const end = endAt.slice(2);

  const onClickPlan = () => {
    navigator.push(`/schedule/plan/${plan.id}`);
  };

  useEffect(() => {
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].image) {
        setImg(details[i].image.location);
        return;
      }
    }
  }, [setImg, details]);

  return (
    <Plan.PlanBox>
      <Plan.PlanWrapper onClick={onClickPlan} url={PlanFolder.src}>
        {plan.id % 2 === 1 ? (
          <>
            <Plan.StickerBox left={150} top={25} url={Stickers[plan.id % 10]} />
            <Plan.StickerBox
              left={30}
              top={115}
              url={Stickers[(plan.id + 1) % 10]}
            />
            <Plan.TitleOutBox top={30} left={10} rot={5}>
              <Plan.TitleInBox className={Pretendard_Regular.className}>
                {title}
              </Plan.TitleInBox>
            </Plan.TitleOutBox>
            <Plan.StickerWrapper
              left={15}
              top={-115}
              rot={-10.721}
              zIndex={6}
              url={PlanSticker[plan.id % 5]}
            >
              {start}
            </Plan.StickerWrapper>
            <Plan.StickerWrapper
              left={95}
              top={-140}
              rot={15.413}
              zIndex={5}
              url={PlanSticker[(plan.id + 1) % 5]}
            >
              {end}
            </Plan.StickerWrapper>
            <Plan.LineBox url={LineSticker[plan.id % 5]} />
            <Plan.PlanPicture imgsrc={img} left={175} top={-410} />
          </>
        ) : (
          <>
            <Plan.StickerBox left={150} top={58} url={Stickers[plan.id % 10]} />
            <Plan.StickerBox
              left={250}
              top={120}
              url={Stickers[(plan.id + 1) % 10]}
            />
            <Plan.TitleOutBox top={-10} left={5} rot={-12}>
              <Plan.TitleInBox className={Pretendard_Regular.className}>
                {title}
              </Plan.TitleInBox>
            </Plan.TitleOutBox>
            <Plan.StickerWrapper
              left={165}
              top={-33}
              rot={-10.721}
              zIndex={9}
              url={PlanSticker[(plan.id + 1) % 5]}
            >
              {start}
            </Plan.StickerWrapper>
            <Plan.StickerWrapper
              left={244}
              top={-90}
              rot={0}
              zIndex={8}
              url={PlanSticker[plan.id % 5]}
            >
              {end}
            </Plan.StickerWrapper>
            <Plan.LineBoxType2 url={Type2LineStickers[plan.id % 5]} />
            <Plan.PlanPicture imgsrc={img} left={25} top={-410} rot={-3} />
          </>
        )}
      </Plan.PlanWrapper>
      <Plan.DeleteBox onClick={onClickDeleteButton} url={DeleteIcon.src}>
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </Plan.DeleteBox>
    </Plan.PlanBox>
  );
};

export default PlanComponent;
