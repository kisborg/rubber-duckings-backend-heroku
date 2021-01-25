'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.challengeController = undefined;

var _services = require('../services');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var challengeController = exports.challengeController = {
  get: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var challengeData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services.challengeService.getChallenge();

            case 3:
              challengeData = _context.sent;

              res.status(200).json(challengeData);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              next(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    }));

    function get(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return get;
  }(),
  post: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var challengeDetails, challengeData;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              challengeDetails = req.body.challengeDetails;
              _context2.prev = 1;
              _context2.next = 4;
              return _services.challengeService.postChallenge(challengeDetails);

            case 4:
              challengeData = _context2.sent;

              res.status(200).json(challengeData);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              next(_context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 8]]);
    }));

    function post(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return post;
  }(),
  put: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var challengeDetails, challengeData;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              challengeDetails = req.body.challengeDetails;
              _context3.prev = 1;
              _context3.next = 4;
              return _services.challengeService.putChallenge(challengeDetails);

            case 4:
              challengeData = _context3.sent;

              res.status(200).json(challengeData);
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3['catch'](1);

              next(_context3.t0);

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 8]]);
    }));

    function put(_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    }

    return put;
  }()
};