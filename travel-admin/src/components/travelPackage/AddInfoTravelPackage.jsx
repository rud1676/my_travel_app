import React, { useEffect, useState } from 'react';
import {
  Dialog,
  Box,
  TextField,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { travelPackageApi } from '../../api/travel';

function AddOption({ register, index, option }) {
  return (
    <Stack direction="column" gap="10px" sx={{ mt: '20px' }}>
      <TextField
        label="옵션 제목"
        fullWidth
        defaultValue={option?.title}
        {...register(`optionTitle-${index}`)}
      />
      <TextField
        label="옵션 상세"
        fullWidth
        multiline
        minRows={3}
        defaultValue={option?.content}
        {...register(`optionContent-${index}`)}
      />
      <TextField
        label="옵션 가격"
        fullWidth
        type="number"
        defaultValue={option?.price}
        {...register(`optionPrice-${index}`)}
      />
    </Stack>
  );
}

function AddCategory({ register, index, category }) {
  return (
    <Stack gap="10px" sx={{ mt: '10px' }}>
      <TextField
        label="여행 정보 제목"
        fullWidth
        defaultValue={category?.title}
        {...register(`categoryTitle-${index}`)}
      />
      <TextField
        label="여행 정보 상세"
        fullWidth
        multiline
        minRows={3}
        defaultValue={category?.content}
        {...register(`categoryContent-${index}`)}
      />
      <Typography sx={{}}>-----------</Typography>
    </Stack>
  );
}

function AddCourseContent({ register, content, parentIndex, childIndex }) {
  console.log(content?.isFlight);
  return (
    <Stack direction="row" gap="10px" sx={{ mt: '10px' }}>
      <TextField
        label="코스 상세 일정"
        fullWidth
        defaultValue={content?.content}
        {...register(`courseContentTitle-${parentIndex}.${childIndex}`)}
      />
      <Box>
        <Typography sx={{ fontSize: '13px', whiteSpace: 'nowrap' }}>
          비행 일정 표시
        </Typography>
        <input
          type="checkbox"
          defaultChecked={content?.isFlight}
          {...register(`courseContentIsFlight-${parentIndex}.${childIndex}`)}
        />
      </Box>
    </Stack>
  );
}

function AddCourse({ register, index, course, unregister }) {
  const [courseContents, setCourseContents] = useState(course?.contents || []);

  return (
    <Box>
      <Stack direction="row" gap="10px" sx={{ mt: '10px' }}>
        <TextField
          label="코스 일차"
          type="number"
          defaultValue={course?.day}
          {...register(`courseDay-${index}`)}
        />
        <TextField
          label="코스 제목"
          fullWidth
          defaultValue={course?.title}
          {...register(`courseTitle-${index}`)}
        />
      </Stack>
      {courseContents.map((content, childindex) => (
        // eslint-disable-next-line react/no-array-index-key
        <AddCourseContent
          key={index}
          register={register}
          parentIndex={index}
          childIndex={childindex}
          content={content}
        />
      ))}
      <Box>
        <Button
          onClick={() => {
            setCourseContents([
              ...courseContents,
              {
                title: '',
                isFlight: 0,
              },
            ]);
          }}
        >
          코스 컨텐츠 추가
        </Button>
        <Button
          onClick={() => {
            unregister(`courseContentTitle-${index}`);
            setCourseContents(
              courseContents.slice(0, courseContents.length - 1),
            );
          }}
        >
          코스 컨텐츠 삭제
        </Button>
      </Box>
    </Box>
  );
}

// 추가와 수정을 동시 가능
function AddInfoTravelPackage({ open, onClose, id }) {
  const [options, setOptions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const { register, watch, getValues, unregister } = useForm();

  useEffect(() => {
    (async () => {
      if (id) {
        const { data } = await travelPackageApi.get(id);
        if (data.options.length === 0) {
          data.options.push({ title: '', content: '', price: 0 });
        }
        setOptions(data.options);
        if (data.categories.length === 0) {
          data.categories.push({ title: '', content: '' });
        }
        setCategories(data.categories);
        if (data.courses.length === 0) {
          data.courses.push({ title: '', day: 1, contents: [] });
        }
        setCourses(data.courses);
      }
    })();
  }, []);

  const send = async () => {
    const sendOptions = [];
    // eslint-disable-next-line array-callback-return
    options.map((_, index) => {
      sendOptions.push({
        title: watch(`optionTitle-${index}`),
        content: watch(`optionContent-${index}`),
        price: watch(`optionPrice-${index}`),
      });
    });

    const sendcategories = [];
    // eslint-disable-next-line array-callback-return
    categories.map((_, index) => {
      sendcategories.push({
        title: watch(`categoryTitle-${index}`),
        content: watch(`categoryContent-${index}`),
      });
    });

    const sendcourses = [];
    // eslint-disable-next-line array-callback-return
    courses.map((_, index) => {
      const titles = getValues(`courseContentTitle-${index}`);
      const isFlights = getValues(`courseContentIsFlight-${index}`);

      const contents = [];

      titles?.forEach((title, childIndex) => {
        contents.push({
          content: title,
          isFlight: isFlights[childIndex],
        });
      });

      sendcourses.push({
        title: watch(`courseTitle-${index}`),
        day: watch(`courseDay-${index}`),
        contents,
      });
    });

    try {
      await travelPackageApi.addInfo(id, {
        options: sendOptions,
        categories: sendcategories,
        courses: sendcourses,
      });
      onClose();
    } catch (err) {
      window.alert(err?.response?.data?.message);
    }
  };

  return (
    <Dialog
      open={open}
      scroll="paper"
      PaperProps={{
        sx: { width: '1000px', minHeight: '800px', borderRadius: '10px' },
      }}
      onClose={() => onClose()}
    >
      <Box padding="30px">
        {options.length > 0 && (
          <Box>
            <Typography sx={{ mb: '10px' }}>옵션</Typography>
            {options.map((option, index) => (
              <AddOption
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                register={register}
                index={index}
                option={option}
              />
            ))}
          </Box>
        )}
        <Box>
          <Button
            onClick={() => {
              setOptions([...options, { content: 0, price: 0, title: '' }]);
            }}
          >
            옵션 추가
          </Button>
          <Button
            onClick={() => {
              setOptions(options.slice(0, options.length - 1));
            }}
          >
            옵션 삭제
          </Button>
        </Box>
        {categories.length > 0 && (
          <Box>
            <Typography sx={{ mb: '10px', mt: '10px' }}>여행 정보</Typography>
            {categories.map((category, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <AddCategory
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                register={register}
                index={index}
                category={category}
              />
            ))}
          </Box>
        )}
        <Box>
          <Button
            onClick={() => {
              setCategories([...categories, { content: '', title: '' }]);
            }}
          >
            여행 정보 추가
          </Button>
          <Button
            onClick={() => {
              setCategories(categories.slice(0, categories.length - 1));
            }}
          >
            여행 정보 삭제
          </Button>
        </Box>
        <Box>
          {courses.length > 0 && (
            <Box>
              <Typography sx={{ mb: '10px', mt: '10px' }}>코스</Typography>
              {courses.map((course, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <AddCourse
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  register={register}
                  unregister={unregister}
                  index={index}
                  course={course}
                />
              ))}
            </Box>
          )}
        </Box>
        <Box>
          <Button
            onClick={() => {
              setCourses([...courses, { title: '', day: 1, contents: [] }]);
            }}
          >
            코스 추가
          </Button>
          <Button
            onClick={() => {
              setCourses(courses.slice(0, courses.length - 1));
            }}
          >
            코스 삭제
          </Button>
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          send();
        }}
        sx={{ margin: '20px' }}
      >
        추가
      </Button>
    </Dialog>
  );
}

export default AddInfoTravelPackage;
