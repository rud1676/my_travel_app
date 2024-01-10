"use client";

import "../assets/scss/styles.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import PropTypes from "prop-types";
import { RecoilRoot } from "recoil";
import AppContainer from "@/app/_component/appContainer";

const RootTemplate = ({ children }) => {
  return (
    <RecoilRoot>
      <AppContainer>{children}</AppContainer>
    </RecoilRoot>
  );
};

RootTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RootTemplate;
