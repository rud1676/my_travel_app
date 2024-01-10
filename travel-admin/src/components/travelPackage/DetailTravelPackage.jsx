import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Box, Typography } from '@mui/material';
import { travelPackageApi } from '../../api/travel';

function DetailTravelPackage({ open, onClose, id }) {
  const [travelData, setTravelData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      if (id) {
        const { data } = await travelPackageApi.get(id);
        setTravelData(data);
      }
    };
    loadData();
  }, []);

  return (
    <Dialog
      open={open}
      scroll="paper"
      PaperProps={{
        sx: { width: '1000px', minHeight: '800px', borderRadius: '10px' },
      }}
      onClose={() => onClose()}
    >
      <Box sx={{ padding: '30px' }}>
        <Box>
          <Typography>여행 상품 상세</Typography>

          <Typography>옵션</Typography>
          {travelData?.options?.map(option => (
            <Box>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  옵션 제목:
                </span>
                {option.title}
              </Typography>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  옵션 설명:
                </span>
                {option.content}
              </Typography>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  옵션 가격:
                </span>
                {option.price}
              </Typography>
            </Box>
          ))}

          <Typography sx={{ mt: '20px' }}>여행 정보</Typography>
          {travelData?.categories?.map(category => (
            <Box>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  여행 정보:
                </span>
                {category.title}
              </Typography>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  여행 정보 상세:
                </span>
                {category.content}
              </Typography>
            </Box>
          ))}
          <Typography>여행 코스</Typography>
          {travelData?.courses?.map(course => (
            <Box>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  코스 제목:
                </span>
                {course.title}
              </Typography>
              <Typography>
                <span
                  style={{
                    color: 'blue',
                  }}
                >
                  코스 일차:
                </span>
                {course.day}
              </Typography>
              {course.contents.map(content => (
                <Box sx={{ marginLeft: '30px' }}>
                  <Typography>
                    <span
                      style={{
                        color: 'blue',
                      }}
                    >
                      코스 제목:
                    </span>
                    {content.content}
                  </Typography>
                  <Typography>
                    <span
                      style={{
                        color: 'blue',
                      }}
                    >
                      코스 내용 항공편 여부:
                    </span>
                    {content.isFlight ? '항공편 포함' : '항공편 미포함'}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
}
DetailTravelPackage.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
DetailTravelPackage.defaultProps = {
  open: false,
};
export default DetailTravelPackage;
