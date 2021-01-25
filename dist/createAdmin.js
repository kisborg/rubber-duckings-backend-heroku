'use strict';

var _register = require('./services/register.service');

_register.registerService.insertNewUser('admin', 'password', true).then(function () {
  return process.exit();
});