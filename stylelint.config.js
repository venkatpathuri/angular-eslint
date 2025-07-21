// stylelint.config.js

export default {
  extends: "stylelint-config-standard-scss",
  plugins: ["stylelint-scss"],
  rules: {
    "no-empty-source": null,
    "no-descending-specificity": null,
    "selector-max-id": 0,
    "selector-max-class": 3,
    "max-nesting-depth": 3,
    "block-no-empty": true,
    "no-duplicate-selectors": true,
    "property-no-vendor-prefix": true,
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "declaration-empty-line-before": [
      "always",
      {
        except: ["after-declaration", "first-nested"],
        ignore: ["after-comment", "inside-single-line-block"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"],
      },
    ],
    "selector-pseudo-element-disallowed-list": [
      "ng-deep",
      {
        severity: "error",
      },
    ],
    "declaration-block-no-duplicate-properties": true,
    "property-disallowed-list": [
      "flex",
      {
        severity: "warning",
        message:
          "Please specify which flex property you want to override. Hint: you might want to use flex utility classes from Bootstrap.",
      },
    ],
    "declaration-no-important": [
      true,
      {
        severity: "warning",
        message:
          "Make sure this is absolutely necessary. There are valid use cases for `!important`, but usually they indicate a problem with css priority.",
      },
    ],
    "scss/dollar-variable-empty-line-before": null,
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "no-invalid-position-at-import-rule": null,
  },
};
