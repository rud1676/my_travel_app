/* eslint-disable no-new */
import React, { createRef } from 'react';
import MaterialTable from 'material-table';
import moment from 'moment';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { tableIcons, localization } from '../lib/TabIcon';
import { reservedPackageApi } from '../api/travel';
import { reservedTravelPackageStatus } from '../define';
import DetailUser from '../components/reservePackage/DetailUser';
import DetailTravelPackage from '../components/travelPackage/DetailTravelPackage';
import ChangeReserve from '../components/reservePackage/ChangeReserve';

function Reserve() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [openDetailUser, setOpenDetailUser] = React.useState(false);
  const [detailUserId, setDetailUserId] = React.useState(null);

  const [openDetailTravelPackage, setOpenDetailTravelPackage] =
    React.useState(false);
  const [detailTravelPackageId, setDetailTravelPackageId] =
    React.useState(null);

  const [openChangeReserve, setOpenChangeReserve] = React.useState(false);
  const [changeReserveId, setChangeReserveId] = React.useState(null);

  const searchParams = new URLSearchParams(search);
  const rowsPerPage = parseInt(searchParams.get('rowsPerPage'), 10) || 10;

  const tableRef = createRef();

  const options = {
    search: true,
    // selection: true,
    filtering: false,
    paginationType: 'stepped',
    pageSize: rowsPerPage,
    toolbar: true,
    sorting: false,
    filterCellStyle: { padding: '0px' },
    headerStyle: {
      position: 'sticky',
      top: 0,
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    },
    cellStyle: {
      textAlign: 'center',
    },
  };

  return (
    <Box
      sx={{
        marginTop: '10px',
        paddingBottom: '100px',
      }}
    >
      <DetailUser
        open={openDetailUser}
        id={detailUserId}
        onClose={() => {
          setOpenDetailUser(false);
        }}
      />

      <DetailTravelPackage
        open={openDetailTravelPackage}
        key={detailTravelPackageId}
        id={detailTravelPackageId}
        onClose={() => {
          setOpenDetailTravelPackage(false);
        }}
      />

      <ChangeReserve
        open={openChangeReserve}
        id={changeReserveId}
        key={openChangeReserve}
        onClose={() => {
          setOpenChangeReserve(false);
          tableRef.current.onQueryChange();
        }}
      />

      <MaterialTable
        tableRef={tableRef}
        icons={tableIcons}
        localization={localization}
        onChangeRowsPerPage={value => {
          navigate(`?rowsPerPage=${value}`);
        }}
        options={options}
        columns={[
          {
            title: '예약 번호',
            field: 'id',
          },
          {
            title: '예약 날짜',
            render: rowData => {
              return (
                <Typography>
                  {moment(rowData.createdAt).format('YYYY-MM-DD')}
                </Typography>
              );
            },
          },
          {
            title: '여행 상품 아이디',
            render: rowData => {
              return (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setDetailTravelPackageId(rowData.travelPackage.id);
                    setOpenDetailTravelPackage(true);
                  }}
                >
                  {rowData.travelPackage.id}
                </Button>
              );
            },
          },
          {
            title: '예약자',
            render: rowData => {
              return (
                <Button
                  sx={{ ml: '10px' }}
                  variant="outlined"
                  onClick={() => {
                    setDetailUserId(rowData.user.id);
                    setOpenDetailUser(true);
                  }}
                >
                  {rowData.user.name}
                </Button>
              );
            },
          },
          {
            title: '예약 상태',
            render: rowData => {
              let resever = '결제 대기';
              if (rowData.status === reservedTravelPackageStatus.waiting) {
                resever = '결제 대기';
              } else if (rowData.status === reservedTravelPackageStatus.paied) {
                resever = '결제 완료';
              } else if (
                rowData.status === reservedTravelPackageStatus.canceled
              ) {
                resever = '예약 취소';
              } else if (
                rowData.status === reservedTravelPackageStatus.completed
              ) {
                resever = '예약 확정';
              }

              return (
                <Button
                  variant="outlined"
                  onClick={() => {
                    setChangeReserveId(rowData.id);
                    setOpenChangeReserve(true);
                  }}
                >
                  {resever}
                </Button>
              );
            },
          },
          {
            title: '예약 가격',
            field: 'totalPrice',
          },
          {
            title: '예약 인원',
            render: rowData => {
              let str = '';
              if (rowData.adultCount) {
                str += `성인 ${rowData.adultCount}명 `;
              }
              if (rowData.childCount) {
                str += `아동 ${rowData.childCount}명 `;
              }

              return <Typography>{str}</Typography>;
            },
          },
          {
            title: '여행 날짜',
            render: rowData => {
              return (
                <Typography>
                  {moment(rowData.startAt).format('YYYY-MM-DD')} ~
                  {moment(rowData.endAt).format('YYYY-MM-DD')}
                </Typography>
              );
            },
          },
        ]}
        data={query => {
          // eslint-disable-next-line no-unused-vars
          return new Promise((resolve, _reject) => {
            // query.search
            reservedPackageApi
              .list(query.page, query.pageSize, query.search)
              .then(res => {
                const { count, rows } = res.data;
                resolve({
                  data: rows,
                  page: query.page,
                  totalCount: count,
                });
              });
          });
        }}
        title="예약 관리"
      />
    </Box>
  );
}

export default Reserve;
