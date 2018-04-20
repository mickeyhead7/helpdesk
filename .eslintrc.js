const aliases = require('./aliases');
const aliasesFormatted = Object.entries(aliases);

module.exports = {
  "env": {
    "browser": true,
    "jest/globals": true,
    "node": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": ["jest"],
  "rules": {
    "import/prefer-default-export": false,
    "import/no-extraneous-dependencies": false,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
  "settings": {
    "import/resolver": {
      "alias": aliasesFormatted
    }
  }
};
