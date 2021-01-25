'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersRepo = undefined;

var _connection = require('../data/connection');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var usersRepo = exports.usersRepo = {
  insertUser: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(username, password, email) {
      var sqlQuery, errorObj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              sqlQuery = 'INSERT INTO users(username, password, email) VALUES(?,?,?);';
              _context.prev = 1;
              _context.next = 4;
              return _connection.db.query(sqlQuery, [username, password, email]);

            case 4:
              return _context.abrupt('return', _context.sent);

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](1);
              errorObj = /Duplicate entry/.test(_context.t0.sqlMessage) ? { status: 401, message: 'User already exists' } : { status: 500, message: _context.t0.sqlMessage };
              throw errorObj;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 7]]);
    }));

    function insertUser(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return insertUser;
  }(),
  insertAdmin: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username, password, email) {
      var sqlQuery, errorObj;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              sqlQuery = 'INSERT INTO users(username, password, email, isAdmin) VALUES(?,?,?, 1);';
              _context2.prev = 1;
              _context2.next = 4;
              return _connection.db.query(sqlQuery, [username, password, email]);

            case 4:
              return _context2.abrupt('return', _context2.sent);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](1);
              errorObj = /Duplicate entry/.test(_context2.t0.sqlMessage) ? { status: 401, message: 'User already exists' } : { status: 500, message: _context2.t0.sqlMessage };
              throw errorObj;

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 7]]);
    }));

    function insertAdmin(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return insertAdmin;
  }(),
  getUser: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(username) {
      var sqlQuery, queryData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sqlQuery = 'SELECT * FROM users WHERE username = ?';
              _context3.prev = 1;
              _context3.next = 4;
              return _connection.db.query(sqlQuery, [username]);

            case 4:
              queryData = _context3.sent;
              return _context3.abrupt('return', queryData);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](1);
              throw { status: 500, message: _context3.t0.sqlMessage };

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 8]]);
    }));

    function getUser(_x7) {
      return _ref3.apply(this, arguments);
    }

    return getUser;
  }(),
  getUsers: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var sqlQuery, queryData;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              sqlQuery = 'SELECT * FROM users';
              _context4.prev = 1;
              _context4.next = 4;
              return _connection.db.query(sqlQuery);

            case 4:
              queryData = _context4.sent;
              return _context4.abrupt('return', queryData.results);

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4['catch'](1);
              throw { status: 500, message: _context4.t0.sqlMessage };

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 8]]);
    }));

    function getUsers() {
      return _ref4.apply(this, arguments);
    }

    return getUsers;
  }()
};