// https://mui.com/material-ui/react-backdrop/  화면 전체 로딩 처리
import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, CircularProgress } from '@mui/material';

export default function Loading({ loading }) {
  return (
    <Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: true,
};
