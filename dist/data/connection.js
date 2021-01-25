'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = _mysql2.default.createPool({
  connectionLimit: 2,
  host: _config2.default.mysql.host,
  user: _config2.default.mysql.user,
  password: _config2.default.mysql.password,
  database: _config2.default.mysql.database
});

var db = exports.db = {
  query: function query(_query, values) {
    return new Promise(function (resolve, reject) {
      pool.query(_query, values, function (err, results, fields) {
        if (err) {
          reject(err);
          return;
        }
        resolve({ results: results, fields: fields });
      });
    });
  },
  connection: function connection() {
    return new Promise(function (resolve, reject) {
      pool.getConnection(function (error, connection) {
        if (error) {
          reject(error);
          return;
        }
        var query = function query(sqlQuery, values) {
          return new Promise(function (resolveQuery, rejectQuery) {
            connection.query(sqlQuery, values, function (errorQuery, results, fields) {
              if (errorQuery) {
                rejectQuery(errorQuery);
              }
              resolveQuery({ results: results, fields: fields });
            });
          });
        };
        var release = function release() {
          return new Promise(function (resolveRelease, rejectRelease) {
            if (error) {
              rejectRelease(error);
            }
            resolveRelease(connection.release());
          });
        };
        var commit = function commit() {
          return new Promise(function (resolveCommit, rejectCommit) {
            if (error) {
              rejectCommit(error);
            }
            resolveCommit(connection.commit());
          });
        };
        var rollback = function rollback() {
          return new Promise(function (resolveRollback, rejectRollback) {
            if (error) {
              rejectRollback(error);
            }
            resolveRollback(connection.rollback());
          });
        };
        resolve({
          query: query, release: release, commit: commit, rollback: rollback
        });
      });
    });
  }
};