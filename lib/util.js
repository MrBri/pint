'use strict';

var path = require('path');

var getPathRelativeToPint = function (newPath) {
  return path.join(__dirname, '..', newPath);
};

var getPathRelativeToTarget = function (newPath) {
  return path.join(process.cwd(), newPath);
};

var getConcurrencyLimit = function () {
  return Math.max(require('os').cpus().length, 2);
};

module.exports = {
  getPathRelativeToPint: getPathRelativeToPint,
  getPathRelativeToTarget: getPathRelativeToTarget,
  getConcurrencyLimit: getConcurrencyLimit
};