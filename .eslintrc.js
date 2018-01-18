const baseRules = {
  'no-plusplus': 'off',
  'default-case': 'off',
  'consistent-return': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': ['error', 'never'],
  'one-var': ['error', {
    initialized: 'never'
  }],
  'one-var-declaration-per-line': ['error', 'initializations'],
  'linebreak-style': 0
};

const reactRules = {
  "react/require-default-props": "off",
  "react/jsx-filename-extension": ["error", {
    extensions: [".js", ".jsx"]
  }],
  "react/jsx-tag-spacing": ["error", {
    closingSlash: "never",
    beforeSelfClosing: "allow",
    afterOpening: "never"
  }],
  "jsx-a11y/href-no-hash": "off",
  "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
};

module.exports = {
  "root": true,
  "extends": ["airbnb"],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "modules": true,
      "jsx": true
    }
  },
  "rules": Object.assign({},
    baseRules,
    reactRules
  )
};
