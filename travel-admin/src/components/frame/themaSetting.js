import { createTheme } from '@mui/material/styles';

const supportFontSiz = [
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  32, 33, 34, 35, 36,
];

const supportFontWeight = [300, 400, 500, 600, 700];

const fontOptions = {};

supportFontSiz.forEach(font => {
  supportFontWeight.forEach(weight => {
    fontOptions[`s${font}w${weight}`] = {
      fontSize: `${font}px`,
      fontWeight: weight,
    };
  });
});

const theme = createTheme({
  typography: {
    fontFamily: 'Spoqa Han Sans Neo',
    ...fontOptions,
  },
  breakpoints: {
    values: {
      desktop: 1090,
    },
  },
  palette: {
    primary: {
      main: '#00C4C4',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#B79683',
      contrastText: '#FFFFFF',
    },
    cancel: {
      main: '#CCCCCC',
      contrastText: '#FFFFFF',
    },
    appbar: {
      main: '#333333',
    },
  },
});

export default theme;
