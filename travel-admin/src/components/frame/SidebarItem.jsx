import { Box, ListItemButton, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function SidebarItem({ title, to }) {
  const navigate = useNavigate();
  return (
    <ListItemButton onClick={() => navigate(to)}>
      <ListItemText
        primary={
          <Box sx={{ display: 'flex', alignItems: 'center', ml: '49px' }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '14px',
                color: '#222222',
                ml: '10px',
              }}
            >
              {title}
            </Typography>
          </Box>
        }
      />
    </ListItemButton>
  );
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

SidebarItem.defaultProps = {};

export default SidebarItem;
