"use client";

import React, { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";

import styles from "./appcontainer.module.css";

let theme = createTheme({
  typography: {
    // fontFamily: "Spoqa Han Sans Neo",
  },
  breakpoints: {
    values: {
      desktop: 1090,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: "#646464",
        dark: "#646464",
        light: "#646464",
        contrastText: "#242105",
      },
      name: "salmon",
    }),
  },
});
theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: () => ({
          minWidth: "0",
        }),
      },
    },
  },
});

const AppContainer = ({ children }) => {
  const pathname = usePathname();
  const queryClientRef = useRef();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          throwOnError: true,
        },
      },
    });
  }
  return (
    <ThemeProvider theme={theme}>
      <Toaster containerStyle={{ top: "100px" }} />
      <CssBaseline>
        <QueryClientProvider client={queryClientRef.current}>
          <Box
            className={styles.appWrapper}
            sx={{
              backgroundColor: pathname === "/login" ? "#6549BA" : "#f0f0f0",
            }}
          >
            {children}
          </Box>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default AppContainer;
