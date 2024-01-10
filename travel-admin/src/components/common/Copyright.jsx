import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://www.droneboda.com/">
        BODA
      </Link>
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default Copyright;
