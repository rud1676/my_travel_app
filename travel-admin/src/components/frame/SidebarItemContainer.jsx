import {
  ListItemText,
  ListItemIcon,
  Collapse,
  Typography,
  ListItemButton,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Icon from '../../assets/imgs/bill-line.svg';

function SidebarItemContainer({ title, children, menuOpen, onClick, sx }) {
  return (
    <Box sx={sx}>
      <ListItemButton onClick={onClick} sx={{ pl: '30px' }}>
        <ListItemIcon sx={{ minWidth: '19px' }}>
          <img src={Icon} alt="icon" />
        </ListItemIcon>
        <ListItemText
          sx={{ ml: '10px' }}
          disableTypography
          primary={
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '14px',
                color: '#222222',
              }}
            >
              {title}
            </Typography>
          }
        />
        {menuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={menuOpen} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Box>
  );
}

SidebarItemContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  title: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

SidebarItemContainer.defaultProps = {
  sx: {},
};

export default SidebarItemContainer;
