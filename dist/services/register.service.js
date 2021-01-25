'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerService = undefined;

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _repositories = require('../repositories');

var _login = require('./login.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var registerService = exports.registerService = {
  validateUsernameAndPassword: function validateUsernameAndPassword(username, password, email) {
    if (!username || !password || !email) {
      throw {
        status: 400,
        message: 'Missing username, email and/or password'
      };
    }
    if (password.length < 8) {
      throw {
        status: 400,
        message: 'Password must be at least 8 characters'
      };
    }
  },
  hashUserPassword: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(password) {
      var saltRounds, hashedPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              saltRounds = 10;
              _context.next = 3;
              return _bcrypt2.default.hash(password, saltRounds);

            case 3:
              hashedPassword = _context.sent;
              return _context.abrupt('return', hashedPassword);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function hashUserPassword(_x) {
      return _ref.apply(this, arguments);
    }

    return hashUserPassword;
  }(),
  insertNewUser: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username, password, email, admin) {
      var _hashedPassword, hashedPassword, userData, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!admin) {
                _context2.next = 7;
                break;
              }

              _context2.next = 3;
              return this.hashUserPassword(password);

            case 3:
              _hashedPassword = _context2.sent;
              _context2.next = 6;
              return _repositories.usersRepo.insertAdmin(username, _hashedPassword, email);

            case 6:
              return _context2.abrupt('return', _context2.sent);

            case 7:
              this.validateUsernameAndPassword(username, password, email);
              _context2.next = 10;
              return this.hashUserPassword(password);

            case 10:
              hashedPassword = _context2.sent;
              _context2.next = 13;
              return _repositories.usersRepo.insertUser(username, hashedPassword, email);

            case 13:
              userData = _context2.sent;
              _context2.next = 16;
              return _login.loginService.getToken(userData.results.insertId);

            case 16:
              token = _context2.sent;
              return _context2.abrupt('return', {
                token: token,
                userId: userData.results.insertId
              });

            case 18:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function insertNewUser(_x2, _x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    }

    return insertNewUser;
  }()
};