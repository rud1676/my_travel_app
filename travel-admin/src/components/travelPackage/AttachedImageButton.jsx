import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import { ReactComponent as IconFile } from '../../assets/svgs/common/ic_file.svg';
import { ReactComponent as IconClose } from '../../assets/svgs/common/ic_close_circle_32_grey.svg';

const MyRoot = styled(Box)({
  height: '56px',
  border: '1px solid #F5F5F5',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  display: 'inline-flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  padding: '0 9px',
});

const AttachedImageButton = ({ name, onClickDelete, sx }) => {
  return (
    <MyRoot sx={sx}>
      <Box sx={{ height: '32px', flexShrink: 0 }}>
        <IconFile />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Box>
      <IconButton
        onClick={() => {
          if (onClickDelete) onClickDelete();
        }}
        sx={{ padding: 0 }}
      >
        <IconClose />
      </IconButton>
    </MyRoot>
  );
};

AttachedImageButton.propTypes = {
  name: PropTypes.string,
  onClickDelete: PropTypes.func,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AttachedImageButton.defaultProps = {
  name: '',
  onClickDelete: null,
  sx: {},
};

export default AttachedImageButton;
