/* eslint-disable no-new */
import React, { createRef } from 'react';
import MaterialTable from 'material-table';
import { Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { tableIcons, localization } from '../lib/TabIcon';
import { travelPackageApi } from '../api/travel';
import CreateTravelPackage from '../components/travelPackage/CreateTravelPackage';
import AddInfoTravelPackage from '../components/travelPackage/AddInfoTravelPackage';
import EditTravelPackage from '../components/travelPackage/EditTravelPackage';

const columns = [
  {
    title: '여행 상품 번호',
    field: 'id',
  },
  {
    title: '여행 상품 제목',
    field: 'title',
  },
  {
    title: '여행 상품 날짜수',
    field: 'totaldays',
  },
  {
    title: '장소',
    field: 'location',
  },
  {
    title: '조회수',
    field: 'viewCount',
  },
];

function TravelPackage() {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [openCreatePackage, setOpenCreatePackage] = React.useState(false);
  const [openDetailPackage, setOpenDetailPackage] = React.useState(false);
  const [openAddInfoPackage, setOpenAddInfoPackage] = React.useState(false);

  const [addInfoPackageId, setAddInfoPackageId] = React.useState(null);
  const [editTravelPackageId, setEditTravelPackageId] = React.useState(null);

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
      <Box sx={{ textAlign: 'right', mb: '10px' }}>
        <Button
          variant="outlined"
          onClick={() => {
            setOpenCreatePackage(true);
          }}
        >
          상품 추가
        </Button>
      </Box>

      <CreateTravelPackage
        key={openCreatePackage}
        open={openCreatePackage}
        onClose={() => {
          setOpenCreatePackage(false);
          tableRef.current.onQueryChange();
        }}
      />

      <EditTravelPackage
        key={openDetailPackage}
        id={editTravelPackageId}
        open={openDetailPackage}
        onClose={() => {
          setOpenDetailPackage(false);
          tableRef.current.onQueryChange();
        }}
      />

      <AddInfoTravelPackage
        key={openAddInfoPackage}
        open={openAddInfoPackage}
        onClose={() => {
          setOpenAddInfoPackage(false);
        }}
        id={addInfoPackageId}
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
          ...columns,
          {
            title: '상세 수정',
            render: rowData => {
              return (
                <Box>
                  <Button
                    sx={{ ml: '10px' }}
                    variant="outlined"
                    onClick={() => {
                      setEditTravelPackageId(rowData.id);
                      setOpenDetailPackage(true);
                    }}
                  >
                    상품 수정
                  </Button>
                </Box>
              );
            },
          },
          {
            title: '상세 정보 추가',
            render: rowData => {
              return (
                <Box>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setAddInfoPackageId(rowData.id);
                      setOpenAddInfoPackage(true);
                    }}
                  >
                    상세 추가 및 수정
                  </Button>
                </Box>
              );
            },
          },
          {
            title: '상품 삭제',
            render: rowData => {
              return (
                <Box>
                  <Button
                    variant="outlined"
                    onClick={async () => {
                      if (window.confirm('상품을 삭제하시겠습니까?')) {
                        await travelPackageApi.delete(rowData.id);
                        tableRef.current.onQueryChange();
                      }
                    }}
                  >
                    상품 삭제
                  </Button>
                </Box>
              );
            },
          },
        ]}
        data={query => {
          // eslint-disable-next-line no-unused-vars
          return new Promise((resolve, _reject) => {
            // query.search
            travelPackageApi
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
        title="여행 상품 관리"
      />
    </Box>
  );
}

export default TravelPackage;
