module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest-set"],
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "import/no-unresolved": 0,
    "import/named": 0,
    "import/order": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "import/prefer-default-export": 0,
    "no-plusplus": 0,
    "no-continue": 0,
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: true,
          object: true
        },
        AssignmentExpression: {
          array: false,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      2,
      {
        allowExpressions: true
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/__mocks__/**.js",
        "**/__mocks__/**.ts",
        "**/__mocks__/**.tsx"
      ],
      rules: {
        "global-require": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "no-undef": 0,
        "jest-set/no-undef": "error",
        "import/no-extraneous-dependencies": 0
      },
      globals: {
        set: true
      },
      env: {
        jest: true
      }
    }
  ]
};
