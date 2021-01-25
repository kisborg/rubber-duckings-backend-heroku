'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.system = exports.api = undefined;

var _api = require('./api.routes');

var _api2 = _interopRequireDefault(_api);

var _system = require('./system.routes');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = exports.api = _api2.default;
var system = exports.system = _system2.default;