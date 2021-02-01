webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      Items = _useState2[0],\n      setItems = _useState2[1];\n\n  var handleSelection = function handleSelection(resource) {\n    setOpen(false);\n    resource.selection.map(function (item) {\n      Items.findIndex(function (oldItem) {\n        return oldItem.id === item.id;\n      }) == -1 ? setItems(function (oldArray) {\n        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(oldArray), [item]);\n      }) : null;\n      console.log(item);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: function onAction() {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      initialSelectionIds: Items.filter(function (item) {\n        return item.id;\n      }),\n      onSelection: function onSelection(resource) {\n        handleSelection(resource);\n      },\n      onCancel: function onCancel() {\n        return setOpen(false);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Banner\"], {\n              onDismiss: function onDismiss() {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, _this), Items.map(function (Product) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"].Section, {\n              one: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                item: Product\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 29\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 25\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n            primary: true,\n            onClick: function onClick() {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Index, \"uXuwnPtCRPia7GoH7C5sXtMzfPA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJJdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2UiLCJzZWxlY3Rpb24iLCJtYXAiLCJpdGVtIiwiZmluZEluZGV4Iiwib2xkSXRlbSIsImlkIiwib2xkQXJyYXkiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm9uQWN0aW9uIiwiZmlsdGVyIiwiUHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ09DLHNEQUFRLENBQUMsS0FBRCxDQURmO0FBQUEsTUFDVkMsSUFEVTtBQUFBLE1BQ0pDLE9BREk7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVZHLEtBRlU7QUFBQSxNQUVIQyxRQUZHOztBQUdqQixNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFFBQUQsRUFBYztBQUNqQ0osV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBSSxZQUFRLENBQUNDLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUFDLElBQUksRUFBSTtBQUMzQk4sV0FBSyxDQUFDTyxTQUFOLENBQWdCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLEVBQVIsS0FBZUgsSUFBSSxDQUFDRyxFQUF4QjtBQUFBLE9BQXZCLEtBQXNELENBQUMsQ0FBdkQsR0FBMkRSLFFBQVEsQ0FBQyxVQUFBUyxRQUFRO0FBQUEsc0hBQVFBLFFBQVIsSUFBa0JKLElBQWxCO0FBQUEsT0FBVCxDQUFuRSxHQUF1RyxJQUF2RztBQUNBSyxhQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUNILEtBSEQ7QUFJSixHQU5EOztBQU9DLHNCQUNJLHFFQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBeUIsWUFBUSxFQUFDLGNBQWxDO0FBQWlELGFBQVMsTUFBMUQ7QUFBQSw0QkFDSSxxRUFBQyxrRUFBRDtBQUNJLFdBQUssRUFBQyxZQURWO0FBRUksbUJBQWEsRUFBRTtBQUNYTyxlQUFPLEVBQUMsaUJBREc7QUFFWEMsZ0JBQVEsRUFBRSxvQkFBSztBQUFDZixpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUFjO0FBRm5CO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJLHFFQUFDLHdFQUFEO0FBQ0ksa0JBQVksRUFBQyxTQURqQjtBQUVJLGtCQUFZLEVBQUUsS0FGbEI7QUFHSSxVQUFJLEVBQUVELElBSFY7QUFJSSx5QkFBbUIsRUFBRUUsS0FBSyxDQUFDZSxNQUFOLENBQWEsVUFBQVQsSUFBSSxFQUFJO0FBQUMsZUFBT0EsSUFBSSxDQUFDRyxFQUFaO0FBQWUsT0FBckMsQ0FKekI7QUFLSSxpQkFBVyxFQUFFLHFCQUFDTixRQUFELEVBQWM7QUFBQ0QsdUJBQWUsQ0FBQ0MsUUFBRCxDQUFmO0FBQTBCLE9BTDFEO0FBTUksY0FBUSxFQUFFO0FBQUEsZUFBS0osT0FBTyxDQUFDLEtBQUQsQ0FBWjtBQUFBO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBZ0JJLHFFQUFDLHFEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsNkJBQ0kscUVBQUMsc0RBQUQ7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUF1QixnQkFBUSxNQUEvQjtBQUFBLGdDQUNJLHFFQUFDLHVEQUFEO0FBQUEsa0NBQ0EscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLHFCQUFTLE1BQXpCO0FBQUEsbUNBQ0kscUVBQUMsdURBQUQ7QUFBUSx1QkFBUyxFQUNiLHFCQUFNO0FBQ0ZZLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsZUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsRUFRQ1osS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQVcsT0FBTyxFQUFJO0FBQ2xCLGdDQUNBLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixpQkFBRyxNQUFuQjtBQUFBLHFDQUNJLHFFQUFDLCtEQUFEO0FBQWEsb0JBQUksRUFBRUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFLSCxXQU5BLENBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBaUJJLHFFQUFDLHNEQUFEO0FBQU8sc0JBQVksRUFBQyxVQUFwQjtBQUFBLGlDQUNRLHFFQUFDLHVEQUFEO0FBQVEsbUJBQU8sRUFBRSxJQUFqQjtBQUF1QixtQkFBTyxFQUFFLG1CQUFLO0FBQUNqQixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUFjLGFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQXBERDs7R0FBTUgsSzs7S0FBQUEsSztBQXNEU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgUGFnZSxcbiAgICBMYXlvdXQsXG4gICAgQmFubmVyLFxuICAgIEJ1dHRvbixcbiAgICBDYXJkLFxuICAgIFNrZWxldG9uQm9keVRleHQsXG4gICAgU3RhY2ssXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmltcG9ydCBQcm9kdWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkJztcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW0l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIHJlc291cmNlLnNlbGVjdGlvbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBJdGVtcy5maW5kSW5kZXgob2xkSXRlbSA9PiBvbGRJdGVtLmlkID09PSBpdGVtLmlkKSA9PSAtMSA/IHNldEl0ZW1zKG9sZEFycmF5ID0+IFsuLi5vbGRBcnJheSwgaXRlbV0pIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgIH0gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSB0aXRsZT0nQ3Jvc3MtU2VsbCcgc3VidGl0bGU9J1NldCBQcm9kdWN0cycgc2VwYXJhdG9yPlxuICAgICAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgICAgICAgdGl0bGU9J1NhbXBsZSBBcHAnXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OidTZWxlY3QgUHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCk9PiB7c2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uSWRzPXtJdGVtcy5maWx0ZXIoaXRlbSA9PiB7cmV0dXJuIGl0ZW0uaWR9KX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJlc291cmNlKX19XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPSdsb29zZScgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIG9uRGlzbWlzcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzbWlzc2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9PkEgd29yayBpbiBwcm9ncmVzczwvQmFubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7SXRlbXMubWFwKFByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENhcmQgaXRlbT17UHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPSd0cmFpbGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PntzZXRPcGVuKHRydWUpfX0+U2VsZWN0IFByb2R1Y3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})