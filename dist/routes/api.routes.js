'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _index = require('../controllers/index');

var _authHandler = require('../middlewares/authHandler');

var _authHandler2 = _interopRequireDefault(_authHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use((0, _cors2.default)());
router.use(_express2.default.json());

router.get('/hello', _index.helloController.get);
router.get('/challenge', _index.challengeController.get);
router.post('/admin/challenge', _index.challengeController.post);
router.put('/admin/challenge', _index.challengeController.put);
router.post('/register', _index.registerController.post);
router.post('/login', _index.loginController.post);
router.get('/users', _index.usersController.get);

router.use(_authHandler2.default);

router.get('/commitments', _index.commitmentsController.getAll);
router.delete('/commitments', _index.commitmentsController.delete);
router.delete('/commitments/:commitmentName', _index.commitmentsController.deleteGroup);
router.post('/commitments', _index.commitmentsController.post);
router.put('/commitments', _index.commitmentsController.put);

exports.default = router;