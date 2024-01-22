"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Box } from "@mui/material";
import styles from "./inputprofileimage.module.css";
import ProfileDefault from "@/assets/img/ProfileDefault.svg";
import CameraIcon from "@/assets/img/CameraIcon.svg";

import { MakeFileReader } from "@/util/makeData";

const InputProfileImage = ({
  isChangeButton = false,
  thumnailsrc,
  setForm,
}) => {
  const fileInput = useRef();
  const [thumnail, setThumnail] = useState(thumnailsrc);
  const onFileChange = (e) => {
    const reader = MakeFileReader(setThumnail);
    setForm((prev) => {
      const temp = JSON.parse(JSON.stringify(prev));
      temp["file"] = e.target.files[0];
      return temp;
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Box
      className={styles.profileImageWarpper}
      sx={{ backgroundImage: `url(${thumnail || ProfileDefault.src})` }}
    >
      {thumnail && (
        <Image
          alt="이미지"
          src={thumnail}
          style={{
            display: "block",
            borderRadius: "50%",
          }}
          width={128}
          height={128}
        />
      )}
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={onFileChange}
      />
      {isChangeButton && (
        <Box
          className={styles.profileChangeButton}
          sx={{ top: thumnail ? "-30px" : "98px" }}
          isthumnail={thumnail}
          onClick={() => {
            fileInput.current.click();
          }}
        >
          <Image src={CameraIcon.src} width={24} height={24} alt="사진아이콘" />
        </Box>
      )}
    </Box>
  );
};

export default InputProfileImage;
