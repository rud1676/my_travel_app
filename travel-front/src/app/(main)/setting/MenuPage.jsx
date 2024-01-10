"use cleint";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Setting from "./setting.style";
import { LocalSave } from "@/LocalSave";
import Menu from "./Menu";
import { globalApi } from "@/api/global";

const MenuPage = () => {
  const navigator = useRouter();
  const [swt, setSwt] = useState(false);

  const onClickAlert = () => {
    setSwt((prev) => !prev);
  };

  const Menus = [
    {
      title: "개인",
      MenuBottom: [
        {
          title: "회원 정보",
          Click: () => {
            navigator.push("/setting/myinfo");
          },
        },
        {
          title: "예약 내역",
          Click: () => {
            navigator.push("/setting/reserved");
          },
        },
      ],
    },
    {
      title: "기타",
      MenuBottom: [
        {
          title: "공지사항",
          Click: () => {},
        },
        {
          title: "로그아웃",
          Click: () => {
            LocalSave.setToken("");
            window.location.href = "/";
          },
        },
        {
          title: "탈퇴하기",
          Click: async () => {
            if (window.confirm("탈퇴하시겠습니까? 모든 정보가 삭제됩니다.")) {
              try {
                await globalApi.withdraw();
                LocalSave.setToken("");
                window.location.href = "/";
              } catch (err) {
                console.log(err);
              }
            }
          },
        },
      ],
    },
  ];
  return (
    <>
      <Menu title="알림 설정" />
      <Setting.MenuAlert isspace={swt.toString()}>
        <Setting.MenuAlertText>일정 알림</Setting.MenuAlertText>
        <Setting.MinimalSwitchBox onClick={onClickAlert} switch={`${swt}`}>
          <Setting.MinimalSwitchCircle switch={`${swt}`} />
        </Setting.MinimalSwitchBox>
      </Setting.MenuAlert>
      {swt && (
        <Setting.MenuAlertTime>
          <Setting.MenuAlertText>알림 시간</Setting.MenuAlertText>
          <Setting.MenuAlertMinute>30분 전</Setting.MenuAlertMinute>
        </Setting.MenuAlertTime>
      )}
      {Menus.map((v) => (
        <Menu key={v.title} title={v.title} MenuBottom={v.MenuBottom} />
      ))}
    </>
  );
};

export default MenuPage;
