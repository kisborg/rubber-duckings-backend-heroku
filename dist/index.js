'use strict';

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 3000;

_app2.default.listen(PORT, function () {
  _logger2.default.info('App is listening on ' + PORT);
});