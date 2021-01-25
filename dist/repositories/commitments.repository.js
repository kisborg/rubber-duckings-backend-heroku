'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitmentsRepo = undefined;

var _connection = require('../data/connection');

var _challenge = require('./challenge.repository');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /* eslint-disable max-len */


var commitmentsRepo = exports.commitmentsRepo = {
  getCommitments: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var challengeQuery, challengeId, sqlQuery, queryData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _challenge.challengeRepo.getChallenge();

            case 2:
              challengeQuery = _context.sent;
              challengeId = challengeQuery.id;
              sqlQuery = 'SELECT * FROM commitments WHERE challenge_id = ?';
              _context.prev = 5;
              _context.next = 8;
              return _connection.db.query(sqlQuery, challengeId);

            case 8:
              queryData = _context.sent;
              return _context.abrupt('return', queryData.results);

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](5);
              throw {
                status: 500,
                message: _context.t0.sqlMessage
              };

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[5, 12]]);
    }));

    function getCommitments() {
      return _ref.apply(this, arguments);
    }

    return getCommitments;
  }(),
  addCommitment: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(commitment) {
      var userId, name, startDate, endDate, challengeQuery, challengeId, sqlQuery;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              userId = commitment.userId, name = commitment.name, startDate = commitment.startDate, endDate = commitment.endDate;
              _context2.next = 3;
              return _challenge.challengeRepo.getChallenge();

            case 3:
              challengeQuery = _context2.sent;
              challengeId = challengeQuery.id;
              sqlQuery = 'INSERT INTO commitments (name, start_date, end_date, user_id, challenge_id) VALUES (?,?,?,?,?)';
              _context2.prev = 6;
              _context2.next = 9;
              return _connection.db.query(sqlQuery, [name, startDate, endDate, userId, challengeId]);

            case 9:
              return _context2.abrupt('return', _context2.sent);

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](6);
              throw {
                status: 500,
                message: _context2.t0.sqlMessage
              };

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[6, 12]]);
    }));

    function addCommitment(_x) {
      return _ref2.apply(this, arguments);
    }

    return addCommitment;
  }(),
  getCommitment: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      var sqlQuery, queryData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sqlQuery = 'SELECT * FROM commitments WHERE id = ?';
              _context3.prev = 1;
              _context3.next = 4;
              return _connection.db.query(sqlQuery, id);

            case 4:
              queryData = _context3.sent;
              return _context3.abrupt('return', queryData.results[0]);

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](1);
              throw {
                status: 500,
                message: _context3.t0.sqlMessage
              };

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 8]]);
    }));

    function getCommitment(_x2) {
      return _ref3.apply(this, arguments);
    }

    return getCommitment;
  }(),
  removeCommitment: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, userId) {
      var sqlQuery;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              sqlQuery = 'DELETE FROM commitments WHERE id = ? AND user_id = ?';
              _context4.prev = 1;
              _context4.next = 4;
              return _connection.db.query(sqlQuery, [id, userId]);

            case 4:
              return _context4.abrupt('return', _context4.sent);

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4['catch'](1);
              throw {
                status: 500,
                message: _context4.t0.sqlMessage
              };

            case 10:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 7]]);
    }));

    function removeCommitment(_x3, _x4) {
      return _ref4.apply(this, arguments);
    }

    return removeCommitment;
  }(),
  removeCommitmentGroup: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(commitmentName, userId) {
      var sqlQuery;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              sqlQuery = 'DELETE FROM commitments WHERE name = ? AND user_id = ?';
              _context5.prev = 1;
              _context5.next = 4;
              return _connection.db.query(sqlQuery, [commitmentName, userId]);

            case 4:
              return _context5.abrupt('return', _context5.sent);

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5['catch'](1);
              throw {
                status: 500,
                message: _context5.t0.sqlMessage
              };

            case 10:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[1, 7]]);
    }));

    function removeCommitmentGroup(_x5, _x6) {
      return _ref5.apply(this, arguments);
    }

    return removeCommitmentGroup;
  }(),
  updateCommitment: function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(commitment) {
      var startDate, endDate, name, isDone, id, userId, sqlQuery;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              startDate = commitment.startDate, endDate = commitment.endDate, name = commitment.name, isDone = commitment.isDone, id = commitment.id, userId = commitment.userId;
              sqlQuery = 'UPDATE commitments SET name = ?, start_date = ?, end_date = ?, is_done = ? WHERE id = ? AND user_id = ?';
              _context6.prev = 2;
              _context6.next = 5;
              return _connection.db.query(sqlQuery, [name, new Date(startDate).toISOString().slice(0, 19).replace('T', ' '), new Date(endDate).toISOString().slice(0, 19).replace('T', ' '), isDone, id, userId]);

            case 5:
              return _context6.abrupt('return', _context6.sent);

            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6['catch'](2);
              throw {
                status: 500,
                message: _context6.t0.sqlMessage
              };

            case 11:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, this, [[2, 8]]);
    }));

    function updateCommitment(_x7) {
      return _ref6.apply(this, arguments);
    }

    return updateCommitment;
  }()
};