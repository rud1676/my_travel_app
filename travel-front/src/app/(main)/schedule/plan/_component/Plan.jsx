"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  PlanWrapper,
  StickerBox,
  Stickers,
  TitleOutBox,
  TitleInBox,
  LineBox,
  StickerWrapper,
  PlanSticker,
  LineSticker,
  PlanPicture,
  DeleteBox,
  LineBoxType2,
  Type2LineStickers,
  PlanBox,
} from "../style";
import PlanFolder from "@/assets/img/PlanFolder.svg";
import { Pretendard_Regular } from "@/assets/fonts/fonts";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const PlanComponent = ({
  id,
  setDeleteid,
  onClickDeleteButton,
  type,
  plan,
}) => {
  const navigator = useRouter();
  const [img, setImg] = useState("");

  const { title, startAt, endAt, details } = plan;
  const start = startAt.slice(2);
  const end = endAt.slice(2);

  const onClickPlan = useCallback(() => {
    navigator.push(`/plandetail?id=${plan.id}`);
  }, [navigator, plan]);

  useEffect(() => {
    for (let i = 0; i < details.length; i += 1) {
      if (details[i].image) {
        setImg(details[i].image.location);
        return;
      }
    }
  }, [setImg, details]);

  return (
    <PlanBox>
      <PlanWrapper onClick={onClickPlan} url={PlanFolder.src}>
        {type === 1 ? (
          <>
            <StickerBox left={150} top={25} url={Stickers[id % 10]} />
            <StickerBox left={30} top={115} url={Stickers[(id + 1) % 10]} />
            <TitleOutBox top={30} left={10} rot={5}>
              <TitleInBox className={Pretendard_Regular.className}>
                {title}
              </TitleInBox>
            </TitleOutBox>
            <StickerWrapper
              left={15}
              top={-115}
              rot={-10.721}
              zIndex={6}
              url={PlanSticker[id % 5]}
            >
              {start}
            </StickerWrapper>
            <StickerWrapper
              left={95}
              top={-140}
              rot={15.413}
              zIndex={5}
              url={PlanSticker[(id + 1) % 5]}
            >
              {end}
            </StickerWrapper>
            <LineBox url={LineSticker[id % 5]} />
            <PlanPicture imgsrc={img} left={175} top={-410} />
          </>
        ) : (
          <>
            <StickerBox left={150} top={58} url={Stickers[id % 10]} />
            <StickerBox left={250} top={120} url={Stickers[(id + 1) % 10]} />
            <TitleOutBox top={-10} left={5} rot={-12}>
              <TitleInBox className={Pretendard_Regular.className}>
                {title}
              </TitleInBox>
            </TitleOutBox>
            <StickerWrapper
              left={165}
              top={-33}
              rot={-10.721}
              zIndex={9}
              url={PlanSticker[(id + 1) % 5]}
            >
              {start}
            </StickerWrapper>
            <StickerWrapper
              left={244}
              top={-90}
              rot={0}
              zIndex={8}
              url={PlanSticker[id % 5]}
            >
              {end}
            </StickerWrapper>
            <LineBoxType2 url={Type2LineStickers[id % 5]} />
            <PlanPicture imgsrc={img} left={25} top={-410} rot={-3} />
          </>
        )}
      </PlanWrapper>
      <DeleteBox
        onClick={() => {
          onClickDeleteButton();
          setDeleteid(id);
        }}
        url={DeleteIcon.src}
      >
        <Image src={DeleteIcon.src} width={24} height={24} alt="삭제아이콘" />
      </DeleteBox>
    </PlanBox>
  );
};

export default PlanComponent;
