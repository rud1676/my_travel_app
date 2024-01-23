"use client";

import { Box, Typography } from "@mui/material";
import styles from "./confirm.module.css";

import TotalPriceBox from "@/app/_component/ui/DataShowGroup/TotalPriceBox";
import DateShowBox from "@/app/_component/ui/DataShowGroup/DateShowBox";

const ReserveConfirm = ({ reserved, child, width = "88%" }) => {
  const total =
    (parseInt(reserved.childCount, 10) + parseInt(reserved.adultCount, 10)) *
    reserved.travelPackageOption.price;
  return (
    <Box className={styles.contentWrapper}>
      <Typography className={styles.subTitle}>
        {reserved.travelPackage.title.slice(0, 40)}
      </Typography>
      {child}
      <Box className={styles.dateShowBox}>
        <DateShowBox
          mode
          range={{ from: reserved.startAt, to: reserved.endAt }}
        />
      </Box>
      <Box className={styles.optionBox}>
        <Typography className={styles.optionTitle}>옵션 선택</Typography>
        <Box className={styles.optionDataBox}>
          <Typography className={styles.optionSubTitle}>
            {reserved.travelPackageOption.title}
          </Typography>
          {reserved.travelPackageOption && (
            <p className={styles.optionPriceText}>
              ₩{reserved.travelPackageOption.price.toLocaleString()}
            </p>
          )}
        </Box>
      </Box>
      <Box className={styles.peopleBox}>
        <Typography className={styles.optionTitle}>인원 선택</Typography>
        <Box className={styles.adultBox}>
          <Typography className={styles.optionSubTitle}>
            성인 (만 12세 이상)
          </Typography>
          <Typography className={styles.adultText}>
            {reserved.adultCount}명
          </Typography>
        </Box>
        <Box className={styles.childBox}>
          <Typography className={styles.optionSubTitle}>
            소아 (만 12세 미만)
          </Typography>
          <Typography className={styles.adultText}>
            {reserved.childCount}명
          </Typography>
        </Box>
      </Box>

      <TotalPriceBox width={width} totalPrice={total} />

      <p className={styles.infoText}>
        {reserved.status === 0 &&
          "위의 내용으로 예약 문의가 완료되었습니다. 빠른 시일내로 연락드리겠습니다."}
      </p>
    </Box>
  );
};

export default ReserveConfirm;
