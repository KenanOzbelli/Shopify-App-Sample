webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList/index.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, Index);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      open: false\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleSelection\", function (resources) {\n      var arr = [];\n      resources.selection.map();\n\n      _this.setState({\n        open: false\n      });\n\n      store_js__WEBPACK_IMPORTED_MODULE_10___default.a.set('ids', arr);\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('ids');\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Page\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"TitleBar\"], {\n          title: \"Sample App\",\n          primaryAction: {\n            content: 'Select products',\n            onAction: function onAction() {\n              return _this2.setState({\n                open: true\n              });\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_11__[\"ResourcePicker\"], {\n          resourceType: \"Product\",\n          showVariants: false,\n          open: this.state.open,\n          onSelection: function onSelection(resources) {\n            return _this2.handleSelection(resources);\n          },\n          onCancel: function onCancel() {\n            return _this2.setState({\n              open: false\n            });\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }, this), emptyState ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__[\"EmptyState\"], {\n            heading: \"Select products to start\",\n            action: {\n              content: 'Select products',\n              onAction: function onAction() {\n                return _this2.setState({\n                  open: true\n                });\n              }\n            },\n            image: img,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"Select products and change their price temporarily\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 55,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsIm9wZW4iLCJyZXNvdXJjZXMiLCJhcnIiLCJzZWxlY3Rpb24iLCJtYXAiLCJzZXRTdGF0ZSIsInN0b3JlIiwic2V0IiwiZW1wdHlTdGF0ZSIsImdldCIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUFDQyxVQUFJLEVBQUU7QUFBUCxLOzswTkFFVSxVQUFDQyxTQUFELEVBQWU7QUFDN0IsVUFBTUMsR0FBRyxHQUFHLEVBQVo7QUFFQUQsZUFBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQjs7QUFFQSxZQUFLQyxRQUFMLENBQWM7QUFBQ0wsWUFBSSxFQUFFO0FBQVAsT0FBZDs7QUFDQU0sc0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJMLEdBQWpCO0FBQ0gsSzs7Ozs7Ozs2QkFFUztBQUFBOztBQUNOLFVBQU1NLFVBQVUsR0FBRyxDQUFDRixnREFBSyxDQUFDRyxHQUFOLENBQVUsS0FBVixDQUFwQjtBQUNBLDBCQUNBLHFFQUFDLHFEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsbUVBQUQ7QUFDQSxlQUFLLEVBQUMsWUFETjtBQUVBLHVCQUFhLEVBQUU7QUFDWEMsbUJBQU8sRUFBRSxpQkFERTtBQUVYQyxvQkFBUSxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ0wsb0JBQUksRUFBRTtBQUFQLGVBQWQsQ0FBTjtBQUFBO0FBRkM7QUFGZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBUUkscUVBQUMseUVBQUQ7QUFDQSxzQkFBWSxFQUFDLFNBRGI7QUFFQSxzQkFBWSxFQUFFLEtBRmQ7QUFHQSxjQUFJLEVBQUUsS0FBS1ksS0FBTCxDQUFXWixJQUhqQjtBQUlBLHFCQUFXLEVBQUUscUJBQUNDLFNBQUQ7QUFBQSxtQkFBZSxNQUFJLENBQUNZLGVBQUwsQ0FBcUJaLFNBQXJCLENBQWY7QUFBQSxXQUpiO0FBS0Esa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ0ksUUFBTCxDQUFjO0FBQUNMLGtCQUFJLEVBQUU7QUFBUCxhQUFkLENBQU47QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkosRUFlS1EsVUFBVSxnQkFDWCxxRUFBQyx1REFBRDtBQUFBLGlDQUNBLHFFQUFDLDJEQUFEO0FBQ0ksbUJBQU8sRUFBQywwQkFEWjtBQUVJLGtCQUFNLEVBQUU7QUFDUkUscUJBQU8sRUFBRSxpQkFERDtBQUVSQyxzQkFBUSxFQUFFO0FBQUEsdUJBQU0sTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ0wsc0JBQUksRUFBRTtBQUFQLGlCQUFkLENBQU47QUFBQTtBQUZGLGFBRlo7QUFNSSxpQkFBSyxFQUFFRixHQU5YO0FBQUEsbUNBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVyxnQkFjWCxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQTtBQW1DTDs7OztFQWpEaUJnQiw0Q0FBSyxDQUFDQyxTOztBQW1EWGhCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIExheW91dCxcbiAgICBCYW5uZXIsXG4gICAgU3RhY2ssXG4gICAgRW1wdHlTdGF0ZSxcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xuaW1wb3J0IHsgVGl0bGVCYXIsIFJlc291cmNlUGlja2VyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcblxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge29wZW46IGZhbHNlfVxuXG4gICAgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXVxuXG4gICAgICAgIHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKClcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgICBzdG9yZS5zZXQoJ2lkcycsIGFycik7XG4gICAgfTtcblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IGVtcHR5U3RhdGUgPSAhc3RvcmUuZ2V0KCdpZHMnKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXG4gICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlcykgPT4gdGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtlbXB0eVN0YXRlID8gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxFbXB0eVN0YXRlXG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIGFuZCBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHk8L3A+XG4gICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICk6KFxuICAgICAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9QYWdlID5cbiAgICAgICAgKTtcblxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})