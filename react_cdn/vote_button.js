'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var VoteButton = function (_React$Component) {
    _inherits(VoteButton, _React$Component);

    function VoteButton(props) {
        _classCallCheck(this, VoteButton);

        var _this = _possibleConstructorReturn(this, (VoteButton.__proto__ || Object.getPrototypeOf(VoteButton)).call(this, props));

        _this.state = { voted: false };
        return _this;
    }

    _createClass(VoteButton, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.state.voted) {
                return React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.setState({ voted: false });
                        } },
                    'voted'
                );
            } else {
                return React.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.setState({ voted: true });
                        } },
                    'vote'
                );
            }
        }
    }]);

    return VoteButton;
}(React.Component);

document.querySelectorAll('.vote_button_container').forEach(function (domContainer) {
    ReactDOM.render(e(VoteButton), domContainer);
});