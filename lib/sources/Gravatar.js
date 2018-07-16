'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GravatarSource = function GravatarSource(props) {
    (0, _classCallCheck3.default)(this, GravatarSource);

    _initialiseProps.call(this);

    this.props = props;
};

var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.props = null;

    this.isCompatible = function () {
        return !!_this.props.email || !!_this.props.md5Email;
    };

    this.get = function (setState) {
        var props = _this.props;

        var email = props.md5Email || (0, _md2.default)(props.email);
        var size = props.size;
       // var url = 'https://secure.gravatar.com/avatar/' + email + '?s=' + size + '&d=404';
       // var setUrl = 'https://secure.gravatar.com/avatar/' + email + '?s=' + size * 2 + '&d=404';
        
        var url = 'https://secure.gravatar.com/avatar/' + email + '?s=' + size + '&d=404';
        var setUrl = 'https://secure.gravatar.com/avatar/' + email + '?s=' + size * 2 + '&d=404';

        setState({ src: url, srcSet: setUrl });
    };
};

exports.default = GravatarSource;
module.exports = exports['default'];
