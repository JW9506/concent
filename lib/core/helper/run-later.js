"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var feature_timerId = {};

var _default = function _default(cb, feature, delay) {
  if (delay === void 0) {
    delay = 1000;
  }

  var timerId = feature_timerId[feature];
  if (timerId) clearTimeout(timerId);
  feature_timerId[feature] = setTimeout(function () {
    delete feature_timerId[feature];
    cb();
  }, delay);
};

exports["default"] = _default;