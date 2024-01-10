import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Dialog, Box, Typography } from '@mui/material';
import { userApi } from '../../api/user';

function DetailUser({ open, onClose, id }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        try {
          const { data } = await userApi.detail(id);
          setUserData(data);
        } catch (err) {
          window.alert('유저 정보를 불러오는데 실패했습니다.');
        }
      }
    };
    loadData();
  }, [id]);

  return (
    <Dialog
      open={open}
      scroll="paper"
      PaperProps={{
        sx: { width: '500px', minHeight: '800px', borderRadius: '10px' },
      }}
      onClose={() => onClose()}
    >
      <Box sx={{ padding: '30px' }}>
        <Box>
          <Typography sx={{ fontSize: '25px', mb: '20px' }}>
            예약자 상세 정보
          </Typography>

          <Typography>
            가입일:{' '}
            {userData?.createdAt
              ? moment(userData?.createdAt).format('YYYY-MM-DD')
              : ''}
          </Typography>

          <Typography>이메일: {userData?.email}</Typography>

          <Typography>생일: {userData?.birth}</Typography>

          <Typography>이름: {userData?.name}</Typography>

          <Typography>번호: {userData?.phone}</Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
DetailUser.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
DetailUser.defaultProps = {
  open: false,
};
export default DetailUser;
