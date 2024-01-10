import React, { useRef, useState } from 'react';
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

function CreateTravelPackage({ open, onClose }) {
  const inputGuideEditor = useRef(null);
  const inputPolicyEditor = useRef(null);
  const inputFileRef = useRef();
  const { register, watch } = useForm();
  const [localFiles, setLocalFiles] = useState([]);

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
    files.forEach(file => {
      fd.append('images', file);
    });

    try {
      await travelPackageApi.add(fd);
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
      <Stack direction="column" gap="10px" sx={{ padding: '30px' }}>
        <Typography>여행 상품 올리기</Typography>
        <TextField label="제목" fullWidth {...register('title')} />
        <TextField label="여행 총 일수" fullWidth {...register('totaldays')} />
        <TextField label="여행 장소" fullWidth {...register('location')} />
        <Box>
          <Typography>상품 사진</Typography>
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
              content={`<p><strong>기준 인원 : 4인</strong></p><p><br></p><p><strong>[예약 절차]</strong></p><p>① 예약 문의 후 카카오톡 1:1상담</p><p>② 예약 확정 후 결제(완납)</p><p>③ 예약항공권 사본 &amp; 여권사본 &amp; 인적사항 확인④ 예약진행 및 확정</p><p><br></p><p><strong>[참고 사항]</strong></p><p>* 인원수 및 룸 변경에 따른 금액 변동 있음(1인 1룸 사용시 추가비용 있음)</p><p>* 공급 룸의 부킹완료로 예약불가시 이용가능한 룸으로 변경시 추가 비용발생할 수 있음</p><p>* 비행편 무료예약 후 본인결제(이메일) 서비스 제공(단, 결제 완료 후)</p><p>* 총금액은 여행시기에 따라 다소 상이할 수 있음</p><p>* 쇼핑센터 방문 없음(단, 요청시 쇼핑센터 가이드 &amp; 공항라운지 쇼핑시 20% 할인권 제공)</p>`}
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
              content="<p><strong>[환불 규정]</strong></p><p><br></p><p>① 예약금 결제는 현금, 카드 모두 가능하며, 예약 후 동시에 결제하여야 합니다. 미결제시 자동 취소됩니다.</p><p>② 예약금은 항공, 숙박 등 사전 예약의 용도로 사용되며, 여행 개시 30일전 취소시100% 환불 가능합니다.단, 30일전에 취소했더라도 여행 출발 확정에 따라 선 진행된 예약건(예:항공권,숙박,현지이동수단,공연,경기 등)에 따른 취소 수수료 또는 계약금 배상과 여행자의 실수로 항공, 숙박 등 예약 건에 대한 영문이름 변동이 발생했을 경우 이에 따른 변경 수수료는 여행자 본인이 부담해야 하며 취소 수수료, 계약금 배상액, 변경 수수료는 해당회사의 규정에 따릅니다.</p><p>③ 예약금 결제일 기준으로 여행상점의 특약이 적용됩니다.</p><p><br></p><p><strong>[여행 출발(개시) 전 취소 및 환불 규정]</strong></p><p><br></p><p><strong>① 여행자의 여행계약 해제 요청이 있는 경우(여행자의 취소요청시)</strong></p><p><br></p><p><strong>[PENALTY 1] 여행자는 여행상점에 여행요금을 완납한 후 여행 개시일 이전에 여행을 취소하는 경우, 취소 시점에 따라 다음 각 호의 환불 규정을 적용합니다.(*공정거래위원회 제정_소비자 피해보상 규정 기준)</strong></p><p>⑴ 여행 개시일로부터 30일 이전 취소시 : 예약금 100% 환불</p><p>⑵ 여행 개시일로부터 29일 ~ 20일 이전 취소시 : 여행가의 90% 환불</p><p>⑶ 여행 개시일로부터 19일 ~ 10일 이전 취소시 : 여행가의 85% 환불</p><p>⑷ 여행 개시일로부터 09일 ~ 08일 이전 취소시 : 여행가의 80% 환불</p><p>⑸ 여행 개시일로부터 07일 ~ 01일 이전 취소시 : 여행가의 70% 환불</p><p>⑹ 여행 출발 당일(여행개시전, no-show) 취소시 : 여행가의 50% 환불</p><p><br></p><p><strong>[PENALTY 2] 취소 시점에 따른 환불 규정과는 별도로 여행 출발 확정에 따라 선 진행된 예약건(예:항공권, 숙박, 현지이동수단, 공연, 경기 등)에 따른 취소 수수료 또는 계약금 배상과 여행자의 실수로 항공, 숙박 등 예약 건에 대한 영문이름 변동이 발생했을 경우 이에 따른 변경 수수료는 여행자 본인이 부담해야 하며 취소 수수료, 계약금 배상액, 변경 수수료는 해당 회사의 규정에 따릅니다.※ 예약금을 제외한 여행가(잔금) 결제는 출발 확정 후 3일 이내에 결제 하셔야 하며, 출발 확정 및 결제 관련 사항은 별도로 안내드립니다.</strong></p><p>⑴ 여행 개시일로부터 30일 이전 취소시 : 여행가의 90% 환불</p><p>⑵ 여행 개시일로부터 29일 ~ 10일 이전 취소시 : 여행가의 70% 환불</p><p>⑶ 여행 개시일로부터 09일 ~ 08일 이전 취소시 : 여행가의 50% 환불</p><p>⑷ 여행 개시일로부터 07일 ~ 여행 출발 당일(여행개시전, no-show) 취소시 : 환불불가</p><p><br></p><p><strong>② 당사의 귀책사유로 취소 통보하는 경우</strong></p><p>⑴ 여행 개시일로부터 30일 이전 취소시 : 예약금 100% 환불</p><p>⑵ 여행 개시일로부터 29일 ~ 20일 이전 취소시 : 여행가의 10% 배상</p><p>⑶ 여행 개시일로부터 19일 ~ 10일 이전 취소시 : 여행가의 15% 배상</p><p>⑷ 여행 개시일로부터 09일 ~ 08일 이전 취소시 : 여행가의 20% 배상</p><p>⑸ 여행 개시일로부터 07일 ~ 01일 이전 취소시 : 여행가의 30% 배상</p><p>⑹ 여행 출발 당일(여행개시 전) 취소시 : 여행가의 50% 배상</p><p><br></p><p>※단, 최저행사인원이 충족되지 않거나 정부지시의 사유로 불가피하게 기획여행을 실시할 수 없는 경우에는 제9조의 조항에 의거하여 배상합니다.</p><p><br></p><p><br></p><p><br></p>"
            />
          </Box>
        </Box>
        <Button
          onClick={() => {
            send();
          }}
          variant="contained"
        >
          상품 올리기
        </Button>
      </Stack>
    </Dialog>
  );
}
CreateTravelPackage.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
CreateTravelPackage.defaultProps = {
  open: false,
};
export default CreateTravelPackage;
