'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.challengeService = undefined;

var _repositories = require('../repositories');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var challengeService = exports.challengeService = {
  getChallenge: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var challenge, title, description;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _repositories.challengeRepo.getChallenge();

            case 2:
              challenge = _context.sent;

              if (challenge) {
                _context.next = 5;
                break;
              }

              throw {
                status: 404,
                message: 'No challenge available'
              };

            case 5:
              title = challenge.title, description = challenge.description;
              return _context.abrupt('return', {
                title: title,
                description: description,
                startDate: challenge.start_date,
                endDate: challenge.end_date,
                minCommit: challenge.min_commitments
              });

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    function getChallenge() {
      return _ref.apply(this, arguments);
    }

    return getChallenge;
  }(),

  postChallenge: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(challengeDetails) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _repositories.challengeRepo.postChallenge(challengeDetails);

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function postChallenge(_x) {
      return _ref2.apply(this, arguments);
    }

    return postChallenge;
  }(),
  putChallenge: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(challengeDetails) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _repositories.challengeRepo.putChallenge(challengeDetails);

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function putChallenge(_x2) {
      return _ref3.apply(this, arguments);
    }

    return putChallenge;
  }()
};