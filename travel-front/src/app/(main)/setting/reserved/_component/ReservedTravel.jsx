"use client";

import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/navigation";

import ArrowFront from "@/assets/img/ArrowFront.svg";
import Reserved, { color, statusText, days } from "../reserved.style";
import { Pretendard_Regular, Pretendard_Bold } from "@/assets/fonts/fonts";

const ReservedTravel = ({ reserve }) => {
  const navigator = useRouter();

  const imageURL =
    reserve.travelPackage.images.length === 0
      ? ""
      : reserve.travelPackage.images[0].location;
  const totalPrice = parseInt(reserve.totalPrice, 10);
  const from = reserve.startAt.slice(0, 10);
  const fromdays = moment(from).day();
  const to = reserve.endAt.slice(0, 10);
  const todays = moment(to).day();

  const onClickDetail = () => {
    navigator.push(`/setting/reserved/${reserve.id}`);
  };
  return (
    <Reserved.PackageWrapper>
      <Reserved.PackageHeader
        onClick={onClickDetail}
        className={Pretendard_Regular.className}
      >
        {reserve.travelPackage.title.slice(0, 20)}
        <Image
          style={{ cursor: "pointer" }}
          src={ArrowFront.src}
          width={24}
          height={24}
          alt="상세아이콘"
        />
      </Reserved.PackageHeader>
      <Reserved.PlanPicture imgsrc={imageURL} top={11} left={-15} />
      <Reserved.DateWrapper left={130} top={-70}>
        <Reserved.Datetitle className={Pretendard_Bold.className}>
          출발 일자
        </Reserved.Datetitle>

        <Reserved.DateText
          className={Pretendard_Bold.className}
        >{`${from} (${days[fromdays]})`}</Reserved.DateText>
      </Reserved.DateWrapper>
      <Reserved.DateWrapper left={130} top={-60}>
        <Reserved.Datetitle className={Pretendard_Bold.className}>
          도착 일자
        </Reserved.Datetitle>

        <Reserved.DateText
          className={Pretendard_Bold.className}
        >{`${to} (${days[todays]})`}</Reserved.DateText>
      </Reserved.DateWrapper>
      <Reserved.PriceText
        className={Pretendard_Bold.className}
      >{`₩ ${totalPrice.toLocaleString()}`}</Reserved.PriceText>
      <Reserved.StatusBox bgc={color[reserve.status]}>
        <Reserved.StatusText className={Pretendard_Bold.className}>
          {statusText[reserve.status]}
        </Reserved.StatusText>
      </Reserved.StatusBox>
    </Reserved.PackageWrapper>
  );
};

export default ReservedTravel;
