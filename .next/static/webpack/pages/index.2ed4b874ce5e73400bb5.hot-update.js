webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      Items = _useState2[0],\n      setItems = _useState2[1];\n\n  var handleSelection = function handleSelection(resource) {\n    setOpen(false);\n    resource.selection.map(function (item) {\n      Items.findIndex(function (oldItem) {\n        return oldItem.id === item.id;\n      }) == -1 ? setItems(function (oldArray) {\n        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(oldArray), [item]);\n      }) : null;\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: function onAction() {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      initialSelectionIds: Items.filter(function (item) {\n        return item.id;\n      }),\n      onSelection: function onSelection(resource) {\n        handleSelection(resource);\n      },\n      onCancel: function onCancel() {\n        return setOpen(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n            children: Items.map(function (Product) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: Product.handle\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 55,\n                    columnNumber: 34\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 54,\n                  columnNumber: 30\n                }, _this)\n              }, void 0, false);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            primary: true,\n            onClick: function onClick() {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"uXuwnPtCRPia7GoH7C5sXtMzfPA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJJdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2UiLCJzZWxlY3Rpb24iLCJtYXAiLCJpdGVtIiwiZmluZEluZGV4Iiwib2xkSXRlbSIsImlkIiwib2xkQXJyYXkiLCJjb250ZW50Iiwib25BY3Rpb24iLCJmaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwiUHJvZHVjdCIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEtBQUQsQ0FEZjtBQUFBLE1BQ1ZDLElBRFU7QUFBQSxNQUNKQyxPQURJOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWRyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFHakIsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxRQUFELEVBQWM7QUFDakNKLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUksWUFBUSxDQUFDQyxTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUFBQyxJQUFJLEVBQUk7QUFDM0JOLFdBQUssQ0FBQ08sU0FBTixDQUFnQixVQUFBQyxPQUFPO0FBQUEsZUFBSUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVILElBQUksQ0FBQ0csRUFBeEI7QUFBQSxPQUF2QixLQUFzRCxDQUFDLENBQXZELEdBQTJEUixRQUFRLENBQUMsVUFBQVMsUUFBUTtBQUFBLHNIQUFRQSxRQUFSLElBQWtCSixJQUFsQjtBQUFBLE9BQVQsQ0FBbkUsR0FBdUcsSUFBdkc7QUFDSCxLQUZEO0FBR0osR0FMRDs7QUFNQyxzQkFDSSxxRUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQXlCLFlBQVEsRUFBQyxjQUFsQztBQUFpRCxhQUFTLE1BQTFEO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFDSSxXQUFLLEVBQUMsWUFEVjtBQUVJLG1CQUFhLEVBQUU7QUFDWEssZUFBTyxFQUFDLGlCQURHO0FBRVhDLGdCQUFRLEVBQUUsb0JBQUs7QUFBQ2IsaUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYztBQUZuQjtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFRSSxxRUFBQyx3RUFBRDtBQUNJLGtCQUFZLEVBQUMsU0FEakI7QUFFSSxrQkFBWSxFQUFFLEtBRmxCO0FBR0ksVUFBSSxFQUFFRCxJQUhWO0FBSUkseUJBQW1CLEVBQUVFLEtBQUssQ0FBQ2EsTUFBTixDQUFhLFVBQUFQLElBQUksRUFBSTtBQUFDLGVBQU9BLElBQUksQ0FBQ0csRUFBWjtBQUFlLE9BQXJDLENBSnpCO0FBS0ksaUJBQVcsRUFBRSxxQkFBQ04sUUFBRCxFQUFjO0FBQUNELHVCQUFlLENBQUNDLFFBQUQsQ0FBZjtBQUEwQixPQUwxRDtBQU1JLGNBQVEsRUFBRTtBQUFBLGVBQUtKLE9BQU8sQ0FBQyxLQUFELENBQVo7QUFBQTtBQU5kO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSSixlQWdCSSxxRUFBQyxxREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNBLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixxQkFBUyxNQUF6QjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixxQkFBTTtBQUNGZSx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGVBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBUUEscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQUEsc0JBQ0NmLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFXLE9BQU8sRUFBSTtBQUNsQixrQ0FDSTtBQUFBLHVDQUNDLHFFQUFDLHFEQUFEO0FBQUEseUNBQ0k7QUFBQSw4QkFBSUEsT0FBTyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsK0JBREo7QUFPSCxhQVJBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFxQkkscUVBQUMsc0RBQUQ7QUFBTyxzQkFBWSxFQUFDLFVBQXBCO0FBQUEsaUNBQ1EscUVBQUMsdURBQUQ7QUFBUSxtQkFBTyxFQUFFLElBQWpCO0FBQXVCLG1CQUFPLEVBQUUsbUJBQUs7QUFBQ2xCLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBQWMsYUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOENILENBdkREOztHQUFNSCxLOztLQUFBQSxLO0FBeURTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIE1lZGlhQ2FyZCxcbiAgICBMYXlvdXQsXG4gICAgQ2FyZCxcbiAgICBCYW5uZXIsXG4gICAgQnV0dG9uLFxuICAgIFNrZWxldG9uQm9keVRleHQsXG4gICAgU3RhY2ssXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW0l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIHJlc291cmNlLnNlbGVjdGlvbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBJdGVtcy5maW5kSW5kZXgob2xkSXRlbSA9PiBvbGRJdGVtLmlkID09PSBpdGVtLmlkKSA9PSAtMSA/IHNldEl0ZW1zKG9sZEFycmF5ID0+IFsuLi5vbGRBcnJheSwgaXRlbV0pIDogbnVsbDtcbiAgICAgICAgfSk7XG4gICB9ICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2UgdGl0bGU9J0Nyb3NzLVNlbGwnIHN1YnRpdGxlPSdTZXQgUHJvZHVjdHMnIHNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxUaXRsZUJhclxuICAgICAgICAgICAgICAgIHRpdGxlPSdTYW1wbGUgQXBwJ1xuICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDonU2VsZWN0IFByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpPT4ge3NldE9wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XG4gICAgICAgICAgICAgICAgaW5pdGlhbFNlbGVjdGlvbklkcz17SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge3JldHVybiBpdGVtLmlkfSl9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZSkgPT4ge2hhbmRsZVNlbGVjdGlvbihyZXNvdXJjZSl9fVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKT0+IHNldE9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz0nbG9vc2UnIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBvbkRpc21pc3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc21pc3NlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfT5BIHdvcmsgaW4gcHJvZ3Jlc3M8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7SXRlbXMubWFwKFByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e1Byb2R1Y3QuaGFuZGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT17dHJ1ZX0gb25DbGljaz17KCkgPT57c2V0T3Blbih0cnVlKX19PlNlbGVjdCBQcm9kdWN0czwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvUGFnZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})