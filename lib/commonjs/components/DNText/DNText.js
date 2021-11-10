"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _useSpacing = require("../../hooks/useSpacing");

var _theming = require("../../theming");

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DNText = props => {
  const {
    style,
    children,
    secondary,
    h1,
    h2,
    h3,
    uppercase,
    lowercase,
    styles,
    theme,
    appearance
  } = props;
  const spacingStyles = (0, _useSpacing.useSpacing)(props);
  const textStyles = [secondary ? styles.tnSecondaryText : styles.tnPrimaryText, h1 && {
    fontSize: theme.fontSizes.xxl,
    fontWeight: theme.fontWeights.l
  }, h2 && {
    fontSize: theme.fontSizes.xl,
    fontWeight: theme.fontWeights.l
  }, h3 && {
    fontSize: theme.fontSizes.l,
    fontWeight: theme.fontWeights.l
  }, uppercase && {
    textTransform: 'uppercase'
  }, lowercase && {
    textTransform: 'lowercase'
  }, ...spacingStyles, style];
  return /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: textStyles
  }, children);
};

var _default = /*#__PURE__*/(0, _react.memo)((0, _theming.useTrulyNative)(DNText, _styles.default));

exports.default = _default;
//# sourceMappingURL=DNText.js.map