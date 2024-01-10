/* eslint-disable @next/next/no-sync-scripts */

import { Inter } from "next/font/google";
import PropTypes from "prop-types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "씨네스투어",
  description: "씨네스투어",
  charset: "utf-8",
  viewPort: "width=device-width, initial-scale=1.0",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
        />
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.11.3.min.js"
        />
      </head>

      <body className={inter.className}>
        <div id="naver_id_login" style={{ display: "none" }} />
        <div>{children}</div>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RootLayout;
