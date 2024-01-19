module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
    "prettier",
  ],

  parser: "@typescript-eslint/parser",
  root: true,
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "@typescript-eslint", "import"],
  rules: {
    indent: ["error", 2],
    useTabs: false,
    "prettier/prettier": ["error", { endOfLine: "off" }],
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".svg"],
      },
    },
  },
};
