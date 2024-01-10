"use client";

import Setting from "./setting.style";
import { Pretendard_SemiBold, Pretendard_Regular } from "@/assets/fonts/fonts";

const MenuBot = ({ last, title, Click }) => {
  return (
    <Setting.MenuBotWrapper>
      <Setting.MenuTitle
        last={`${last}`}
        onClick={Click}
        className={Pretendard_Regular.className}
      >
        {title}
      </Setting.MenuTitle>
    </Setting.MenuBotWrapper>
  );
};

const Menu = ({ title, MenuBottom }) => {
  return (
    <Setting.MenuWrapper>
      <Setting.MenuTitleText className={Pretendard_SemiBold.className}>
        {title}
      </Setting.MenuTitleText>
      {MenuBottom &&
        MenuBottom.map((v, i) => {
          const last = i === MenuBottom.length - 1;
          return (
            <MenuBot
              key={v.title}
              title={v.title}
              Click={v.Click}
              last={last}
            />
          );
        })}
    </Setting.MenuWrapper>
  );
};

export default Menu;
