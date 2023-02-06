const { merge } = require('webpack-merge');
const common = require('./webpack.config.base.js');

module.exports = merge(common, {
    mode: 'production',
});