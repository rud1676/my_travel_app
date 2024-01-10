import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

import { reservedPackageApi } from '../../api/travel';
import { reservedTravelPackageStatus } from '../../define';

function ChangeReserve({ open, onClose, id }) {
  const [reserveData, setReserveData] = useState(null);
  const [chagneStatus, setChangeStatus] = React.useState('');

  const handleChange = event => {
    setChangeStatus(event.target.value);
  };

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const { data } = await reservedPackageApi.get(id);
          setReserveData(data);
          setChangeStatus(data.status);
        } catch (err) {
          console.log(err);
        }
      }
    };
    loadData();
  }, []);

  const send = async () => {
    try {
      await reservedPackageApi.statusChange(id, chagneStatus);
      window.alert('예약 상태 변경 완료');
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog
      open={open}
      scroll="paper"
      PaperProps={{
        sx: { width: '500px', borderRadius: '10px' },
      }}
      onClose={() => onClose()}
    >
      <Box sx={{ padding: '30px' }}>
        <Typography sx={{ fontSize: '25px', mb: '20px' }}>
          예약 상태 확인 및 변경
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ fontWeight: 700 }}>현재 상태 :</Typography>
          {reserveData?.status === reservedTravelPackageStatus.waiting && (
            <Typography>결제 대기(상담 대기중)</Typography>
          )}
          {reserveData?.status === reservedTravelPackageStatus.paied && (
            <Typography>결제 완료</Typography>
          )}
          {reserveData?.status === reservedTravelPackageStatus.canceled && (
            <Typography>취소</Typography>
          )}
          {reserveData?.status === reservedTravelPackageStatus.completed && (
            <Typography>예약 확정</Typography>
          )}
        </Box>

        <Box sx={{ mt: '50px', display: 'flex' }}>
          <Typography sx={{ fontWeight: 700 }}> 상태 변경:</Typography>
          <Select
            value={chagneStatus}
            onChange={handleChange}
            sx={{ ml: '50px', minWidth: '250px' }}
          >
            <MenuItem value={reservedTravelPackageStatus.waiting}>
              결제 대기(상담 대기중)
            </MenuItem>
            <MenuItem value={reservedTravelPackageStatus.paied}>
              결제 완료
            </MenuItem>
            <MenuItem value={reservedTravelPackageStatus.canceled}>
              예약 취소
            </MenuItem>
            <MenuItem value={reservedTravelPackageStatus.completed}>
              예약 확정
            </MenuItem>
          </Select>
        </Box>
        <Button
          sx={{ mt: '50px', pl: '50px', pr: '50px' }}
          variant="contained"
          fullWidth
          onClick={() => send()}
        >
          확인
        </Button>
      </Box>
    </Dialog>
  );
}
ChangeReserve.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
ChangeReserve.defaultProps = {
  open: false,
};
export default ChangeReserve;
