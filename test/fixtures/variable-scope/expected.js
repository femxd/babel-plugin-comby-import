'use strict';

var _message = require('antd/lib/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _message2.default)('xxx');

function App() {
  var message = 'xxx';
  return React.createElement(
    'div',
    null,
    message
  );
}
