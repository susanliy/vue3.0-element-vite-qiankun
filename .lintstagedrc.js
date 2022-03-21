module.exports = {
  'src/*.{js,jsx,vue,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  'src/*.vue': ['eslint --fix', 'prettier --write', 'git add'],
};
