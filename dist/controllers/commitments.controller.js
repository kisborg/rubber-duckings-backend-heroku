'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commitmentsController = undefined;

var _services = require('../services');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var commitmentsController = exports.commitmentsController = {
  getAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var commitments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services.commitmentsService.getCommitments();

            case 2:
              commitments = _context.sent;

              try {
                res.status(200).json(commitments);
              } catch (err) {
                next(err);
              }

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getAll(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return getAll;
  }(),
  post: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var _req$body, name, startDate, endDate, userId, newCommitment;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$body = req.body, name = _req$body.name, startDate = _req$body.startDate, endDate = _req$body.endDate;

              console.log(startDate, endDate);
              userId = req.user.id;
              _context2.prev = 3;
              _context2.next = 6;
              return _services.commitmentsService.addCommitment({
                name: name, startDate: startDate, endDate: endDate, userId: userId
              });

            case 6:
              newCommitment = _context2.sent;

              res.status(200).json(newCommitment);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](3);

              next(_context2.t0);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this, [[3, 10]]);
    }));

    function post(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    }

    return post;
  }(),
  delete: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var id, userId, responseObj;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.body.id;
              userId = req.user.id;
              _context3.prev = 2;
              _context3.next = 5;
              return _services.commitmentsService.removeCommitment(id, userId);

            case 5:
              responseObj = _context3.sent;

              res.status(200).json(responseObj);
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3['catch'](2);

              next(_context3.t0);

            case 12:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this, [[2, 9]]);
    }));

    function _delete(_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    }

    return _delete;
  }(),
  deleteGroup: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
      var commitmentName, userId, responseObj;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              commitmentName = req.params.commitmentName;
              userId = req.user.id;
              _context4.prev = 2;
              _context4.next = 5;
              return _services.commitmentsService.removeCommitmentGroup(commitmentName, userId);

            case 5:
              responseObj = _context4.sent;

              res.status(200).json(responseObj);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](2);

              next(_context4.t0);

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, this, [[2, 9]]);
    }));

    function deleteGroup(_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    }

    return deleteGroup;
  }(),
  put: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
      var _req$body2, name, startDate, id, endDate, isDone, userId, updatedCommitment;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _req$body2 = req.body, name = _req$body2.name, startDate = _req$body2.startDate, id = _req$body2.id, endDate = _req$body2.endDate, isDone = _req$body2.isDone;
              userId = req.user.id;
              _context5.prev = 2;
              _context5.next = 5;
              return _services.commitmentsService.updateCommitment({
                name: name, startDate: startDate, endDate: endDate, id: id, isDone: isDone, userId: userId
              });

            case 5:
              updatedCommitment = _context5.sent;

              res.status(200).json(updatedCommitment);
              _context5.next = 12;
              break;

            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5['catch'](2);

              next(_context5.t0);

            case 12:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, this, [[2, 9]]);
    }));

    function put(_x13, _x14, _x15) {
      return _ref5.apply(this, arguments);
    }

    return put;
  }()
};