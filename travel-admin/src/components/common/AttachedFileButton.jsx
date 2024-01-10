import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import { ReactComponent as IconFile } from '../../assets/svgs/common/ic_file.svg';
import { ReactComponent as IconDownload } from '../../assets/svgs/common/ic_download_32.svg';
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
  maxWidth: '100%',
});

const AttachedFileButton = ({
  name,
  editable,
  onClickDelete,
  onClickDownload,
  sx,
}) => {
  return (
    <MyRoot sx={sx}>
      <Box sx={{ height: '32px', flexShrink: 0 }}>
        <IconFile />
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Box>
      {editable ? (
        <IconButton
          onClick={() => {
            if (onClickDelete) onClickDelete();
          }}
          sx={{ padding: 0 }}
        >
          <IconClose />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            if (onClickDownload) onClickDownload();
          }}
        >
          <IconDownload />
        </IconButton>
      )}
    </MyRoot>
  );
};

AttachedFileButton.propTypes = {
  name: PropTypes.string,
  onClickDelete: PropTypes.func,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  editable: PropTypes.bool,
  onClickDownload: PropTypes.func,
};

AttachedFileButton.defaultProps = {
  name: '',
  onClickDelete: null,
  sx: {},
  editable: false,
  onClickDownload: null,
};

export default AttachedFileButton;
