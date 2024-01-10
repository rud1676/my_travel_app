"use client";

import { useRef } from "react";
import Image from "next/image";

import ProfileDefault from "@/assets/img/ProfileDefault.svg";
import CameraIcon from "@/assets/img/CameraIcon.svg";
import AppStyle from "../app.style";

const ProfileImage = ({
  thumnail,
  onFileChange = null,
  isChangeButton = false,
}) => {
  const fileInput = useRef();

  return (
    <AppStyle.ProfileImageWarpper imgsrc={thumnail ? "" : ProfileDefault.src}>
      <img
        alt="이미지"
        src={thumnail}
        style={{
          display: thumnail ? "block" : "none",
          borderRadius: "50%",
          width: 128,
          height: 128,
        }}
        width={128}
        height={128}
      />
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={onFileChange}
      />
      {isChangeButton && (
        <AppStyle.ProfileChangeButton
          isthumnail={thumnail}
          onClick={() => {
            fileInput.current.click();
          }}
        >
          <Image src={CameraIcon.src} width={24} height={24} alt="사진아이콘" />
        </AppStyle.ProfileChangeButton>
      )}
    </AppStyle.ProfileImageWarpper>
  );
};

export default ProfileImage;
