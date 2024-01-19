"use client";

import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";

import RecentKeywordBox from "./RecentKeyword";
import styles from "./searchbar.module.css";

import { travelSearchApi, travelPackageApi } from "@/api/travel";

const SearchingBox = ({ setShow }) => {
  const queryClient = useQueryClient();

  const FetchSortingPackages = async (search) => {
    queryClient.fetchQuery({
      queryKey: ["packages"],
      queryFn: () => {
        return travelPackageApi.list(search);
      },
    });
  };

  const { data: popular } = useSuspenseQuery({
    queryKey: ["popular"],
    queryFn: () => travelSearchApi.getPopularSearch(),
    enabled: false,
  });

  const { data: recent } = useSuspenseQuery({
    queryKey: ["recent"],
    queryFn: () => travelSearchApi.getRecentSearch(),
    enabled: false,
  });

  const onClickKeyword = (search) => {
    FetchSortingPackages(search);
    setShow(false);
  };

  return (
    <Box className={styles.searchingBoxWrapper}>
      <Typography className={styles.popPularKeyTitle}>인기 검색어</Typography>
      <Box className={styles.popPularKeywordBox}>
        {popular.map((v) => {
          return (
            <Typography
              className={styles.popPularKeyword}
              onClick={() => {
                onClickKeyword(v.search);
              }}
              key={v.id}
            >
              {v.search}
            </Typography>
          );
        })}
      </Box>
      <Box className={styles.recentSearchWrapper}>
        <Typography className={styles.recentSearchTitle}>
          최근 검색어
        </Typography>
        {recent &&
          recent.map((v) => (
            <RecentKeywordBox
              title={v.search}
              id={v.id}
              key={v.id}
              onClickKeyword={onClickKeyword}
            />
          ))}
      </Box>
    </Box>
  );
};

export default SearchingBox;
