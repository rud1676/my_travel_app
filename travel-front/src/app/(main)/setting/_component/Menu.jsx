"use client";

import { Box } from "@mui/material";
import styles from "./component.module.css";

const MenuBot = ({ last, title, Click }) => {
  return (
    <Box>
      <p
        className={styles.menuTitle}
        style={{ marginBottom: last ? "56px" : "19px" }}
        onClick={Click}
      >
        {title}
      </p>
    </Box>
  );
};

const Menu = ({ title, MenuBottom }) => {
  return (
    <Box>
      <p className={styles.menuTitleText}>{title}</p>
      {MenuBottom &&
        MenuBottom.map((v, i) => {
          return (
            <MenuBot
              key={v.title}
              title={v.title}
              Click={v.Click}
              last={i === MenuBottom.length - 1}
            />
          );
        })}
    </Box>
  );
};

export default Menu;
