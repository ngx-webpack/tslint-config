'use strict';

let path = require('path');

module.exports = {
  "extends": "tslint:recommended",
  "rulesDirectory": [
    path.join(process.cwd(), 'node_modules', 'codelyzer')
  ],
  "rules": {
    "member-access": false,
    "member-ordering": [
      true,
      "public-before-private",
      "static-before-instance",
      "variables-before-functions"
    ],
    "no-any": false,
    "no-inferrable-types": false,
    "no-internal-module": true,
    "no-var-requires": false,
    "typedef": false,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "space",
        "index-signature": "space",
        "parameter": "space",
        "property-declaration": "space",
        "variable-declaration": "space"
      }
    ],

    "ban": false,
    "curly": false,
    "forin": true,
    "label-position": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": false,
    "no-eval": true,
    "no-null-keyword": false,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-switch-case-fall-through": true,
    "no-unused-expression": true,
    "no-var-keyword": true,
    "radix": true,
    "switch-default": true,
    "triple-equals": [
      true,
      "allow-null-check"
    ],

    "eofline": true,
    "indent": [
      true,
      "spaces"
    ],
    "max-line-length": [
      true,
      120
    ],
    "no-require-imports": false,
    "no-trailing-whitespace": true,
    "object-literal-sort-keys": false,
    "trailing-comma": [
      true,
      {
        "multiline": false,
        "singleline": "never"
      }
    ],

    "align": false,
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "interface-name": false,
    "jsdoc-format": true,
    "no-consecutive-blank-lines": false,
    "no-parameter-properties": false,
    "one-line": [
      true,
      "check-open-brace",
      "check-catch",
      "check-else",
      "check-finally",
      "check-whitespace"
    ],
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "semicolon": [true, "always"],
    "variable-name": [
      true,
      "check-format",
      "allow-leading-underscore",
      "ban-keywords"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type"
    ],
    "import-destructuring-spacing": true,
    "ordered-imports": false
  }
};
