"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var removeElementByIds = function removeElementByIds(ids) {
  ids.forEach(function (id) {
    var element = document.getElementById(id);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  });
};

var MessengerCustomerChat = function (_Component) {
  _inherits(MessengerCustomerChat, _Component);

  function MessengerCustomerChat() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MessengerCustomerChat);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MessengerCustomerChat.__proto__ || Object.getPrototypeOf(MessengerCustomerChat)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fbLoaded: false,
      shouldShowDialog: undefined
    }, _this.componentDidUpdate = function (prevProps) {
      if (prevProps.pageId !== _this.props.pageId || prevProps.appId !== _this.props.appId || prevProps.shouldShowDialog !== _this.props.shouldShowDialog || prevProps.htmlRef !== _this.props.htmlRef || prevProps.minimized !== _this.props.minimized || prevProps.themeColor !== _this.props.themeColor || prevProps.loggedInGreeting !== _this.props.loggedInGreeting || prevProps.loggedOutGreeting !== _this.props.loggedOutGreeting || prevProps.greetingDialogDisplay !== _this.props.greetingDialogDisplay || prevProps.greetingDialogDelay !== _this.props.greetingDialogDelay || prevProps.autoLogAppEvents !== _this.props.autoLogAppEvents || prevProps.xfbml !== _this.props.xfbml || prevProps.version !== _this.props.version || prevProps.language !== _this.props.language) {
        _this.setFbAsyncInit();
        _this.reloadSDKAsynchronously();
      }
    }, _this.setFbAsyncInit = function () {
      var _this$props = _this.props,
          appId = _this$props.appId,
          autoLogAppEvents = _this$props.autoLogAppEvents,
          xfbml = _this$props.xfbml,
          version = _this$props.version;


      window.fbAsyncInit = function () {
        window.FB.init({
          appId: appId,
          autoLogAppEvents: autoLogAppEvents,
          xfbml: xfbml,
          version: "v" + version
        });

        _this.setState({ fbLoaded: true });
      };
    }, _this.loadSDKAsynchronously = function () {
      var language = _this.props.language;
      /* eslint-disable */

      (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/" + language + "/sdk/xfbml.customerchat.js";
        js.defer = true;
        js.async = true;
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
      /* eslint-enable */
    }, _this.removeFacebookSDK = function () {
      removeElementByIds(["facebook-jssdk", "fb-root"]);
      delete window.FB;
    }, _this.reloadSDKAsynchronously = function () {
      _this.removeFacebookSDK();
      _this.loadSDKAsynchronously();
    }, _this.controlPlugin = function () {
      var shouldShowDialog = _this.props.shouldShowDialog;


      if (shouldShowDialog) {
        window.FB.CustomerChat.showDialog();
      } else {
        window.FB.CustomerChat.hideDialog();
      }
    }, _this.subscribeEvents = function () {
      var _this$props2 = _this.props,
          onCustomerChatDialogShow = _this$props2.onCustomerChatDialogShow,
          onCustomerChatDialogHide = _this$props2.onCustomerChatDialogHide;


      if (onCustomerChatDialogShow) {
        window.FB.Event.subscribe("customerchat.dialogShow", onCustomerChatDialogShow);
      }

      if (onCustomerChatDialogHide) {
        window.FB.Event.subscribe("customerchat.dialogHide", onCustomerChatDialogHide);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MessengerCustomerChat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setFbAsyncInit();
      this.reloadSDKAsynchronously();
    }
  }, {
    key: "createMarkup",
    value: function createMarkup() {
      var _props = this.props,
          pageId = _props.pageId,
          htmlRef = _props.htmlRef,
          minimized = _props.minimized,
          themeColor = _props.themeColor,
          loggedInGreeting = _props.loggedInGreeting,
          loggedOutGreeting = _props.loggedOutGreeting,
          greetingDialogDisplay = _props.greetingDialogDisplay,
          greetingDialogDelay = _props.greetingDialogDelay;


      var refAttribute = htmlRef !== undefined ? "ref=\"" + htmlRef + "\"" : "";
      var minimizedAttribute = minimized !== undefined ? "minimized=\"" + minimized + "\"" : "";
      var themeColorAttribute = themeColor !== undefined ? "theme_color=\"" + themeColor + "\"" : "";
      var loggedInGreetingAttribute = loggedInGreeting !== undefined ? "logged_in_greeting=\"" + loggedInGreeting + "\"" : "";
      var loggedOutGreetingAttribute = loggedOutGreeting !== undefined ? "logged_out_greeting=\"" + loggedOutGreeting + "\"" : "";
      var greetingDialogDisplayAttribute = greetingDialogDisplay !== undefined ? "greeting_dialog_display=\"" + greetingDialogDisplay + "\"" : "";
      var greetingDialogDelayAttribute = greetingDialogDelay !== undefined ? "greeting_dialog_delay=\"" + greetingDialogDelay + "\"" : "";

      return {
        __html: "<div\n        class=\"fb-customerchat\"\n        page_id=\"" + pageId + "\"\n        " + refAttribute + "\n        " + minimizedAttribute + "\n        " + themeColorAttribute + "\n        " + loggedInGreetingAttribute + "\n        " + loggedOutGreetingAttribute + "\n        " + greetingDialogDisplayAttribute + "\n        " + greetingDialogDelayAttribute + "\n      ></div>"
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          fbLoaded = _state.fbLoaded,
          shouldShowDialog = _state.shouldShowDialog;


      if (fbLoaded && shouldShowDialog !== this.props.shouldShowDialog) {
        document.addEventListener("DOMNodeInserted", function (event) {
          var element = event.target;
          if (element.className && typeof element.className === "string" && element.className.includes("fb_dialog")) {
            _this2.controlPlugin();
          }
        }, false);
        this.subscribeEvents();
      }
      // Add a random key to rerender. Reference:
      // https://stackoverflow.com/questions/30242530/dangerouslysetinnerhtml-doesnt-update-during-render
      return _react2.default.createElement("div", { key: Date(), dangerouslySetInnerHTML: this.createMarkup() });
    }
  }]);

  return MessengerCustomerChat;
}(_react.Component);

MessengerCustomerChat.propTypes = {
  pageId: _propTypes2.default.string.isRequired,
  appId: _propTypes2.default.string.isRequired,

  shouldShowDialog: _propTypes2.default.bool,
  htmlRef: _propTypes2.default.string,
  minimized: _propTypes2.default.bool,
  themeColor: _propTypes2.default.string,
  loggedInGreeting: _propTypes2.default.string,
  loggedOutGreeting: _propTypes2.default.string,
  greetingDialogDisplay: _propTypes2.default.oneOf(["show", "hide", "fade"]),
  greetingDialogDelay: _propTypes2.default.number,
  autoLogAppEvents: _propTypes2.default.bool,
  xfbml: _propTypes2.default.bool,
  version: _propTypes2.default.string,
  language: _propTypes2.default.string,
  onCustomerChatDialogShow: _propTypes2.default.func,
  onCustomerChatDialogHide: _propTypes2.default.func
};
MessengerCustomerChat.defaultProps = {
  shouldShowDialog: false,
  htmlRef: undefined,
  minimized: undefined,
  themeColor: undefined,
  loggedInGreeting: undefined,
  loggedOutGreeting: undefined,
  greetingDialogDisplay: undefined,
  greetingDialogDelay: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: "2.11",
  language: "en_US",
  onCustomerChatDialogShow: undefined,
  onCustomerChatDialogHide: undefined
};
exports.default = MessengerCustomerChat;