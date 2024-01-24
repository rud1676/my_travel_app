"use client";

import { Box } from "@mui/material";
import PropTypes from "prop-types";

import styles from "./userform.module.css";

import InputLabel from "@/app/_component/ui/InputGroup/InputLabel";
import InputBirth from "@/app/_component/ui/InputGroup/InputBirth";
import InputGender from "@/app/_component/ui/InputGroup/InputGender";
import InputProfileImage from "@/app/_component/ui/InputGroup/InputProfileImage";

const UserForm = ({ setForm, form }) => {
  console.log(form);
  return (
    <Box className={styles.myInfoWrapper}>
      <InputProfileImage
        thumnailsrc={form?.image?.location}
        setForm={setForm}
        isChangeButton
      />

      <Box className={styles.inputWrapper}>
        <InputLabel
          setForm={setForm}
          field={"name"}
          placeholder={form?.name}
          title="이름"
        />
        <InputLabel
          setForm={setForm}
          field={"phone"}
          placeholder={form?.phone}
          title="전화번호"
        />
        <InputLabel
          setForm={setForm}
          field={"email"}
          placeholder={form?.email}
          title="이메일"
        />
        <InputBirth setForm={setForm} birth={form?.birth} />
        <InputGender setForm={setForm} />
      </Box>
    </Box>
  );
};

UserForm.propTypes = {
  setForm: PropTypes.func,
  form: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.number,
    file: PropTypes.any,
    birth: PropTypes.string,
  }),
};

export default UserForm;
