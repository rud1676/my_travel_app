module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint/bable",
    "next/core-web-vitals", // 넥스트에서 제공하는 셋팅
    "eslint:recommended", // eslint에서 추천하는 셋팅
    "plugin:react-hooks/recommended", // 훅스 스타일로 리액트 코드 작성
    "plugin:react/recommended", // 리액트 코드 스타일
    "airbnb", // 에어비엔비에서 사용하는 엄격한 규칙
    "prettier", // 프리티어 연동
    "plugin:prettier/recommended", // 프리티어 연동
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "react", "react-hooks"], // 리액트 훅스, 리액트
  settings: {
    "import/resolver": {
      node: {
        paths: ["./src"], // 탐색할 디렉터리 추가
      },
    },
  },

  rules: {
    "import/no-unresolved": "off",
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 0, // react import해야하는 거 기능 끔
    "import/prefer-default-export": 0, //
    "react/function-component-definition": [
      // arrow function으로 훅스
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".js"],
      },
    ],
    "import/extensions": 0,
    camelcase: 0,
    "react/forbid-prop-types": 0,
    "prettier/prettier": 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-alert": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "no-else-return": 0,
    "@next/next/no-img-element": 0,
    "no-unneeded-ternary": 0,
    "react/jsx-props-no-spreading": 0,
    "no-nested-ternary": 0,
    "consistent-return": 0,
  },
};
