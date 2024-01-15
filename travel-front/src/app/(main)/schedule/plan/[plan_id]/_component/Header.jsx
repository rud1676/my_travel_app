"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { HeaderWrapper, TitleText, HeaderButton } from "../plandetail.style";
import { Pretendard_Medium } from "@/assets/fonts/fonts";
import ArrowBackIcon from "@/assets/img/Arrow_Back.svg";
import MoreIcon from "@/assets/img/MoreIcon.svg";
import SettingIcon from "@/assets/img/SettingIcon.svg";

const Header = ({
  setOpen,
  setSettingModal,
  title,
  setIsSetting,
  isSetting,
}) => {
  const navigator = useRouter();

  const onClickBack = () => {
    navigator.replace("/plan");
  };

  return (
    <HeaderWrapper>
      <HeaderButton onClick={onClickBack}>
        <Image width={17} height={29} src={ArrowBackIcon.src} alt="" />
      </HeaderButton>
      <TitleText className={Pretendard_Medium.className}>{`${
        isSetting && title.length >= 8 ? `${title.slice(0, 7)}...` : title
      }${isSetting ? "(편집중..)" : ""}`}</TitleText>
      <HeaderButton>
        <Box sx={{ display: "flex", gap: "8px" }}>
          {!isSetting && (
            <Image
              onClick={() => {
                if (isSetting) {
                  setSettingModal(true);
                  return;
                }
                setIsSetting(true);
              }}
              width={25}
              height={37}
              src={SettingIcon.src}
              alt=""
            />
          )}
          <Image
            onClick={() => {
              setOpen(true);
            }}
            width={29}
            height={29}
            src={MoreIcon.src}
            alt=""
          />
        </Box>
      </HeaderButton>
    </HeaderWrapper>
  );
};

export default Header;
