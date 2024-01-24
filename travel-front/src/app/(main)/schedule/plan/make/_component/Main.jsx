"use client";

import { Box, Typography, TextField } from "@mui/material";
import styles from "./component.module.css";

import Calendar from "@/app/_component/ui/Calendar";

const Main = ({ range, setRange, page, setTitle, title }) => {
  return (
    <Box
      className={styles.mainWrapper}
      sx={{ marginTop: `${page === 1 ? "32px" : "73px"}` }}
    >
      {page === 0 && (
        <Typography className={styles.mainTitleText}>여행제목</Typography>
      )}
      <TextField
        className={styles.titleInput}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {page === 1 && (
        <Calendar range={range} setRange={setRange} isFooter={false} />
      )}
    </Box>
  );
};

export default Main;
