const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "jootravel.s3.amazonaws.com",
      "travel-package.s3.ap-northeast-2.amazonaws.com",
    ], // 이 호스트를 여기에 추가
  },
};

module.exports = nextConfig;
