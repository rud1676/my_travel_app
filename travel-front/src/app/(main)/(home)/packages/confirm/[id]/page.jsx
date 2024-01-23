"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Typography } from "@mui/material";

import Confirm from "@/app/_component/ui/Frame/Confirm";

import Footer from "@/app/_component/common/Footer";
import styles from "./confirm.module.css";
import CheckIconWhite from "@/assets/img/CheckIconWhite.svg";
import { travelPackageApi } from "@/api/travel";
import { useSuspenseQuery } from "@tanstack/react-query";

const ConfirmPackage = ({ params }) => {
  const navigator = useRouter();
  const reserved_id = parseInt(params.id);
  const { data: reserved } = useSuspenseQuery({
    queryKey: ["reserve", reserved_id],
    queryFn: () => travelPackageApi.getReservePackage(reserved_id),
    enabled: false,
  });

  const onClickCheckButton = () => {
    navigator.push("/");
  };

  return (
    <Box className={styles.travelConfirmWrapper}>
      <Typography className={styles.title}>예약 문의 완료</Typography>
      <Confirm reserved={reserved} />
      <Footer
        onClick={onClickCheckButton}
        backgroundColor="#00ce9d"
        child={
          <Image
            width={59}
            height={42}
            src={CheckIconWhite.src}
            alt="체크아이콘"
          />
        }
      />
    </Box>
  );
};

export default ConfirmPackage;
