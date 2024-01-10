import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Box,
  TextField,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import QuillEditor from '../../lib/QuillEditor';
import AttachedImageButton from './AttachedImageButton';
import { travelPackageApi } from '../../api/travel';

function EditTravelPackage({ open, onClose, id }) {
  const [localFiles, setLocalFiles] = useState([]);
  const [orgUploadImages, setOrgUploadImages] = useState([]);
  const [removeImageIds, setRemoveImageIds] = useState([]);
  const inputGuideEditor = useRef(null);
  const inputPolicyEditor = useRef(null);
  const inputFileRef = useRef();
  const { register, watch } = useForm();
  const [orgData, setOrgData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        const { data } = await travelPackageApi.get(id);
        setOrgData(data);
        setOrgUploadImages(data.images);
        setLoading(false);
      }
    })();
  }, []);

  const send = async () => {
    const title = watch('title');
    const location = watch('location');
    const totaldays = watch('totaldays');
    const guide = inputGuideEditor.current.state.value;
    const policy = inputPolicyEditor.current.state.value;
    const files = localFiles;

    const fd = new FormData();
    fd.append('title', title);
    fd.append('subTitle', '.');
    fd.append('totaldays', totaldays);
    fd.append('location', location);
    fd.append('guide', guide);
    fd.append('policy', policy);
    removeImageIds.forEach(imageId => {
      fd.append('removeImageIds[]', imageId);
    });
    files.forEach(file => {
      fd.append('images', file);
    });

    try {
      await travelPackageApi.update(id, fd);
      onClose();
    } catch (err) {
      window.alert(err?.response?.data?.message);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <Dialog
      open={open}
      scroll="paper"
      PaperProps={{
        sx: { width: '1000px', minHeight: '800px', borderRadius: '10px' },
      }}
      onClose={() => onClose()}
      key={open}
    >
      <Stack direction="column" gap="10px" sx={{ padding: '30px' }}>
        <Typography>여행 상품 올리기</Typography>
        <TextField
          label="제목"
          fullWidth
          {...register('title')}
          defaultValue={orgData.title}
        />
        <TextField
          label="여행 총 일수"
          fullWidth
          {...register('totaldays')}
          defaultValue={orgData.totaldays}
        />
        <TextField
          label="여행 장소"
          fullWidth
          {...register('location')}
          defaultValue={orgData.location}
        />
        <Box>
          <Typography>상품 사진</Typography>
          {orgUploadImages &&
            orgUploadImages.map((file, index) => (
              <Box
                key={`attached-file-${index.toString()}`}
                sx={{ marginTop: '15px' }}
              >
                <AttachedImageButton
                  name={file.originalname}
                  onClickDelete={() => {
                    setRemoveImageIds([...removeImageIds, file.id]);
                    const newList = orgUploadImages.filter(
                      (_, index2) => index !== index2,
                    );
                    setOrgUploadImages(newList);
                  }}
                  editable
                />
              </Box>
            ))}
          <input
            type="file"
            name="myFileInput"
            id="file_input"
            style={{ display: 'none' }}
            ref={inputFileRef}
            onChange={event => {
              setLocalFiles([...localFiles, event.target.files[0]]);
            }}
          />
          <Button
            onClick={() => {
              if (inputFileRef.current) inputFileRef.current.click();
            }}
          >
            파일 첨부
          </Button>
          <Box>
            {localFiles.map((file, index) => (
              <Box
                key={`attached-file-${index.toString()}`}
                sx={{ marginTop: '15px' }}
              >
                <AttachedImageButton
                  name={file.name}
                  onClickDelete={() => {
                    const newList = localFiles.filter(
                      (_, index2) => index !== index2,
                    );
                    setLocalFiles(newList);
                  }}
                  editable
                />
              </Box>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography>필수안내</Typography>
          <Box
            sx={{
              border: '1px solid #BCBCBC',
              '#quill-editor': {
                '& .ql-editor': {
                  minHeight: '400px',
                },
              },
            }}
          >
            <QuillEditor
              inputEditor={inputGuideEditor}
              content={orgData?.guide}
            />
          </Box>
        </Box>
        <Box>
          <Typography>예약 및 취소규정</Typography>
          <Box
            sx={{
              border: '1px solid #BCBCBC',
              '#quill-editor': {
                '& .ql-editor': {
                  minHeight: '400px',
                },
              },
            }}
          >
            <QuillEditor
              inputEditor={inputPolicyEditor}
              content={orgData?.policy}
            />
          </Box>
        </Box>
        <Button
          onClick={() => {
            send();
          }}
          variant="contained"
        >
          상품 수정
        </Button>
      </Stack>
    </Dialog>
  );
}
EditTravelPackage.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
EditTravelPackage.defaultProps = {
  open: false,
};
export default EditTravelPackage;
