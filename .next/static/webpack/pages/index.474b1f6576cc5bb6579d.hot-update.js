webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ResourceList/index.js":
/*!******************************************!*\
  !*** ./components/ResourceList/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store-js */ \"./node_modules/store-js/dist/store.legacy.js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/components/ResourceList/index.js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\nquery getProducts($ids: [ID!]!){\\n    nodes(ids: $ids){\\n        ... on Product {\\n            title\\n            handle \\n            descriptionHtml\\n            id\\n            images(first: 1){\\n                edges{\\n                    node{\\n                        originalSrc\\n                        altText\\n                    }\\n                }\\n            }\\n            variants(first: 1){\\n                edges{\\n                    node{\\n                        price\\n                        id\\n                    }\\n                }\\n            }\\n        }\\n    }\\n}\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\n\nvar ResourceListWithProducts = function ResourceListWithProducts() {\n  var twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__[\"Query\"], {\n    query: GET_PRODUCTS_BY_ID,\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids')\n    },\n    children: function children(_ref) {\n      var data = _ref.data,\n          loading = _ref.loading,\n          error = _ref.error;\n\n      if (loading) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Loading\\u2026\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 35\n        }, _this);\n      }\n\n      if (error) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 33\n        }, _this);\n      }\n\n      console.log(data);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"ResourceList\"], {\n          showHeader: true,\n          resourceName: {\n            singular: 'Product',\n            plural: 'Products'\n          },\n          items: data.nodes,\n          renderItem: function renderItem(item) {\n            var media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Thumbnail\"], {\n              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',\n              alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, _this);\n\n            var price = item.variants.edges[0].node.price;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"ResourceList\"].Item, {\n              id: item.id,\n              media: media,\n              accessibilityLabel: \"View details for \".concat(item.title),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, {\n                  fill: true,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"TextStyle\"], {\n                      variation: \"strong\",\n                      children: item.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 80,\n                      columnNumber: 29\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\"$\", price]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 25\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"].Item, {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: item.descrip\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 27\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 88,\n                  columnNumber: 25\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__[\"Stack\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: twoWeeksFromNow\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 25\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 23\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 21\n            }, _this);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }, _this);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ResourceListWithProducts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);\n\nvar _c;\n\n$RefreshReg$(_c, \"ResourceListWithProducts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QvaW5kZXguanM/Y2RjZSJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJ0d29XZWVrc0Zyb21Ob3ciLCJEYXRlIiwibm93IiwidG9EYXRlU3RyaW5nIiwiaWRzIiwic3RvcmUiLCJnZXQiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzaW5ndWxhciIsInBsdXJhbCIsIm5vZGVzIiwiaXRlbSIsIm1lZGlhIiwiaW1hZ2VzIiwiZWRnZXMiLCJub2RlIiwib3JpZ2luYWxTcmMiLCJhbHRUZXh0IiwicHJpY2UiLCJ2YXJpYW50cyIsImlkIiwidGl0bGUiLCJkZXNjcmlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxrREFBSCxtQkFBeEI7O0FBNEJBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUMvQixNQUFNQyxlQUFlLEdBQUcsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYSxPQUF0QixFQUErQkMsWUFBL0IsRUFBeEI7QUFDQSxzQkFDQSxxRUFBQyxrREFBRDtBQUFPLFNBQUssRUFBRU4sa0JBQWQ7QUFBa0MsYUFBUyxFQUFFO0FBQUVPLFNBQUcsRUFBRUMsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUCxLQUE3QztBQUFBLGNBQ0csd0JBQThCO0FBQUEsVUFBM0JDLElBQTJCLFFBQTNCQSxJQUEyQjtBQUFBLFVBQXJCQyxPQUFxQixRQUFyQkEsT0FBcUI7QUFBQSxVQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzdCLFVBQUlELE9BQUosRUFBYTtBQUFFLDRCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQTZCOztBQUM1QyxVQUFJQyxLQUFKLEVBQVc7QUFBRSw0QkFBTztBQUFBLG9CQUFNQSxLQUFLLENBQUNDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUFvQzs7QUFDakRDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsMEJBQ0UscUVBQUMscURBQUQ7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUNBLG9CQUFVLE1BRFY7QUFFQSxzQkFBWSxFQUFFO0FBQUVNLG9CQUFRLEVBQUUsU0FBWjtBQUF1QkMsa0JBQU0sRUFBRTtBQUEvQixXQUZkO0FBR0EsZUFBSyxFQUFFUCxJQUFJLENBQUNRLEtBSFo7QUFJQSxvQkFBVSxFQUFFLG9CQUFBQyxJQUFJLEVBQUk7QUFDbEIsZ0JBQU1DLEtBQUssZ0JBQ1QscUVBQUMsMERBQUQ7QUFDRSxvQkFBTSxFQUNKRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFdBRDlCLEdBRUksRUFKUjtBQU1FLGlCQUFHLEVBQ0RMLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQ0lILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkUsT0FEOUIsR0FFSTtBQVRSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7O0FBY0EsZ0JBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCRyxLQUExQztBQUNBLGdDQUNFLHFFQUFDLDZEQUFELENBQWMsSUFBZDtBQUNFLGdCQUFFLEVBQUVQLElBQUksQ0FBQ1MsRUFEWDtBQUVFLG1CQUFLLEVBQUVSLEtBRlQ7QUFHRSxnQ0FBa0IsNkJBQXNCRCxJQUFJLENBQUNVLEtBQTNCLENBSHBCO0FBQUEsc0NBS0UscUVBQUMsc0RBQUQ7QUFBQSx3Q0FDRSxxRUFBQyxzREFBRCxDQUFPLElBQVA7QUFBWSxzQkFBSSxNQUFoQjtBQUFBLHlDQUNFO0FBQUEsMkNBQ0UscUVBQUMsMERBQUQ7QUFBVywrQkFBUyxFQUFDLFFBQXJCO0FBQUEsZ0NBQ0dWLElBQUksQ0FBQ1U7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFRRSxxRUFBQyxzREFBRCxDQUFPLElBQVA7QUFBQSx5Q0FDRTtBQUFBLG9DQUFLSCxLQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkYsZUFXRSxxRUFBQyxzREFBRCxDQUFPLElBQVA7QUFBQSx5Q0FDRTtBQUFBLDhCQUFJUCxJQUFJLENBQUNXO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLGVBb0JFLHFFQUFDLHNEQUFEO0FBQUEsdUNBQ0U7QUFBQSw0QkFBSTNCO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQTBCRDtBQTlDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0RIO0FBekREO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTZETCxDQS9ESDs7S0FBTUQsd0I7QUFnRVNBLHVGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCAgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgXG4gICAgQ2FyZCxcbiAgICBSZXNvdXJjZUxpc3QsXG4gICAgU3RhY2ssIFxuICAgIFRleHRTdHlsZSxcbiAgICBUaHVtYm5haWwsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKXtcbiAgICBub2RlcyhpZHM6ICRpZHMpe1xuICAgICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlIFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKXtcbiAgICAgICAgICAgICAgICBlZGdlc3tcbiAgICAgICAgICAgICAgICAgICAgbm9kZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXJpYW50cyhmaXJzdDogMSl7XG4gICAgICAgICAgICAgICAgZWRnZXN7XG4gICAgICAgICAgICAgICAgICAgIG5vZGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1gO1xuXG5jb25zdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XG4gICAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSB7IHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47IH1cbiAgICAgICAgICAgIGlmIChlcnJvcikgeyByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47IH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnIH19XG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5kZXNjcmlwfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0d29XZWVrc0Zyb21Ob3d9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ResourceList/index.js\n");

/***/ })

})