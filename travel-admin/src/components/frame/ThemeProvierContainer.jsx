import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import theme from './themeSetting';

export default function ThemeProvierContainer({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

ThemeProvierContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
