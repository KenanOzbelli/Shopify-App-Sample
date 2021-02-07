webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList/index.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var handleSelection = function handleSelection(resources) {\n    var idsFromResources = resources.selection.map(function (product) {\n      return product.id;\n    });\n\n    _this.setState({\n      open: false\n    });\n\n    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select products',\n        onAction: function onAction() {\n          return setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      onSelection: function onSelection(resources) {\n        return handleSelection(resources);\n      },\n      onCancel: function onCancel() {\n        setOpen(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n        heading: \"Select products to start\",\n        action: {\n          content: 'Select products',\n          onAction: function onAction() {\n            setOpen(true);\n          }\n        },\n        image: img,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"Select products and change their price temporarily\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(Index, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbWciLCJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZXMiLCJpZHNGcm9tUmVzb3VyY2VzIiwic2VsZWN0aW9uIiwibWFwIiwicHJvZHVjdCIsImlkIiwic2V0U3RhdGUiLCJzdG9yZSIsInNldCIsImNvbnRlbnQiLCJvbkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7QUFFQSxJQUFPQyxLQUFLLEdBQUUsU0FBUEEsS0FBTyxHQUFLO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ1JDLElBRFE7QUFBQSxNQUNGQyxPQURFOztBQUVmLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRCxFQUFlO0FBQ25DLFFBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQSxPQUFPLENBQUNDLEVBQXJCO0FBQUEsS0FBeEIsQ0FBekI7O0FBQ0EsU0FBSSxDQUFDQyxRQUFMLENBQWM7QUFBRVQsVUFBSSxFQUFFO0FBQVIsS0FBZDs7QUFDQVUsbURBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJQLGdCQUFqQjtBQUNELEdBSkg7O0FBTUEsc0JBQ0UscUVBQUMscURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxrRUFBRDtBQUNFLFdBQUssRUFBQyxZQURSO0FBRUUsbUJBQWEsRUFBRTtBQUNiUSxlQUFPLEVBQUUsaUJBREk7QUFFYkMsZ0JBQVEsRUFBRTtBQUFBLGlCQUFNWixPQUFPLENBQUMsSUFBRCxDQUFiO0FBQUE7QUFGRztBQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFRRSxxRUFBQyx3RUFBRDtBQUNFLGtCQUFZLEVBQUMsU0FEZjtBQUVFLGtCQUFZLEVBQUUsS0FGaEI7QUFHRSxVQUFJLEVBQUVELElBSFI7QUFJRSxpQkFBVyxFQUFFLHFCQUFDRyxTQUFEO0FBQUEsZUFBZUQsZUFBZSxDQUFDQyxTQUFELENBQTlCO0FBQUEsT0FKZjtBQUtFLGNBQVEsRUFBRSxvQkFBTTtBQUFDRixlQUFPLENBQUMsS0FBRCxDQUFQO0FBQWU7QUFMbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLGVBZUUscUVBQUMsdURBQUQ7QUFBQSw2QkFDRSxxRUFBQywyREFBRDtBQUNFLGVBQU8sRUFBQywwQkFEVjtBQUVFLGNBQU0sRUFBRTtBQUNOVyxpQkFBTyxFQUFFLGlCQURIO0FBRU5DLGtCQUFRLEVBQUUsb0JBQU07QUFBQ1osbUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYztBQUZ6QixTQUZWO0FBTUUsYUFBSyxFQUFFSixHQU5UO0FBQUEsK0JBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZGLGVBMkJFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkgsQ0F2Q0Q7O0dBQU9DLEs7O0tBQUFBLEs7QUF3Q1FBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFBhZ2UsXG4gICAgTGF5b3V0LFxuICAgIEJhbm5lcixcbiAgICBTdGFjayxcbiAgICBFbXB0eVN0YXRlLFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QnO1xuaW1wb3J0IHsgc2V0IH0gZnJvbSAnanMtY29va2llJztcblxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcblxuY29uc3QgIEluZGV4ID0oKT0+IHtcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT4ge1xuICAgICAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UgfSk7XG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRzRnJvbVJlc291cmNlcyk7XG4gICAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxuICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxuICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldE9wZW4odHJ1ZSksXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiBoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2VzKX1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge3NldE9wZW4oZmFsc2UpfX1cbiAgICAgICAgLz5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXG4gICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXG4gICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7c2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBpbWFnZT17aW1nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlIHRlbXBvcmFyaWx5PC9wPlxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgLz5cbiAgICAgIDwvUGFnZSA+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})