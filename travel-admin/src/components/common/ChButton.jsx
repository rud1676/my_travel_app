import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const RootContainer = styled('button')({
  fontFamily: 'Pretendard',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  color: 'white',
  cursor: 'pointer',
  alignItems: 'center',
  background: '#00B4FF',
  padding: '14px 18px',
  border: '0 none',
  borderRadius: '3px',
  textAlign: 'center',

  '&:hover': {
    background: '#0088C0',
  },

  '&:disabled': {
    color: '#BCBCBC',
    backgroundColor: '#E9E9E9',
    cursor: 'auto',
  },
});

const ChButton = ({ children, onClick, sx, disabled }) => {
  return (
    <RootContainer
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

ChButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
};

ChButton.defaultProps = {
  onClick: null,
  sx: {},
  disabled: false,
};

export default ChButton;
