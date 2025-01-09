module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  rules : {
   "@typescript-eslint/no-empty-object-type": "off",
   "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }]
  }
}