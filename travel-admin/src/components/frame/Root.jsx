import { Box } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { MenuHeight } from '../../define';
import TopAppbar from './TopAppbar';

export default function AdminRoot() {
  const [open, setOpenSidebar] = useState(true);
  return (
    <Box sx={{ display: 'flex' }}>
      <TopAppbar open={open} setOpenSidebar={setOpenSidebar} />
      <Sidebar open={open} setOpenSidebar={setOpenSidebar} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          margin: '40px',
          mt: `${MenuHeight + 40}px`,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
