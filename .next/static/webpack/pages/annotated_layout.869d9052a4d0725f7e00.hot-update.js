webpackHotUpdate_N_E("pages/annotated_layout",{

/***/ "./pages/annotated_layout.js":
/*!***********************************!*\
  !*** ./pages/annotated_layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/annotated_layout.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AnnotatedLayout, _React$Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      discount: '10%'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log('submission', _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleChange\", function (name) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, name, value));\n      };\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var discount = this.state.discount;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].Section, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Default Discount\",\n            description: \"Add a product to Sample App, it will automatically be discounted\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], {\n              sectioned: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Form\"], {\n                onSubmit: this.handleSubmit,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"FormLayout\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], {\n                    value: discount,\n                    onChange: this.handleChange('discount'),\n                    label: \"Discount\",\n                    type: \"discount\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 36,\n                    columnNumber: 37\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n                    distribution: \"trailing\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n                      primary: true,\n                      submit: true,\n                      children: \"Save\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 38,\n                      columnNumber: 41\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 37,\n                    columnNumber: 37\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 35,\n                  columnNumber: 33\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkX2xheW91dC5qcz81MDgwIl0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsZTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUU7QUFETixLOzt1TkFJTyxZQUFNO0FBQ2pCLFlBQUtDLFFBQUwsQ0FBYztBQUNWRCxnQkFBUSxFQUFFLE1BQUtFLEtBQUwsQ0FBV0Y7QUFEWCxPQUFkOztBQUdBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtGLEtBQS9CO0FBQ0gsSzs7dU5BRWMsVUFBQ0csSUFBRCxFQUFVO0FBQ3JCLGFBQU8sVUFBQ0MsS0FBRDtBQUFBLGVBQVcsTUFBS0wsUUFBTCwrRkFBaUJJLElBQWpCLEVBQXdCQyxLQUF4QixFQUFYO0FBQUEsT0FBUDtBQUNILEs7Ozs7Ozs7NkJBQ1E7QUFBQSxVQUVFTixRQUZGLEdBRWUsS0FBS0UsS0FGcEIsQ0FFRUYsUUFGRjtBQUdMLDBCQUNJLHFFQUFDLHFEQUFEO0FBQUEsK0JBQ0kscUVBQUMsdURBQUQ7QUFBQSxrQ0FDSSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFRLHVCQUFTLEVBQ2IscUJBQU07QUFDRkcsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSCxlQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQVFJLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFBeUIsaUJBQUssRUFBQyxrQkFBL0I7QUFBa0QsdUJBQVcsRUFBQyxrRUFBOUQ7QUFBQSxtQ0FDSSxxRUFBQyxxREFBRDtBQUFNLHVCQUFTLE1BQWY7QUFBQSxxQ0FDSSxxRUFBQyxxREFBRDtBQUFNLHdCQUFRLEVBQUUsS0FBS0csWUFBckI7QUFBQSx1Q0FDSSxxRUFBQywyREFBRDtBQUFBLDBDQUNJLHFFQUFDLDBEQUFEO0FBQVcseUJBQUssRUFBRVAsUUFBbEI7QUFBNEIsNEJBQVEsRUFBRSxLQUFLUSxZQUFMLENBQWtCLFVBQWxCLENBQXRDO0FBQXFFLHlCQUFLLEVBQUMsVUFBM0U7QUFBc0Ysd0JBQUksRUFBQztBQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUkscUVBQUMsc0RBQUQ7QUFBTyxnQ0FBWSxFQUFDLFVBQXBCO0FBQUEsMkNBQ0kscUVBQUMsdURBQUQ7QUFBUSw2QkFBTyxNQUFmO0FBQWdCLDRCQUFNLE1BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkosZUFzQkkscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUF5QixpQkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQThCSDs7OztFQWhEeUJDLDRDQUFLLENBQUNDLFM7O0FBa0RyQlgsOEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hbm5vdGF0ZWRfbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGFnZSwgTGF5b3V0LCBDYXJkLCBCYW5uZXIsIEJ1dHRvbiwgRm9ybSwgRm9ybUxheW91dCwgVGV4dEZpZWxkLCBTdGFja30gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5cbmNsYXNzIEFubm90YXRlZExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc2NvdW50OiAnMTAlJyxcbiAgICB9O1xuXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgXG4gICAgICAgY29uc3QgeyBkaXNjb3VudCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgb25EaXNtaXNzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+QSB3b3JrIGluIHByb2dyZXNzPC9CYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIkRlZmF1bHQgRGlzY291bnRcIiBkZXNjcmlwdGlvbj1cIkFkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2Rpc2NvdW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9IGxhYmVsPSdEaXNjb3VudCcgdHlwZT0nZGlzY291bnQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgIClcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBBbm5vdGF0ZWRMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/annotated_layout.js\n");

/***/ })

})