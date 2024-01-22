"use client";

import React from "react";
import PropTypes from "prop-types";
import SelectBoxWrapper from "../_component/SelectBoxWrapper";

import PeopleBox from "./PeopleSelectBox";

const People = ({ adult, child, setAdult, setChild }) => {
  const onClickUp = (setState) => {
    setState((prev) => prev + 1);
  };
  const onClickDown = (setState) => {
    setState((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <SelectBoxWrapper title="인원선택">
      <PeopleBox
        onClickDown={() => onClickDown(setAdult)}
        onClickUp={() => onClickUp(setAdult)}
        value={adult}
        title="성인 (만 12세 이상)"
      />
      <PeopleBox
        onClickDown={() => onClickDown(setChild)}
        onClickUp={() => onClickUp(setChild)}
        value={child}
        title="소아 (만 12세 미만)"
      />
    </SelectBoxWrapper>
  );
};

People.propTypes = {
  adult: PropTypes.number.isRequired,
  child: PropTypes.number.isRequired,
  setAdult: PropTypes.func.isRequired,
  setChild: PropTypes.func.isRequired,
};
export default People;
