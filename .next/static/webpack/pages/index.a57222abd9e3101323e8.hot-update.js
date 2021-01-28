webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      Items = _useState2[0],\n      setItems = _useState2[1];\n\n  var handleSelection = function handleSelection(resource) {\n    setOpen(false);\n    setItems(_objectSpread(_objectSpread({}, Items), {}, {\n      resource: resource\n    }));\n    console.log(resource);\n    console.log(Items);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: function onAction() {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      onSelection: function onSelection(resource) {\n        handleSelection(resource);\n      },\n      onCancel: function onCancel() {\n        return setOpen(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            primary: true,\n            onClick: function onClick() {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"uXuwnPtCRPia7GoH7C5sXtMzfPA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJJdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2UiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVZHLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUdqQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBYztBQUNqQ0osV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBRSxZQUFRLGlDQUFLRCxLQUFMO0FBQVlHLGNBQVEsRUFBUkE7QUFBWixPQUFSO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0osR0FMRDs7QUFPQyxzQkFDSSxxRUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQXlCLFlBQVEsRUFBQyxjQUFsQztBQUFpRCxhQUFTLE1BQTFEO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFDSSxXQUFLLEVBQUMsWUFEVjtBQUVJLG1CQUFhLEVBQUU7QUFDWE0sZUFBTyxFQUFDLGlCQURHO0FBRVhDLGdCQUFRLEVBQUUsb0JBQUs7QUFBQ1IsaUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYztBQUZuQjtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRSSxxRUFBQyx3RUFBRDtBQUNJLGtCQUFZLEVBQUMsU0FEakI7QUFFSSxrQkFBWSxFQUFFLEtBRmxCO0FBR0ksVUFBSSxFQUFFRCxJQUhWO0FBSUksaUJBQVcsRUFBRSxxQkFBQ0ssUUFBRCxFQUFjO0FBQUNELHVCQUFlLENBQUNDLFFBQUQsQ0FBZjtBQUEwQixPQUoxRDtBQUtJLGNBQVEsRUFBRTtBQUFBLGVBQUtKLE9BQU8sQ0FBQyxLQUFELENBQVo7QUFBQTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWVJLHFFQUFDLHFEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUF1QixnQkFBUSxNQUEvQjtBQUFBLGdDQUNJLHFFQUFDLHVEQUFEO0FBQUEsaUNBQ0EscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLHFCQUFTLE1BQXpCO0FBQUEsbUNBQ0kscUVBQUMsdURBQUQ7QUFBUSx1QkFBUyxFQUNiLHFCQUFNO0FBQ0ZLLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsZUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBV0kscUVBQUMsc0RBQUQ7QUFBTyxzQkFBWSxFQUFDLFVBQXBCO0FBQUEsaUNBQ1EscUVBQUMsdURBQUQ7QUFBUSxtQkFBTyxFQUFFLElBQWpCO0FBQXVCLG1CQUFPLEVBQUUsbUJBQUs7QUFBQ04scUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYyxhQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBN0NEOztHQUFNSCxLOztLQUFBQSxLO0FBK0NTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIE1lZGlhQ2FyZCxcbiAgICBMYXlvdXQsXG4gICAgQ2FyZCxcbiAgICBCYW5uZXIsXG4gICAgQnV0dG9uLFxuICAgIFNrZWxldG9uQm9keVRleHQsXG4gICAgU3RhY2ssXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbSXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgc2V0SXRlbXMoey4uLkl0ZW1zLCByZXNvdXJjZX0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc291cmNlKTtcbiAgICAgICAgY29uc29sZS5sb2coSXRlbXMpXG4gICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSB0aXRsZT0nQ3Jvc3MtU2VsbCcgc3VidGl0bGU9J1NldCBQcm9kdWN0cycgc2VwYXJhdG9yPlxuICAgICAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgICAgICAgdGl0bGU9J1NhbXBsZSBBcHAnXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OidTZWxlY3QgUHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCk9PiB7c2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJlc291cmNlKX19XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPSdsb29zZScgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIG9uRGlzbWlzcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzbWlzc2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9PkEgd29yayBpbiBwcm9ncmVzczwvQmFubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT17dHJ1ZX0gb25DbGljaz17KCkgPT57c2V0T3Blbih0cnVlKX19PlNlbGVjdCBQcm9kdWN0czwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvUGFnZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})