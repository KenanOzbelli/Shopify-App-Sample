webpackHotUpdate_N_E("pages/annotated_layout",{

/***/ "./pages/annotated_layout.js":
/*!***********************************!*\
  !*** ./pages/annotated_layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/annotated_layout.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar AnnotatedLayout = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(AnnotatedLayout, _React$Component);\n\n  var _super = _createSuper(AnnotatedLayout);\n\n  function AnnotatedLayout() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AnnotatedLayout);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      discount: '10%'\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSubmit\", function () {\n      _this.setState({\n        discount: _this.state.discount\n      });\n\n      console.log('submission', _this.state);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleChange\", function (name) {\n      return function (value) {\n        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, name, value));\n      };\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleToogle\", function () {\n      _this.setState(function (_ref) {\n        var enabled = _ref.enabled;\n        return {\n          enabled: enabled\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AnnotatedLayout, [{\n    key: \"render\",\n    value: function render() {\n      var discount = this.state.discount;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].Section, {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Default Discount\",\n            description: \"Add a product to Sample App, it will automatically be discounted\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Card\"], {\n              sectioned: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Form\"], {\n                onSubmit: this.handleSubmit,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"FormLayout\"], {\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"TextField\"], {\n                    value: discount,\n                    onChange: this.handleChange('discount'),\n                    label: \"Discount\",\n                    type: \"discount\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 41,\n                    columnNumber: 37\n                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Stack\"], {\n                    distribution: \"trailing\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n                      primary: true,\n                      submit: true,\n                      children: \"Save\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 43,\n                      columnNumber: 41\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 42,\n                    columnNumber: 37\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 33\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 29\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 21\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"].AnnotatedSection, {\n            title: \"Toogle Discount\",\n            description: \"Enable or Disable the discounts for your products\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"SettingToggle\"], {\n              action: {\n                content: contentStatus,\n                onAction: this.handleToogle\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 25\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return AnnotatedLayout;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYW5ub3RhdGVkX2xheW91dC5qcz81MDgwIl0sIm5hbWVzIjpbIkFubm90YXRlZExheW91dCIsImRpc2NvdW50Iiwic2V0U3RhdGUiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwidmFsdWUiLCJlbmFibGVkIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsImNvbnRlbnRTdGF0dXMiLCJvbkFjdGlvbiIsImhhbmRsZVRvb2dsZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEs7O3VOQUlPLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZELGdCQUFRLEVBQUUsTUFBS0UsS0FBTCxDQUFXRjtBQURYLE9BQWQ7O0FBR0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsTUFBS0YsS0FBL0I7QUFDSCxLOzt1TkFFYyxVQUFDRyxJQUFELEVBQVU7QUFDckIsYUFBTyxVQUFDQyxLQUFEO0FBQUEsZUFBVyxNQUFLTCxRQUFMLCtGQUFpQkksSUFBakIsRUFBd0JDLEtBQXhCLEVBQVg7QUFBQSxPQUFQO0FBQ0gsSzs7dU5BQ2MsWUFBTTtBQUNqQixZQUFLTCxRQUFMLENBQWMsZ0JBQWU7QUFBQSxZQUFiTSxPQUFhLFFBQWJBLE9BQWE7QUFDekIsZUFBTztBQUFFQSxpQkFBTyxFQUFQQTtBQUFGLFNBQVA7QUFDSCxPQUZEO0FBR0gsSzs7Ozs7Ozs2QkFDUTtBQUFBLFVBRUVQLFFBRkYsR0FFZSxLQUFLRSxLQUZwQixDQUVFRixRQUZGO0FBR0wsMEJBQ0kscUVBQUMscURBQUQ7QUFBQSwrQkFDSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNJLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixxQkFBTTtBQUNGRyx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGVBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBUUkscUVBQUMsdURBQUQsQ0FBUSxnQkFBUjtBQUF5QixpQkFBSyxFQUFDLGtCQUEvQjtBQUFrRCx1QkFBVyxFQUFDLGtFQUE5RDtBQUFBLG1DQUNJLHFFQUFDLHFEQUFEO0FBQU0sdUJBQVMsTUFBZjtBQUFBLHFDQUNJLHFFQUFDLHFEQUFEO0FBQU0sd0JBQVEsRUFBRSxLQUFLSSxZQUFyQjtBQUFBLHVDQUNJLHFFQUFDLDJEQUFEO0FBQUEsMENBQ0kscUVBQUMsMERBQUQ7QUFBVyx5QkFBSyxFQUFFUixRQUFsQjtBQUE0Qiw0QkFBUSxFQUFFLEtBQUtTLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBdEM7QUFBcUUseUJBQUssRUFBQyxVQUEzRTtBQUFzRix3QkFBSSxFQUFDO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSSxxRUFBQyxzREFBRDtBQUFPLGdDQUFZLEVBQUMsVUFBcEI7QUFBQSwyQ0FDSSxxRUFBQyx1REFBRDtBQUFRLDZCQUFPLE1BQWY7QUFBZ0IsNEJBQU0sTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSSixlQXNCSSxxRUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQXlCLGlCQUFLLEVBQUMsaUJBQS9CO0FBQWlELHVCQUFXLEVBQUMsbURBQTdEO0FBQUEsbUNBQ0kscUVBQUMsOERBQUQ7QUFDSSxvQkFBTSxFQUFFO0FBQ0pDLHVCQUFPLEVBQUVDLGFBREw7QUFFSkMsd0JBQVEsRUFBRSxLQUFLQztBQUZYO0FBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQW9DSDs7OztFQTNEeUJDLDRDQUFLLENBQUNDLFM7O0FBNkRyQmhCLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYW5ub3RhdGVkX2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1BhZ2UsIExheW91dCwgQ2FyZCwgQmFubmVyLCBCdXR0b24sIEZvcm0sIEZvcm1MYXlvdXQsIFRleHRGaWVsZCwgU3RhY2ssIFNldHRpbmdUb2dnbGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuXG5jbGFzcyBBbm5vdGF0ZWRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNjb3VudDogJzEwJScsXG4gICAgfTtcblxuICAgIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Ym1pc3Npb24nLCB0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2UgPSAobmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZX0pO1xuICAgIH1cbiAgICBoYW5kbGVUb29nbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHtlbmFibGVkfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgZW5hYmxlZH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICBcbiAgICAgICBjb25zdCB7IGRpc2NvdW50IH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBvbkRpc21pc3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc21pc3NlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfT5BIHdvcmsgaW4gcHJvZ3Jlc3M8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIHRpdGxlPVwiRGVmYXVsdCBEaXNjb3VudFwiIGRlc2NyaXB0aW9uPVwiQWRkIGEgcHJvZHVjdCB0byBTYW1wbGUgQXBwLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgZGlzY291bnRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YWx1ZT17ZGlzY291bnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX0gbGFiZWw9J0Rpc2NvdW50JyB0eXBlPSdkaXNjb3VudCcvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IHN1Ym1pdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIHRpdGxlPVwiVG9vZ2xlIERpc2NvdW50XCIgZGVzY3JpcHRpb249XCJFbmFibGUgb3IgRGlzYWJsZSB0aGUgZGlzY291bnRzIGZvciB5b3VyIHByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50U3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb29nbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/annotated_layout.js\n");

/***/ })

})