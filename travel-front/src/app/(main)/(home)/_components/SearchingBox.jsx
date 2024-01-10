"use client";

import Image from "next/image";
import { useCallback, useState, useEffect } from "react";

import HomeStyle from "@/app/(main)/(home)/home.style";
import KeywordCloseButtonIcon from "@/assets/img/KeywordDeleteIcon.svg";
import { travelSearchApi, travelPackageApi } from "@/api/travel";

const RecentKeywordBox = ({ onClickKeyword, title, setRecent, id }) => {
  const onClickDelete = useCallback(() => {
    const DeleteSearch = async () => {
      await travelSearchApi.deleteRecentSearch(id);
    };

    DeleteSearch();
    setRecent((prev) => {
      const temp = prev.filter((e) => e.id !== id);
      return [...temp];
    });
  }, [setRecent, id]);

  return (
    <HomeStyle.RecentKeywordWrapper>
      <HomeStyle.RecentKeywordText
        onClick={() => {
          onClickKeyword(title);
        }}
      >
        {title}
      </HomeStyle.RecentKeywordText>
      <HomeStyle.RecentKeywordCloseButton onClick={onClickDelete}>
        <Image
          alt="삭제"
          width={8}
          height={8}
          src={KeywordCloseButtonIcon.src}
        />
      </HomeStyle.RecentKeywordCloseButton>
    </HomeStyle.RecentKeywordWrapper>
  );
};

const SearchingBox = ({}) => {
  return <></>;
  const [recent, setRecent] = useState();
  const [popular, setPopular] = useState([]);

  const onClickKeyword = useCallback(
    (param) => {
      const LoadSearch = async (search) => {
        const { data } = await travelPackageApi.list(search);
        setPackageTravels(data);
        setLoading(false);
        setSearchingInSearchPage(true);
      };

      setLoading(true);
      LoadSearch(param);
    },
    [setLoading, setPackageTravels, setSearchingInSearchPage]
  );

  useEffect(() => {
    const LoadPopularSearch = async () => {
      const { data } = await travelSearchApi.getPopularSearch();
      setPopular(data);
    };
    const LoadRecentSearch = async () => {
      const { data } = await travelSearchApi.getRecentSearch();
      setRecent(data);
    };
    LoadPopularSearch();
    LoadRecentSearch();
  }, [setPopular, setRecent]);

  return (
    <HomeStyle.SearchingBoxWrapper>
      <HomeStyle.PopPularKeyTitle>인기 검색어</HomeStyle.PopPularKeyTitle>
      <HomeStyle.PopPularKeywordBox>
        {popular.map((v) => {
          return (
            <PopPularKeyword
              onClick={() => {
                onClickKeyword(v.search);
              }}
              key={v.id}
            >
              {v.search}
            </PopPularKeyword>
          );
        })}
      </HomeStyle.PopPularKeywordBox>
      <HomeStyle.RecentSearchWrapper>
        <HomeStyle.RecentSearchTitle>최근 검색어</HomeStyle.RecentSearchTitle>
        {recent &&
          recent.map((v) => (
            <RecentKeywordBox
              title={v.search}
              id={v.id}
              key={v.id}
              setRecent={setRecent}
              onClickKeyword={onClickKeyword}
            />
          ))}
      </HomeStyle.RecentSearchWrapper>
    </HomeStyle.SearchingBoxWrapper>
  );
};

export default SearchingBox;
