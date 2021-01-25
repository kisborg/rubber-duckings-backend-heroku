'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerController = undefined;

var _services = require('../services');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var registerController = exports.registerController = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var _req$body, username, password, email, token;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, username = _req$body.username, password = _req$body.password, email = _req$body.email;
              _context.prev = 1;
              _context.next = 4;
              return _services.registerService.insertNewUser(username, password, email);

            case 4:
              token = _context.sent;

              res.status(200).json(token);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              next(_context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 8]]);
    }));

    function post(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return post;
  }()
};