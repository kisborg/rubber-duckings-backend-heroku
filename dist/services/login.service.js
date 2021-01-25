'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginService = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _repositories = require('../repositories');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var loginService = exports.loginService = {
  validateUser: function validateUser(username, password) {
    if (!password) {
      return !username ? { message: 'All fields required', status: 400 } : { message: 'Password is required', status: 400 };
    }
    if (!username) {
      return { message: 'Username is required', status: 400 };
    }
    return false;
  },
  getToken: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
      var token;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = _jsonwebtoken2.default.sign({ id: id }, _config2.default.secret || 'somesecret');
              return _context.abrupt('return', token);

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getToken(_x) {
      return _ref.apply(this, arguments);
    }

    return getToken;
  }(),
  loginUser: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username, password) {
      var inputError, userData, token;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              inputError = this.validateUser(username, password);

              if (!inputError) {
                _context2.next = 3;
                break;
              }

              throw inputError;

            case 3:
              _context2.next = 5;
              return _repositories.usersRepo.getUser(username);

            case 5:
              userData = _context2.sent;

              if (!(userData.results.length === 0 || !_bcrypt2.default.compareSync(password, userData.results[0].password))) {
                _context2.next = 8;
                break;
              }

              throw { message: 'Username or password is incorrect', status: 400 };

            case 8:
              _context2.next = 10;
              return this.getToken(userData.results[0].id);

            case 10:
              token = _context2.sent;
              return _context2.abrupt('return', {
                token: token,
                userId: userData.results[0].id,
                isAdmin: userData.results[0].is_admin,
                isValidated: userData.results[0].is_validated
              });

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loginUser(_x2, _x3) {
      return _ref2.apply(this, arguments);
    }

    return loginUser;
  }()
};