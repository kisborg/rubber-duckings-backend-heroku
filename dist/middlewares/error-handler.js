'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
exports.default = function (err, req, res, next) {
  _logger2.default.error((err.status || 500) + ' - ' + err.message + ' - ' + req.originalUrl + ' - ' + req.method + ' - ' + req.ip);
  res.status(err.status || 500);
  res.json({
    message: err.status === 500 || !err.status ? 'Unknown error happened' : err.message
  });
};