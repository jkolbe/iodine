require('dotenv').config();
const { EnvironmentPlugin } = require('webpack');

module.exports = {
  plugins: [
    new EnvironmentPlugin([
      'CNT_SPACE',
      'CD_TOKEN',
      'CP_TOKEN',
    ]),
  ],
};