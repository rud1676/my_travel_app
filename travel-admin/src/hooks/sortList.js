// eslint-disable-next-line import/prefer-default-export
export const sortList = {
  sorting: (arr, data) => {
    if (typeof data !== 'object' || data === null) {
      return;
    }

    arr.push(data.id);

    // eslint-disable-next-line no-restricted-syntax
    for (const key of Object.keys(data.tableData)) {
      const subData = data.tableData[key];
      if (Array.isArray(subData) && key !== 'path') {
        // eslint-disable-next-line no-restricted-syntax
        for (const item of subData) {
          sortList.sorting(arr, item);
        }
        // eslint-disable-next-line no-continue
        continue;
      }

      if (typeof subData === 'object' && key !== 'path') {
        sortList.sorting(arr, subData);
      }
    }
  },

  sortOrder: (arr, data) => {
    // eslint-disable-next-line array-callback-return
    data.map(x => {
      if (!arr.includes(x.order)) {
        arr.push(x.order);
      }
    });
  },

  // findIndex: (arr, compareData, targetData) => {
  //   let index = 0;
  //   // eslint-disable-next-line no-plusplus
  //   if (targetData.parentMenuId === '0') {
  //     // eslint-disable-next-line no-plusplus
  //     for (let i = 0; i < Object.keys(compareData).length; i++) {
  //       if (
  //         compareData[i].parentMenuId.toString() === targetData.parentMenuId
  //       ) {
  //         // eslint-disable-next-line no-param-reassign
  //         arr.push(compareData[i].order);
  //       } else {
  //         break;
  //       }
  //     }
  //   } else {
  //     // eslint-disable-next-line no-plusplus
  //     for (let i = 0; i < Object.keys(compareData).length; i++) {
  //       if (compareData[i].id.toString() === targetData.parentMenuId) {
  //         // eslint-disable-next-line no-param-reassign
  //         index = i;
  //         break;
  //       }
  //     }
  //     // eslint-disable-next-line array-callback-return
  //     compareData[index].tableData.childRows.map(x => {
  //       if (x.activate) arr.push(x.order);
  //     });
  //   }
  // },

  // DB를 통한 트리 데이터 처리시 사용
  // sorting: (arr, data) => {
  //   if (data.id !== undefined) {
  //     arr.push(data.id);
  //   }

  //   if (typeof data !== 'object' || data === null) {
  //     return;
  //   }

  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const key of Object.keys(data)) {
  //     const subData = data[key];

  //     if (Array.isArray(subData)) {
  //       // eslint-disable-next-line no-restricted-syntax
  //       for (const item of subData) {
  //         sortIdList.sorting(arr, item);
  //       }
  //       // eslint-disable-next-line no-continue
  //       continue;
  //     }

  //     if (typeof subData === 'object') {
  //       sortIdList.sorting(arr, subData);
  //     }
  //   }
  // },
};
