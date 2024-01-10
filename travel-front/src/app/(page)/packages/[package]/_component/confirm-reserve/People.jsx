"use client";

import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Package from "@/app/(page)/packages/[package]/package.style";
import { Pretendard_Medium, Pretendard_Bold } from "@/assets/fonts/fonts";

const People = ({ adult, child, setAdult, setChild }) => {
  const onClickAdultUp = useCallback(() => {
    setAdult((prev) => prev + 1);
  }, [setAdult]);
  const onClickChildUp = useCallback(() => {
    setChild((prev) => prev + 1);
  }, [setChild]);
  const onClickAdultDown = useCallback(() => {
    setAdult((prev) => (prev > 0 ? prev - 1 : 0));
  }, [setAdult]);
  const onClickChildDown = useCallback(() => {
    setChild((prev) => (prev > 0 ? prev - 1 : 0));
  }, [setChild]);

  return (
    <Package.PeopleInputBoxWrapper>
      <Package.ConfirmDataTitle className={Pretendard_Bold.className}>
        인원선택
      </Package.ConfirmDataTitle>
      <Package.PeopleSelectBox>
        <Package.CheckBoxLabel className={Pretendard_Medium.className}>
          성인 (만 12세 이상)
        </Package.CheckBoxLabel>
        <Package.ButtonBox>
          <IconButton
            onClick={onClickAdultDown}
            sx={{ padding: "0px", width: "37px" }}
          >
            <RemoveCircleOutlineIcon sx={{ fontSize: "37px" }} />
          </IconButton>
          <Package.PeopleText className={Pretendard_Bold.className}>
            {adult}
          </Package.PeopleText>
          <IconButton
            onClick={onClickAdultUp}
            sx={{ padding: "0px", width: "37px" }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: "37px", color: "black" }} />
          </IconButton>
        </Package.ButtonBox>
      </Package.PeopleSelectBox>
      <Package.PeopleSelectBox>
        <Package.CheckBoxLabel className={Pretendard_Medium.className}>
          소아 (만 12세 미만)
        </Package.CheckBoxLabel>
        <Package.ButtonBox>
          <IconButton
            onClick={onClickChildDown}
            sx={{ padding: "0px", width: "37px" }}
          >
            <RemoveCircleOutlineIcon sx={{ fontSize: "37px" }} />
          </IconButton>
          <Package.PeopleText className={Pretendard_Bold.className}>
            {child}
          </Package.PeopleText>
          <IconButton
            onClick={onClickChildUp}
            sx={{ padding: "0px", width: "37px" }}
          >
            <AddCircleOutlineIcon sx={{ fontSize: "37px", color: "black" }} />
          </IconButton>
        </Package.ButtonBox>
      </Package.PeopleSelectBox>
    </Package.PeopleInputBoxWrapper>
  );
};

People.propTypes = {
  adult: PropTypes.number.isRequired,
  child: PropTypes.number.isRequired,
  setAdult: PropTypes.func.isRequired,
  setChild: PropTypes.func.isRequired,
};
export default People;
