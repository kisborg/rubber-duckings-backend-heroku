'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.challengeRepo = undefined;

var _connection = require('../data/connection');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var challengeRepo = exports.challengeRepo = {
  getChallenge: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var sqlQuery, challengeQueryData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              sqlQuery = 'SELECT * FROM challenge ORDER BY id DESC LIMIT 1';
              _context.next = 4;
              return _connection.db.query(sqlQuery);

            case 4:
              challengeQueryData = _context.sent;
              return _context.abrupt('return', challengeQueryData.results[0]);

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);
              throw {
                status: 500,
                message: _context.t0.sqlMessage
              };

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 8]]);
    }));

    function getChallenge() {
      return _ref.apply(this, arguments);
    }

    return getChallenge;
  }(),
  postChallenge: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(challengeDetails) {
      var challengeName, challengeDescription, startDate, endDate, minCommit, sqlQuery, responseSqlQuery, challengeQueryData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              challengeName = challengeDetails.challengeName, challengeDescription = challengeDetails.challengeDescription, startDate = challengeDetails.startDate, endDate = challengeDetails.endDate, minCommit = challengeDetails.minCommit;
              _context2.prev = 1;
              sqlQuery = 'INSERT INTO challenge (title, description, start_date, end_date, min_commitments) VALUES(?, ?, ?, ?, ?)';
              _context2.next = 5;
              return _connection.db.query(sqlQuery, [challengeName, challengeDescription, startDate, endDate, minCommit]);

            case 5:
              responseSqlQuery = 'SELECT * FROM challenge ORDER BY id DESC LIMIT 1';
              _context2.next = 8;
              return _connection.db.query(responseSqlQuery);

            case 8:
              challengeQueryData = _context2.sent;
              return _context2.abrupt('return', challengeQueryData.results[0]);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](1);
              throw {
                status: 500,
                message: _context2.t0.sqlMessage
              };

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 12]]);
    }));

    function postChallenge(_x) {
      return _ref2.apply(this, arguments);
    }

    return postChallenge;
  }(),
  putChallenge: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(challengeDetails) {
      var challengeName, challengeDescription, startDate, endDate, minCommit, sqlQuery, responseSqlQuery, challengeQueryData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              challengeName = challengeDetails.challengeName, challengeDescription = challengeDetails.challengeDescription, startDate = challengeDetails.startDate, endDate = challengeDetails.endDate, minCommit = challengeDetails.minCommit;
              _context3.prev = 1;
              sqlQuery = 'UPDATE challenge SET title=?, description=?, start_date=?, end_date=?, min_commitments=?';
              _context3.next = 5;
              return _connection.db.query(sqlQuery, [challengeName, challengeDescription, startDate, endDate, minCommit]);

            case 5:
              responseSqlQuery = 'SELECT * FROM challenge ORDER BY id DESC LIMIT 1';
              _context3.next = 8;
              return _connection.db.query(responseSqlQuery);

            case 8:
              challengeQueryData = _context3.sent;
              return _context3.abrupt('return', challengeQueryData.results[0]);

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3['catch'](1);
              throw {
                status: 500,
                message: _context3.t0.sqlMessage
              };

            case 15:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 12]]);
    }));

    function putChallenge(_x2) {
      return _ref3.apply(this, arguments);
    }

    return putChallenge;
  }()
};