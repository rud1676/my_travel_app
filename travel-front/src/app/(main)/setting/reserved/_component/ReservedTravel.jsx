"use client";

import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/navigation";

import { Box } from "@mui/material";
import styles from "./component.module.css";

import ArrowFront from "@/assets/img/ArrowFront.svg";

import { color, statusText, days } from "@/util/data";

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
    <Box className={styles.packageWrapper}>
      <Box className={styles.packageHeader} onClick={onClickDetail}>
        {reserve.travelPackage.title.slice(0, 20)}
        <Image
          style={{ cursor: "pointer" }}
          src={ArrowFront.src}
          width={24}
          height={24}
          alt="상세아이콘"
        />
      </Box>
      <Box
        className={styles.planPicture}
        sx={{
          backgroundImage: `url(${imageURL})`,
        }}
        top={11}
        left={-15}
      />
      <Box className={styles.dateWrapper} left={120} top={-80}>
        <p className={styles.datetitle}>출발 일자</p>
        <p className={styles.dateText}>{`${from} (${days[fromdays]})`}</p>
      </Box>
      <Box className={styles.dateWrapper} left={120} top={-100}>
        <p className={styles.datetitle} c>
          도착 일자
        </p>
        <p className={styles.dateText}>{`${to} (${days[todays]})`}</p>
      </Box>
      <p className={styles.priceText}>{`₩ ${totalPrice.toLocaleString()}`}</p>
      <Box
        className={styles.statusBox}
        sx={{ background: color[reserve.status] }}
      >
        <p className={styles.statusText}>{statusText[reserve.status]}</p>
      </Box>
    </Box>
  );
};

export default ReservedTravel;
