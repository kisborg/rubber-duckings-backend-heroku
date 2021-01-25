'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw { message: 'No token provided' };
    }
    var token = req.headers.authorization.match(/(?<=Bearer\s).*/)[0];
    var decoded = _jsonwebtoken2.default.verify(token, _config2.default.secret, { algorithms: ['HS256'] });
    req.user = decoded;

    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      err.message = 'Invalid token';
    }
    err.status = 401;
    next(err);
  }
};