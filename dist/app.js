'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _errorHandler = require('./middlewares/error-handler');

var _errorHandler2 = _interopRequireDefault(_errorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var buildPath = _path2.default.join(__dirname, '..', '..', 'build');
app.use(_express2.default.static(buildPath));

app.use((0, _morgan2.default)('combined', { stream: _logger2.default.stream }));

app.use('/api', _routes.api);
app.use('/system', _routes.system);

app.use(_errorHandler2.default);
exports.default = app;