"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  secret: process.env.SECRET
};