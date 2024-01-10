/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import LeftArrow from '../../assets/svgs/arrow-left-circle-line.svg';
import RightArrow from '../../assets/svgs/arrow-right-circle-line.svg';

export default function Pagination({
  pageChangeHandler,
  totalRows,
  rowsPerPage,
  currentPage,
}) {
  const [canGoBack, setCanGoBack] = React.useState(false);
  const [canGoNext, setCanGoNext] = React.useState(false);
  const pageCount = Math.ceil(totalRows / rowsPerPage);
  const currentPageDivision = Math.floor((currentPage - 1) / 10);
  const partPageCount = Math.min(pageCount - currentPageDivision * 10, 5);
  const pageArr = [];
  let startIndex = currentPageDivision * 10;
  for (let i = 0; i < partPageCount; i += 1) {
    pageArr.push(startIndex);
    startIndex += 1;
  }
  function handleChangePage(page) {
    pageChangeHandler(page);
  }
  function onPageSelect(pageNo) {
    handleChangePage(pageNo);
  }
  function onNextPage() {
    handleChangePage(currentPage + 1);
  }
  function onPrevPage() {
    handleChangePage(currentPage - 1);
  }
  React.useEffect(() => {
    if (currentPage === 1) {
      setCanGoBack(false);
    } else {
      setCanGoBack(true);
    }
    if (currentPage === pageCount) {
      setCanGoNext(false);
    } else {
      setCanGoNext(true);
    }
  }, [pageCount, currentPage]);

  return (
    <div>
      <IconButton
        onClick={onPrevPage}
        type="button"
        disabled={!canGoBack}
        sx={{
          width: '80px',
          height: '34px',
          mr: '3px',
          border: '1px solid #E5E5E5',
          borderRadius: 0,
        }}
      >
        <img src={LeftArrow} alt="left" />
        <Typography variant="s13w500" sx={{ ml: '5px', color: '#222222' }}>
          이전
        </Typography>
      </IconButton>
      <span>
        {pageArr.map(item => (
          <IconButton
            key={item}
            sx={{
              p: '0px',
              width: '40px',
              height: '40px',
              mr: '3px',
              ml: '3px',
            }}
            onClick={() => onPageSelect(item + 1)}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              sx={{
                color: currentPage - 1 === item ? '#222222' : '#999999',
                fontSize: '12px',
                fontWeight: '500',
                width: '34px',
                height: '34px',
                background: currentPage - 1 === item ? '#FFFFFF' : '#F8F8F8',
                border:
                  currentPage - 1 === item
                    ? '1px solid #222222'
                    : '1px solid #E5E5E5',
              }}
            >
              {item + 1}
            </Box>
          </IconButton>
        ))}
      </span>
      <IconButton
        onClick={onNextPage}
        type="button"
        disabled={!canGoNext}
        sx={{
          width: '80px',
          height: '34px',
          ml: '3px',
          border: '1px solid #E5E5E5',
          borderRadius: 0,
        }}
      >
        <Typography variant="s13w500" sx={{ mr: '5px', color: '#222222' }}>
          다음
        </Typography>
        <img src={RightArrow} alt="left" />
      </IconButton>
    </div>
  );
}
