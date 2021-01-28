webpackHotUpdate_N_E("pages/annotated_layout",{

/***/ "./pages/annotated_layout.js":
/*!***********************************!*\
  !*** ./pages/annotated_layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/annotated_layout.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AnnotatedLayout, _React$Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log('submission', _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleChange\", function (name) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, name, value));\n      };\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleToogle\", function () {\n      _this.setState(function (_ref) {\n        var enabled = _ref.enabled;\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          discount = _this$state.discount,\n          enabled = _this$state.enabled;\n      var contentStatus = enabled ? 'Disabled' : 'Enabled';\n      var textStatus = enabled ? 'Enabled' : 'Disabeld';\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_10__[\"TitleBar\"], {\n          title: \"Annotated Layout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].Section, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Default Discount\",\n            description: \"Add a product to Sample App, it will automatically be discounted\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], {\n              sectioned: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Form\"], {\n                onSubmit: this.handleSubmit,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"FormLayout\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], {\n                    value: discount,\n                    onChange: this.handleChange('discount'),\n                    label: \"Discount\",\n                    type: \"discount\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 37\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n                    distribution: \"trailing\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n                      primary: true,\n                      submit: true,\n                      children: \"Save\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 50,\n                      columnNumber: 41\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 49,\n                    columnNumber: 37\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 33\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Toogle Discount\",\n            description: \"Enable or Disable the discounts for your products\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"SettingToggle\"], {\n              action: {\n                content: contentStatus,\n                onAction: this.handleToogle\n              },\n              enabled: enabled,\n              children: [\"this setting is \", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextStyle\"], {\n                variation: \"strong\",\n                children: textStatus\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 29\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkX2xheW91dC5qcz81MDgwIl0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInZhbHVlIiwiY29udGVudFN0YXR1cyIsInRleHRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJjb250ZW50Iiwib25BY3Rpb24iLCJoYW5kbGVUb29nbGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsY0FBUSxFQUFFLEtBRE47QUFFSkMsYUFBTyxFQUFFO0FBRkwsSzs7dU5BS08sWUFBTTtBQUNqQixZQUFLQyxRQUFMLENBQWM7QUFDVkYsZ0JBQVEsRUFBRSxNQUFLRyxLQUFMLENBQVdIO0FBRFgsT0FBZDs7QUFHQUksYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQixNQUFLRixLQUEvQjtBQUNILEs7O3VOQUVjLFVBQUNHLElBQUQsRUFBVTtBQUNyQixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtMLFFBQUwsK0ZBQWlCSSxJQUFqQixFQUF3QkMsS0FBeEIsRUFBWDtBQUFBLE9BQVA7QUFDSCxLOzt1TkFDYyxZQUFNO0FBQ2pCLFlBQUtMLFFBQUwsQ0FBYyxnQkFBZTtBQUFBLFlBQWJELE9BQWEsUUFBYkEsT0FBYTtBQUN6QixlQUFPO0FBQUVBLGlCQUFPLEVBQUUsQ0FBQ0E7QUFBWixTQUFQO0FBQ0gsT0FGRDtBQUdILEs7Ozs7Ozs7NkJBQ1E7QUFBQSx3QkFFd0IsS0FBS0UsS0FGN0I7QUFBQSxVQUVFSCxRQUZGLGVBRUVBLFFBRkY7QUFBQSxVQUVZQyxPQUZaLGVBRVlBLE9BRlo7QUFHTixVQUFNTyxhQUFhLEdBQUdQLE9BQU8sR0FBRyxVQUFILEdBQWdCLFNBQTdDO0FBQ0EsVUFBTVEsVUFBVSxHQUFHUixPQUFPLEdBQUcsU0FBSCxHQUFlLFVBQXpDO0FBQ0MsMEJBQ0kscUVBQUMscURBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxtRUFBRDtBQUNDLGVBQUssRUFBQztBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNJLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixxQkFBTTtBQUNGRyx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGVBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBUUkscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUF5QixpQkFBSyxFQUFDLGtCQUEvQjtBQUFrRCx1QkFBVyxFQUFDLGtFQUE5RDtBQUFBLG1DQUNJLHFFQUFDLHFEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFBLHFDQUNJLHFFQUFDLHFEQUFEO0FBQU0sd0JBQVEsRUFBRSxLQUFLSyxZQUFyQjtBQUFBLHVDQUNJLHFFQUFDLDJEQUFEO0FBQUEsMENBQ0kscUVBQUMsMERBQUQ7QUFBVyx5QkFBSyxFQUFFVixRQUFsQjtBQUE0Qiw0QkFBUSxFQUFFLEtBQUtXLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBdEM7QUFBcUUseUJBQUssRUFBQyxVQUEzRTtBQUFzRix3QkFBSSxFQUFDO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSSxxRUFBQyxzREFBRDtBQUFPLGdDQUFZLEVBQUMsVUFBcEI7QUFBQSwyQ0FDSSxxRUFBQyx1REFBRDtBQUFRLDZCQUFPLE1BQWY7QUFBZ0IsNEJBQU0sTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSixlQXNCSSxxRUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQXlCLGlCQUFLLEVBQUMsaUJBQS9CO0FBQWlELHVCQUFXLEVBQUMsbURBQTdEO0FBQUEsbUNBQ0kscUVBQUMsOERBQUQ7QUFDSSxvQkFBTSxFQUFFO0FBQ0pDLHVCQUFPLEVBQUVKLGFBREw7QUFFSkssd0JBQVEsRUFBRSxLQUFLQztBQUZYLGVBRFo7QUFLSSxxQkFBTyxFQUFFYixPQUxiO0FBQUEsNkNBT3FCLEdBUHJCLGVBUUkscUVBQUMsMERBQUQ7QUFBVyx5QkFBUyxFQUFDLFFBQXJCO0FBQUEsMEJBQStCUTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQTBDSDs7OztFQXBFeUJNLDRDQUFLLENBQUNDLFM7O0FBc0VyQmpCLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkX2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1BhZ2UsIExheW91dCwgQ2FyZCwgQmFubmVyLCBCdXR0b24sIEZvcm0sIEZvcm1MYXlvdXQsIFRleHRGaWVsZCwgU3RhY2ssIFNldHRpbmdUb2dnbGUsIFRleHRTdHlsZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNjb3VudDogJzEwJScsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZGlzY291bnQ6IHRoaXMuc3RhdGUuZGlzY291bnRcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXNzaW9uJywgdGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlID0gKG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtuYW1lXTogdmFsdWV9KTtcbiAgICB9XG4gICAgaGFuZGxlVG9vZ2xlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKCh7ZW5hYmxlZH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IGVuYWJsZWQ6ICFlbmFibGVkfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICBcbiAgICAgICBjb25zdCB7IGRpc2NvdW50LCBlbmFibGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgIGNvbnN0IGNvbnRlbnRTdGF0dXMgPSBlbmFibGVkID8gJ0Rpc2FibGVkJyA6ICdFbmFibGVkJztcbiAgICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdFbmFibGVkJyA6ICdEaXNhYmVsZCc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgICAgICAgdGl0bGU9J0Fubm90YXRlZCBMYXlvdXQnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIG9uRGlzbWlzcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzbWlzc2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9PkEgd29yayBpbiBwcm9ncmVzczwvQmFubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb24gdGl0bGU9XCJEZWZhdWx0IERpc2NvdW50XCIgZGVzY3JpcHRpb249XCJBZGQgYSBwcm9kdWN0IHRvIFNhbXBsZSBBcHAsIGl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNjb3VudGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHZhbHVlPXtkaXNjb3VudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfSBsYWJlbD0nRGlzY291bnQnIHR5cGU9J2Rpc2NvdW50Jy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPVwidHJhaWxpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgc3VibWl0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LkFubm90YXRlZFNlY3Rpb24gdGl0bGU9XCJUb29nbGUgRGlzY291bnRcIiBkZXNjcmlwdGlvbj1cIkVuYWJsZSBvciBEaXNhYmxlIHRoZSBkaXNjb3VudHMgZm9yIHlvdXIgcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiB0aGlzLmhhbmRsZVRvb2dsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcyBzZXR0aW5nIGlzIHsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249J3N0cm9uZyc+e3RleHRTdGF0dXN9PC9UZXh0U3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NldHRpbmdUb2dnbGU+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/annotated_layout.js\n");

/***/ })

})