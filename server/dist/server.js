'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();

server.use(_bodyParser2.default.urlencoded({ extended: true }));
server.use(_bodyParser2.default.json());

var port = process.env.PORT || 8000;

var router = _express2.default.Router();

router.get('/', function (req, res) {
  res.json({ message: 'Server Response OK' });
});

server.use('/api', router);

server.listen(port);