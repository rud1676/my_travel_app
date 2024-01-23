import "../assets/scss/styles.scss";

import AppContainer from "@/app/_component/common/AppContainer";

const RootTemplate = ({ children }) => {
  return <AppContainer>{children}</AppContainer>;
};

export default RootTemplate;
