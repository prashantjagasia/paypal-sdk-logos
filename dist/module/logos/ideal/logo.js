import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
var _excluded = ["logoColor"];
var _LOGO_COLORS;
import { node } from "@krakenjs/jsx-pragmatic/src";
import { SVGLogo, getLogoColors } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
var LOGO_COLORS = (_LOGO_COLORS = {}, _LOGO_COLORS[LOGO_COLOR.DEFAULT] = {
  primary: "#FFFFFF",
  secondary: "#CC0066"
}, _LOGO_COLORS[LOGO_COLOR.WHITE] = {
  primary: "#FFFFFF",
  secondary: "#CC0066"
}, _LOGO_COLORS[LOGO_COLOR.BLACK] = {
  primary: "#FFFFFF",
  secondary: "#CC0066"
}, _LOGO_COLORS);
export function IdealLogo(_ref) {
  var _ref$logoColor = _ref.logoColor,
    logoColor = _ref$logoColor === void 0 ? LOGO_COLOR.BLACK : _ref$logoColor,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var _getLogoColors = getLogoColors(LOGO.IDEAL, LOGO_COLORS, logoColor),
    primary = _getLogoColors.primary,
    secondary = _getLogoColors.secondary;
  return node(SVGLogo, _extends({}, props, {
    name: LOGO.IDEAL,
    render: function render() {
      return node("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 306.1 269.8",
        style: "enable-background:new 0 0 306.1 269.8;"
      }, node("g", null, node("g", null, node("path", {
        d: "M0,20v229.8c0,11,9,20,20,20h137.3c103.8,0,148.8-58.1,148.8-135.2C306.1,57.9,261.1,0,157.3,0H20 C9,0,0,9,0,20z",
        fill: primary
      }), node("path", {
        d: "M91.9,56.4v169.8h73.9c67.1,0,96.2-37.9,96.2-91.5c0-51.3-29.1-91.1-96.2-91.1h-61.1 C97.6,43.6,91.9,49.4,91.9,56.4z",
        fill: secondary
      }), node("g", null, node("g", null, node("path", {
        d: "M157.3,251.5H37.9c-10.6,0-19.2-8.6-19.2-19.2V37.6c0-10.6,8.6-19.2,19.2-19.2h119.4c113.3,0,130.2,72.9,130.2,116.3 C287.5,210,241.2,251.5,157.3,251.5z M37.9,24.8c-7.1,0-12.8,5.7-12.8,12.8v194.7c0,7.1,5.7,12.8,12.8,12.8h119.4 c79.8,0,123.8-39.2,123.8-110.4c0-95.6-77.6-109.9-123.8-109.9H37.9z"
      })))), node("g", null, node("path", {
        d: "M117.9,111.8c2.6,0,5,0.4,7.3,1.2c2.3,0.8,4.2,2.1,5.9,3.7c1.6,1.7,2.9,3.8,3.9,6.2c0.9,2.5,1.4,5.4,1.4,8.8 c0,3-0.4,5.7-1.1,8.2c-0.8,2.5-1.9,4.7-3.4,6.5c-1.5,1.8-3.4,3.2-5.7,4.3c-2.3,1-5,1.6-8.1,1.6h-17.5v-40.6H117.9z M117.3,144.9 c1.3,0,2.5-0.2,3.8-0.6c1.2-0.4,2.3-1.1,3.2-2.1c0.9-1,1.7-2.2,2.3-3.8c0.6-1.6,0.9-3.4,0.9-5.7c0-2-0.2-3.9-0.6-5.5 c-0.4-1.6-1.1-3.1-2-4.2s-2.1-2.1-3.6-2.7c-1.5-0.6-3.3-0.9-5.5-0.9h-6.4v25.6H117.3z",
        fill: primary
      }), node("path", {
        d: "M172.5,111.8v7.5h-21.4v8.7h19.7v6.9h-19.7v9.9H173v7.5h-30.8v-40.6H172.5z",
        fill: primary
      }), node("path", {
        d: "M203.1,111.8l15.2,40.6H209l-3.1-9h-15.2l-3.2,9h-9l15.3-40.6H203.1z M203.6,136.7l-5.1-14.9h-0.1l-5.3,14.9 H203.6z",
        fill: primary
      }), node("path", {
        d: "M232.8,111.8v33.1h19.8v7.5h-28.7v-40.6H232.8z",
        fill: primary
      })), node("g", null, node("circle", {
        cx: "58.5",
        cy: "132.1",
        r: "18.7"
      })), node("path", {
        d: "M72.6,226.2L72.6,226.2c-15.7,0-28.3-12.7-28.3-28.3v-22.1c0-7.8,6.3-14.2,14.2-14.2h0c7.8,0,14.2,6.3,14.2,14.2V226.2z"
      })));
    }
  }));
}