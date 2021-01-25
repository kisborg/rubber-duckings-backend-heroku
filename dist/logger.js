'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var options = {
  file: {
    level: 'info',
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: true
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    format: _winston.format.combine(_winston.format.colorize(), _winston.format.simple())
  }
};

var logger = (0, _winston.createLogger)({
  exitOnError: false,
  handleRejections: true,
  transports: [Object.assign(new _winston.transports.File({
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: true,
    filename: 'logs/error.log',
    level: 'error'
  }), { handleRejections: true }), new _winston.transports.File({
    level: 'info',
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    json: true,
    filename: 'logs/app.log'
  })]
});

/* istanbul ignore next */
logger.stream = {
  write: function write(message) {
    return logger.info(message);
  }
};

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  logger.add(Object.assign(new _winston.transports.Console(options.console), {
    handleRejections: true
  }));
}

exports.default = logger;