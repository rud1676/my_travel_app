import { Box, Typography, SwipeableDrawer } from "@mui/material";
import styled from "@emotion/styled";

const PlanDetail = {
  ButtonTitle: styled(Typography)`
    color: #4987f7;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
  `,
  ButtonWrapper: styled(Box)`
    cursor: pointer;
    border-radius: ${(props) => props.rad};
    background: #efefef;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1px;
    flex-shrink: 0;
  `,
  DrawFooterWrapper: styled(SwipeableDrawer)`
    .MuiDrawer-paperAnchorBottom {
      background-color: transparent;
      box-shadow: none;
    }
  `,
  CloseButtonWrapper: styled(Box)`
    cursor: pointer;
    margin-top: 14px;
    cursor: pointer;
    border-radius: 9px;
    background: #efefef;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  `,
  DrawerOuterWrapper: styled(Box)`
    display: flex;
    justify-content: center;
  `,
  DrawerInnerWrapper: styled(Box)`
    min-width: 320px;
    max-width: 820px;
    width: 100%;
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

export default PlanDetail;
