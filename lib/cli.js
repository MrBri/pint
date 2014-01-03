'use strict';

var program = require('commander'),
  pint = require('./pint.js'),
  packageInfo = require('../package.json');

module.exports = function (argv) {
  program
    .version(packageInfo.version)
    .option('-v, --verbose', 'Extra verbose output')
    .option('-f, --force', 'Force execution despite warnings');

  program
    .command('*')
    .description('run Pint')
    .action(function () {
      var runners = [];
      for (var i = 0; i < arguments.length - 1; i++) {
        runners.push(arguments[i]);
      }

      pint.drink({
        verbose: program.verbose || false,
        force: program.force || false
      }, runners);
    });

  program.parse(argv);
};