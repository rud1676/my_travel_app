import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans KR',
  },
  breakpoints: {
    values: {
      desktop: 1090,
    },
  },
  palette: {
    appbar: {
      main: '#333333',
    },
  },
});

export default theme;
