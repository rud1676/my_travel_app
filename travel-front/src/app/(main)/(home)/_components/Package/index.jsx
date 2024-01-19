"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { RandomPins } from "@/util/data";
import { Box, Typography } from "@mui/material";
import styles from "./package.module.css";

const Package = ({ Package }) => {
  const navigator = useRouter();
  const price = Package?.options[0]?.price;
  const { title, location, images } = Package;

  const onClickPackage = () => {
    navigator.push(`/packages/${Package.id}`);
  };

  return (
    <Box className={styles.packageWrapper} onClick={onClickPackage}>
      {images[0] ? (
        <Image
          width={146}
          height={122}
          alt="사진이미지"
          src={images[0]?.location}
        />
      ) : (
        <Box className={styles.packageImageEmpty} />
      )}
      <Box className={styles.packagePriceWrapper}>
        <Box className={styles.packagePriceOuter} />
        <Box className={styles.packagePriceInner}>
          <Typography className={styles.packagePriceText}>
            ₩ {`${Number(price).toLocaleString("kr")}`}~
          </Typography>
        </Box>
      </Box>
      <Box className={styles.packagePriceTextWrapper}>
        <Typography className={styles.packageTitle}>{location}</Typography>
        <Typography className={styles.packageSubTitle}>
          {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
        </Typography>
      </Box>
      <Image
        className={styles.packagePinImage}
        width={27.768}
        height={27.878}
        alt="핀이미지"
        src={RandomPins[Package.id % 8]}
      />
    </Box>
  );
};

export default Package;
