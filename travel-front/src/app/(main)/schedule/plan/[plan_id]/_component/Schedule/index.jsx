"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { Box } from "@mui/material";

import styles from "./schedule.module.css";
import ScheduleFrame from "@/app/_component/ui/Frame/ScheduleFrame";

import UpDownIcon from "@/assets/img/UpDownIcon.svg";
import DeleteIcon from "@/assets/img/DeleteIcon.svg";

const ScheduleComponent = ({
  isSetting,
  setDelId,
  onClickDelete,
  detail,
  plan_id,
}) => {
  const navigator = useRouter();
  const onClickNewtravel = () => {
    if (isSetting) return toast.error("편집중이 아니여야 합니다.");
    return navigator.replace(`/schedule/plan/${plan_id}/make?id=${detail.id}`);
  };

  return (
    <ScheduleFrame plan={detail} onClickSchedule={onClickNewtravel}>
      {isSetting && (
        <>
          <Box className={styles.scheduleMove}>
            <Box
              className={styles.iconBox}
              sx={{ backgroundImage: `url("${UpDownIcon.src}")` }}
            />
          </Box>
          <Box
            className={styles.miniDeleteBox}
            onClick={() => {
              onClickDelete();
              setDelId(detail.id);
            }}
          >
            <Image
              src={DeleteIcon.src}
              width={24}
              height={24}
              alt="삭제아이콘"
            />
          </Box>
        </>
      )}
    </ScheduleFrame>
  );
};

export default ScheduleComponent;
