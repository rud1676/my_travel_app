"use client";

import MainStyle from "@/app/app.style";
import MainFooter from "@/app/(main)/_component/MainFooter";

const RootLayout = ({ children }) => {
  return (
    <>
      <MainStyle.ScreenWrapper>{children}</MainStyle.ScreenWrapper>
      <MainFooter />
    </>
  );
};

export default RootLayout;
