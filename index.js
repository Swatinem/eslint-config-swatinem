module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    "babel",
    "flowtype",
    "import",
  ],
  extends: [
    "xo-space/esnext",
    "xo-react/space",
    "plugin:flowtype/recommended",
    "plugin:import/recommended",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    // Possible Errors
    "comma-dangle": ["error", "always-multiline"],
    "no-constant-condition": "warn",

    // Best Practices
    "no-return-assign": ["error", "except-parens"],

    // Stylistic Issues
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs", {allowSingleLine: true}],
    "max-statements-per-line": ["warn", {max: 2}],
    "new-cap": ["warn", {newIsCap: true, capIsNew: false}],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multiple-empty-lines": ["error", {max: 2}],
    "no-nested-ternary": "warn",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    // this does not allow nice ternary expressions :-(
    "operator-linebreak": ["warn", "after", {overrides: {"?": "before", ":": "before"}}],
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double", "avoid-escape"],
    "spaced-comment": "warn",

    // ECMAScript 2015
    "arrow-body-style": "error",
    "generator-star-spacing": ["error", "after"],
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-reflect": "warn",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "yield-star-spacing": ["error", "after"],

    // Flow @ JSX Stuff
    "no-duplicate-imports": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-space-before-closing": ["error", "always"],
  },
};
