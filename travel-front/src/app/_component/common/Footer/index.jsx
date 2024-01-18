"use client";

import FooterStyle from "./footer.style";
const Footer = ({
  backgroundColor = "#6549ba",
  bgcolor = "#6549ba",
  onClick,
  child,
}) => {
  return (
    <FooterStyle.FooterWrapper
      backgroundColor={backgroundColor || bgcolor}
      onClick={onClick}
    >
      {child}
    </FooterStyle.FooterWrapper>
  );
};

export default Footer;
