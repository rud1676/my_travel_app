"use client";

import { Box, Typography, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import styles from "./peopleselectbox.module.css";

const PeopleSelectBox = ({ onClickDown, onClickUp, value, title }) => {
  return (
    <Box className={styles.peopleSelectBox}>
      <Box className={styles.checkBoxLabel}>{title}</Box>
      <Box className={styles.buttonBox}>
        <IconButton className={styles.peopleIconButton} onClick={onClickDown}>
          <RemoveCircleOutlineIcon sx={{ fontSize: "37px" }} />
        </IconButton>
        <Typography className={styles.peopleText}>{value}</Typography>
        <IconButton className={styles.peopleIconButton} onClick={onClickUp}>
          <AddCircleOutlineIcon sx={{ fontSize: "37px", color: "black" }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default PeopleSelectBox;
