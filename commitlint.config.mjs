const config = {
  extends: ['@commitlint/config-conventional'],
  // allow capitalized scopes like feat(StatusDot)
  rules: { 'scope-case': [0] },
};

export default config;
