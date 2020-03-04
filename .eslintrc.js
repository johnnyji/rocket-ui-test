module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["airbnb", "prettier","prettier/react"],
  "plugins": [
    "react",
  ],
  "rules": {
    // reduce noise for developers on windows and allow the git client to
    // enforce linebreak style
    "linebreak-style": 0,
    "spaced-comment": 0,
    "no-underscore-dangle": 0,
    "trailing-comma": 0,
    // disable prop-types
    "react/prop-types": 0,
    // set some sensible rules around using plusplus
    "no-plusplus": [
      "error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
  },
  /**
   * These overrides allow the project to have rulesets that are specific to
   * to certain files.
   */
  "overrides": [
    {
      "files": ["**.test.jsx", "**.test.js"],
      "env": {
        "jest": true
      },
      "plugins": [
        "jest"
      ],
    }
  ],
};
