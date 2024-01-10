import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const RootContainer = styled(Box)({
  fontFamily: 'Pretendard',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#00B4FF',
  cursor: 'pointer',
  backgroundColor: 'white',
  padding: '13px 18px',
  border: '1px solid #00B4FF',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#EDF7FE',
  },
  '&:disabled': {
    color: '#CECECE',
    backgroundColor: 'white',
    border: '1px solid #CECECE',
    cursor: 'auto',
  },
});

const ChButtonSecondary = ({ children, onClick, sx, disabled }) => {
  return (
    <RootContainer
      component="button"
      onClick={event => {
        if (onClick !== null) onClick(event);
      }}
      sx={sx}
      disabled={disabled}
    >
      {children}
    </RootContainer>
  );
};

ChButtonSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
};

ChButtonSecondary.defaultProps = {
  onClick: null,
  sx: {},
  disabled: false,
};

export default ChButtonSecondary;
