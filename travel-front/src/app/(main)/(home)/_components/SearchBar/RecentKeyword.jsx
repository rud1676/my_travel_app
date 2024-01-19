"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styles from "./searchbar.module.css";
import KeywordCloseButtonIcon from "@/assets/img/KeywordDeleteIcon.svg";
import useCustomMutate from "@/hooks/useCustomMutate";
import { travelSearchApi } from "@/api/travel";
import { useQueryClient } from "@tanstack/react-query";

const RecentKeywordBox = ({ onClickKeyword, title, id }) => {
  const queryClient = useQueryClient();
  const mutate = useCustomMutate(
    ({ id }) => travelSearchApi.deleteRecentSearch(id),
    "최근 검색어를 삭제 하였습니다.",
    () => {
      queryClient.refetchQueries({ queryKey: ["recent"], type: "active" });
      return;
    }
  );

  const onClickDelete = (id) => {
    mutate({ id });
  };

  return (
    <Box className={styles.recentKeywordWrapper}>
      <Typography
        className={styles.recentKeywordText}
        onClick={() => {
          onClickKeyword(title);
        }}
      >
        {title}
      </Typography>
      <button
        className={styles.recentKeywordCloseButton}
        onClick={() => {
          onClickDelete(id);
        }}
      >
        <Image
          alt="삭제"
          width={8}
          height={8}
          src={KeywordCloseButtonIcon.src}
        />
      </button>
    </Box>
  );
};

export default RecentKeywordBox;
