import { useState } from 'react';
import {
  Drawer as MuiDrawer,
  Typography,
  List,
  Box,
  styled,
} from '@mui/material';
import PropTypes from 'prop-types';
import { SidebarWidth } from '../../define';
import SidebarItemContainer from './SidebarItemContainer';
import SidebarItem from './SidebarItem';

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'fixed',
    whiteSpace: 'nowrap',
    width: '240px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0.1,
      [theme.breakpoints.up('sm')]: {
        // width: theme.spacing(9),
      },
    }),
  },
}));

function Sidebar({ open }) {
  const [openMenu01, setOpenMenu01] = useState(true);
  const [openMenu02, setOpenMenu02] = useState(true);

  return (
    <Drawer
      sx={{
        width: open ? SidebarWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? SidebarWidth : 0,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      <Typography
        sx={{
          textAlign: 'center',
          mt: '23px',
          fontWeight: 700,
          fontSize: '19px',
          lineHeight: '18px',
          color: '#444444',
        }}
      >
        씨네투어 관리자
      </Typography>
      <Box sx={{ mt: '40px' }}>
        <List>
          <SidebarItemContainer
            title="유저 관리"
            menuOpen={openMenu01}
            onClick={() => {
              setOpenMenu01(!openMenu01);
            }}
          >
            <SidebarItem title="유저 관리" to="/user" />
          </SidebarItemContainer>
        </List>
        <List>
          <SidebarItemContainer
            title="여행 상품 관리"
            menuOpen={openMenu02}
            onClick={() => {
              setOpenMenu02(!openMenu02);
            }}
          >
            <SidebarItem title="여행 상품 관리" to="/travelPackage" />
            <SidebarItem title="예약 관리" to="/reserve" />
          </SidebarItemContainer>
        </List>
      </Box>
    </Drawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
