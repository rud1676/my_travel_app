import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
import { MenuHeight, SidebarWidth } from '../../define';
import { authApi } from '../../api/global';

function TopAppbar({ setOpenSidebar, open }) {
  const navigate = useNavigate();
  const appbarWidth = open ? SidebarWidth : 0;
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${appbarWidth}px)`,
        ml: `${appbarWidth}px`,
        height: `${MenuHeight}px`,
        backgroundColor: '#333333',
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="open drawer"
          onClick={() => {
            setOpenSidebar(prev => !prev);
          }}
          size="large"
          sx={{ mr: '36px' }}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
        <Typography sx={{ color: 'white', flexGrow: 1 }}>메뉴 영역</Typography>
        <IconButton
          onClick={() => {
            authApi.logout();
            navigate(0);
          }}
          size="large"
        >
          <ExitToApp sx={{ color: 'white' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

TopAppbar.propTypes = {
  setOpenSidebar: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default TopAppbar;
