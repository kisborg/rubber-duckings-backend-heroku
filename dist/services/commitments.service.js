'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitmentsService = undefined;

var _repositories = require('../repositories');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var commitmentsService = exports.commitmentsService = {
  getCommitments: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var commitments, formattedCommitments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _repositories.commitmentsRepo.getCommitments();

            case 2:
              commitments = _context.sent;
              formattedCommitments = commitments.map(function (commitment) {
                return {
                  id: commitment.id,
                  name: commitment.name,
                  userId: commitment.user_id,
                  challengeId: commitment.challenge_id,
                  startDate: commitment.start_date,
                  endDate: commitment.end_date,
                  isDone: Boolean(commitment.is_done)
                };
              });
              return _context.abrupt('return', formattedCommitments);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getCommitments() {
      return _ref.apply(this, arguments);
    }

    return getCommitments;
  }(),
  addCommitment: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(commitment) {
      var queryData, newCommitment;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _repositories.commitmentsRepo.addCommitment(commitment);

            case 2:
              queryData = _context2.sent;
              _context2.next = 5;
              return _repositories.commitmentsRepo.getCommitment(queryData.results.insertId);

            case 5:
              newCommitment = _context2.sent;
              return _context2.abrupt('return', {
                id: newCommitment.id,
                name: newCommitment.name,
                userId: newCommitment.user_id,
                challengeId: newCommitment.challenge_id,
                startDate: newCommitment.start_date,
                endDate: newCommitment.end_date,
                isDone: Boolean(newCommitment.is_done)
              });

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function addCommitment(_x) {
      return _ref2.apply(this, arguments);
    }

    return addCommitment;
  }(),
  removeCommitment: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, userId) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _repositories.commitmentsRepo.removeCommitment(id, userId);

            case 2:
              return _context3.abrupt('return', {
                message: 'Commitment removed'
              });

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function removeCommitment(_x2, _x3) {
      return _ref3.apply(this, arguments);
    }

    return removeCommitment;
  }(),
  removeCommitmentGroup: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(commitmentName, userId) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _repositories.commitmentsRepo.removeCommitmentGroup(commitmentName, userId);

            case 2:
              return _context4.abrupt('return', {
                message: 'Commitments removed'
              });

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function removeCommitmentGroup(_x4, _x5) {
      return _ref4.apply(this, arguments);
    }

    return removeCommitmentGroup;
  }(),
  updateCommitment: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(commitment) {
      var updatedCommitment;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _repositories.commitmentsRepo.updateCommitment(commitment);

            case 2:
              _context5.next = 4;
              return _repositories.commitmentsRepo.getCommitment(commitment.id);

            case 4:
              updatedCommitment = _context5.sent;
              return _context5.abrupt('return', {
                id: updatedCommitment.id,
                name: updatedCommitment.name,
                userId: updatedCommitment.user_id,
                challengeId: updatedCommitment.challenge_id,
                startDate: updatedCommitment.start_date,
                endDate: updatedCommitment.end_date,
                isDone: Boolean(updatedCommitment.is_done)
              });

            case 6:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function updateCommitment(_x6) {
      return _ref5.apply(this, arguments);
    }

    return updateCommitment;
  }()
};