import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "coverage/**",
      ".npm-cache*/**",
      ".corepack/**",
      ".pnpm-store/**",
      "_tmp_*",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    settings: {
      react: {
        defaultVersion: "19.2.6",
        version: "19.2.6",
      },
    },
    rules: {
      "react/display-name": "off",
    },
  },
];

export default eslintConfig;
