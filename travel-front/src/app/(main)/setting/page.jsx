"use client";
import { Box } from "@mui/material";
import Setting from "./setting.style";
import MenuPage from "./MenuPage";
import Header from "./Header";

const SettingPage = () => {
  return (
    <Box>
      <Header />
      <Setting.ProfileWrapper>
        <MenuPage />
      </Setting.ProfileWrapper>
    </Box>
  );
};

export default SettingPage;
