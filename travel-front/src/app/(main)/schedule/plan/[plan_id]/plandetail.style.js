import { Box, Typography, SwipeableDrawer } from "@mui/material";
import styled from "@emotion/styled";

const PlanDetail = {
  MainWrapper: styled(Box)`
    padding: 15px 16px 0px 18px;
    & img {
      cursor: pointer;
    }
  `,
  MiniDeleteBox: styled(Box)`
    cursor: pointer;
    position: relative;
    left: calc(100% - 0px);
    display: flex;
    align-items: center;
    justify-content: center;

    top: -165px;
    position: relative;
    border-radius: 0px 5px 5px 0px;
    background: #ff453a;
    width: 30px;
    height: 28px;
    flex-shrink: 0;
    z-index: 1;
  `,
  IconBox: styled(Box)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    background-image: url("${(props) => props.imgurl}");
  `,
  ScheduleMove: styled(Box)`
    cursor: pointer;
    position: relative;
    left: calc(100% - 0px);
    top: -80px;
    border-radius: 0px 5px 5px 0px;
    background: #d9d9d9;
    width: 26px;
    height: 50px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    z-index: 1;
  `,
};

export const FooterWrapper = styled(Box)`
  cursor: pointer;
  z-index: -111;
  bottom: 0px;
  position: fixed;
  border-radius: 20px 20px 0px 0px;
  background: ${(props) => (props.bgcolor ? props.bgcolor : "#6549ba")};
  box-shadow: 0px -2px 2px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  min-width: 320px;
  max-width: 820px;
  height: 93px;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
`;

export const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const TitleText = styled(Typography)`
  width: 75%;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
`;
export const HeaderButton = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
`;

export const DateSectionWrapper = styled(Box)`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  cursor: pointer;
  padding: 6px 10px;
  align-items: center;
  overflow: scroll;
  width: 100%;
  margin-top: 15px;
  display: flex;
  gap: 6px;
`;

export const DateWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex: 0 0 auto;
  width: 78px;
  height: 42px;
  background-image: url("${(props) => props.imgsrc}");
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  line-height: normal;
`;

export const ButtonTitle = styled(Typography)`
  color: #4987f7;

  font-size: 20px;
  font-style: normal;
  line-height: normal;
`;

export const ButtonWrapper = styled(Box)`
  cursor: pointer;
  border-radius: ${(props) => props.rad};
  background: #efefef;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  flex-shrink: 0;
`;

export const CloseButtonWrapper = styled(Box)`
  margin-top: 14px;
  cursor: pointer;
  border-radius: 9px;
  background: #efefef;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const DrawFooterWrapper = styled(SwipeableDrawer)`
  .MuiDrawer-paperAnchorBottom {
    background-color: transparent;
    box-shadow: none;
  }
`;

export default PlanDetail;
