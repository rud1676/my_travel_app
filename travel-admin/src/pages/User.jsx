/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-new */
import React, { createRef } from 'react';
import MaterialTable from 'material-table';
import { Box, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { tableIcons, localization } from '../lib/TabIcon';
import { userApi } from '../api/user';

const columns = [
  {
    title: '유저 번호',
    field: 'id',
  },
  {
    title: '이메일',
    field: 'email',
  },
  {
    title: '이름',
    field: 'name',
  },
  {
    title: '성별',
    field: 'gender',
  },
  {
    title: '번호',
    field: 'phone',
  },
  {
    title: '소셜 로그인',
    field: 'provider',
  },
];

function User() {
  const navigate = useNavigate();
  const { search } = useLocation();

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
            title: '삭제',
            render: rowData => {
              return (
                <Box>
                  {rowData.id !== 1 && (
                    <Button
                      type="button"
                      variant="outlined"
                      onClick={async () => {
                        if (window.confirm('유저를 삭제하시겠습니까?')) {
                          await userApi.delete(rowData.id);
                          tableRef.current.onQueryChange();
                        }
                      }}
                    >
                      삭제
                    </Button>
                  )}
                </Box>
              );
            },
          },
          // {
          //   title: '상세',
          //   render: rowData => {
          //     return (
          //       <Box>
          //         <Button
          //           onClick={() => {
          //             // eslint-disable-next-line no-console
          //             console.log(rowData.id);
          //           }}
          //         >
          //           상세 보기
          //         </Button>
          //       </Box>
          //     );
          //   },
          // },
        ]}
        data={query => {
          // eslint-disable-next-line no-unused-vars
          return new Promise((resolve, _reject) => {
            // query.search
            userApi.list(query.page, query.pageSize, query.search).then(res => {
              const { count, rows } = res.data;
              // eslint-disable-next-line array-callback-return
              rows.map(v => {
                v.gender =
                  v.gender === 0
                    ? '남자'
                    : v.gender === 1
                    ? '여자'
                    : '선택안함';
              });
              resolve({
                data: rows,
                page: query.page,
                totalCount: count,
              });
            });
          });
        }}
        title="회원 리스트"
      />
    </Box>
  );
}

export default User;
