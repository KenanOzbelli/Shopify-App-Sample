module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList/index.js":
/*!******************************************!*\
  !*** ./components/ResourceList/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ \"graphql-tag\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"react-apollo\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/components/ResourceList/index.js\";\n\n\n\n\n\nconst GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`\nquery getProducts($ids: [ID!]!){\n    nodes(ids: $ids){\n        ... on Product {\n            title\n            handle \n            descriptionHtml\n            id\n            images(first: 1){\n                edges{\n                    node{\n                        originalSrc\n                        altText\n                    }\n                }\n            }\n            variants(first: 1){\n                edges{\n                    node{\n                        price\n                        id\n                    }\n                }\n            }\n        }\n    }\n}`;\n\nconst ResourceListWithProducts = () => {\n  const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_apollo__WEBPACK_IMPORTED_MODULE_3__[\"Query\"], {\n    query: GET_PRODUCTS_BY_ID,\n    variables: {\n      ids: store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids')\n    },\n    children: ({\n      data,\n      loading,\n      error\n    }) => {\n      if (loading) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Loading\\u2026\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 35\n        }, undefined);\n      }\n\n      if (error) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: error.message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 33\n        }, undefined);\n      }\n\n      console.log(data);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"], {\n          showHeader: true,\n          resourceName: {\n            singular: 'Product',\n            plural: 'Products'\n          },\n          items: data.nodes,\n          renderItem: item => {\n            const media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Thumbnail\"], {\n              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',\n              alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, undefined);\n\n            const price = item.variants.edges[0].node.price;\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"ResourceList\"].Item, {\n              id: item.id,\n              media: media,\n              accessibilityLabel: `View details for ${item.title}`,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                  fill: true,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"TextStyle\"], {\n                      variation: \"strong\",\n                      children: item.title\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 80,\n                      columnNumber: 29\n                    }, undefined)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 79,\n                    columnNumber: 27\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 25\n                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"].Item, {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: [\"$\", price]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 86,\n                    columnNumber: 27\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 25\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 23\n              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__[\"Stack\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                  children: twoWeeksFromNow\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 25\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 23\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 21\n            }, undefined);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 15\n      }, undefined);\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResourceListWithProducts);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdC9pbmRleC5qcz9jZGNlIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyIsInR3b1dlZWtzRnJvbU5vdyIsIkRhdGUiLCJub3ciLCJ0b0RhdGVTdHJpbmciLCJpZHMiLCJzdG9yZSIsImdldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBLE1BQU1BLGtCQUFrQixHQUFHQyxrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBMUJBOztBQTRCQSxNQUFNQyx3QkFBd0IsR0FBRyxNQUFNO0FBQy9CLFFBQU1DLGVBQWUsR0FBRyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLE9BQXRCLEVBQStCQyxZQUEvQixFQUF4QjtBQUNBLHNCQUNBLHFFQUFDLGtEQUFEO0FBQU8sU0FBSyxFQUFFTixrQkFBZDtBQUFrQyxhQUFTLEVBQUU7QUFBRU8sU0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQLEtBQTdDO0FBQUEsY0FDRyxDQUFDO0FBQUVDLFVBQUY7QUFBUUMsYUFBUjtBQUFpQkM7QUFBakIsS0FBRCxLQUE4QjtBQUM3QixVQUFJRCxPQUFKLEVBQWE7QUFBRSw0QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUE2Qjs7QUFDNUMsVUFBSUMsS0FBSixFQUFXO0FBQUUsNEJBQU87QUFBQSxvQkFBTUEsS0FBSyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFBb0M7O0FBQ2pEQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNBLDBCQUNFLHFFQUFDLHFEQUFEO0FBQUEsK0JBQ0UscUVBQUMsNkRBQUQ7QUFDQSxvQkFBVSxNQURWO0FBRUEsc0JBQVksRUFBRTtBQUFFTSxvQkFBUSxFQUFFLFNBQVo7QUFBdUJDLGtCQUFNLEVBQUU7QUFBL0IsV0FGZDtBQUdBLGVBQUssRUFBRVAsSUFBSSxDQUFDUSxLQUhaO0FBSUEsb0JBQVUsRUFBRUMsSUFBSSxJQUFJO0FBQ2xCLGtCQUFNQyxLQUFLLGdCQUNULHFFQUFDLDBEQUFEO0FBQ0Usb0JBQU0sRUFDSkQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUQ5QixHQUVJLEVBSlI7QUFNRSxpQkFBRyxFQUNETCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BRDlCLEdBRUk7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGOztBQWNBLGtCQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSxnQ0FDRSxxRUFBQyw2REFBRCxDQUFjLElBQWQ7QUFDRSxnQkFBRSxFQUFFUCxJQUFJLENBQUNTLEVBRFg7QUFFRSxtQkFBSyxFQUFFUixLQUZUO0FBR0UsZ0NBQWtCLEVBQUcsb0JBQW1CRCxJQUFJLENBQUNVLEtBQU0sRUFIckQ7QUFBQSxzQ0FLRSxxRUFBQyxzREFBRDtBQUFBLHdDQUNFLHFFQUFDLHNEQUFELENBQU8sSUFBUDtBQUFZLHNCQUFJLE1BQWhCO0FBQUEseUNBQ0U7QUFBQSwyQ0FDRSxxRUFBQywwREFBRDtBQUFXLCtCQUFTLEVBQUMsUUFBckI7QUFBQSxnQ0FDR1YsSUFBSSxDQUFDVTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQVFFLHFFQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLHlDQUNFO0FBQUEsb0NBQUtILEtBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFpQkUscUVBQUMsc0RBQUQ7QUFBQSx1Q0FDRTtBQUFBLDRCQUFJdkI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBdUJEO0FBM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBaURIO0FBdEREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQTBETCxDQTVESDs7QUE2RGVELHVGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdxbCAgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgXG4gICAgQ2FyZCxcbiAgICBSZXNvdXJjZUxpc3QsXG4gICAgU3RhY2ssIFxuICAgIFRleHRTdHlsZSxcbiAgICBUaHVtYm5haWwsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcblxuY29uc3QgR0VUX1BST0RVQ1RTX0JZX0lEID0gZ3FsYFxucXVlcnkgZ2V0UHJvZHVjdHMoJGlkczogW0lEIV0hKXtcbiAgICBub2RlcyhpZHM6ICRpZHMpe1xuICAgICAgICAuLi4gb24gUHJvZHVjdCB7XG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgaGFuZGxlIFxuICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sXG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OiAxKXtcbiAgICAgICAgICAgICAgICBlZGdlc3tcbiAgICAgICAgICAgICAgICAgICAgbm9kZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXJpYW50cyhmaXJzdDogMSl7XG4gICAgICAgICAgICAgICAgZWRnZXN7XG4gICAgICAgICAgICAgICAgICAgIG5vZGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1gO1xuXG5jb25zdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHR3b1dlZWtzRnJvbU5vdyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyAxMjA5NmU1KS50b0RhdGVTdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XG4gICAgICAgICAgeyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nKSB7IHJldHVybiA8ZGl2PkxvYWRpbmfigKY8L2Rpdj47IH1cbiAgICAgICAgICAgIGlmIChlcnJvcikgeyByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47IH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3sgc2luZ3VsYXI6ICdQcm9kdWN0JywgcGx1cmFsOiAnUHJvZHVjdHMnIH19XG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYSA9IChcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLmFsdFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhPXttZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0U3R5bGUgdmFyaWF0aW9uPVwic3Ryb25nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0d29XZWVrc0Zyb21Ob3d9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfX1cbiAgICAgIDwvUXVlcnk+XG4gICAgKTtcbiAgfVxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ResourceList/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ \"store-js\");\n/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ResourceList */ \"./components/ResourceList/index.js\");\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"handleSelection\", resources => {\n      const itemArr = [];\n      const idArr = [];\n      resources.selection.map(item => {\n        itemArr.push(item);\n        idArr.push(item.id);\n      });\n      this.setState({\n        open: false\n      });\n      store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('items', itemArr);\n      store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idArr);\n    });\n  }\n\n  render() {\n    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"TitleBar\"], {\n        title: \"Sample App\",\n        primaryAction: {\n          content: 'Select products',\n          onAction: () => this.setState({\n            open: true\n          })\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__[\"ResourcePicker\"], {\n        resourceType: \"Product\",\n        showVariants: false,\n        open: this.state.open,\n        initialSelectionIds: store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('items').filter(item => {\n          return item.id;\n        }),\n        onSelection: resources => this.handleSelection(resources),\n        onCancel: () => this.setState({\n          open: false\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this), emptyState ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"EmptyState\"], {\n          heading: \"Select products to start\",\n          action: {\n            content: 'Select products',\n            onAction: () => this.setState({\n              open: true\n            })\n          },\n          image: img,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"Select products and change their price temporarily\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImltZyIsIkluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJvcGVuIiwicmVzb3VyY2VzIiwiaXRlbUFyciIsImlkQXJyIiwic2VsZWN0aW9uIiwibWFwIiwiaXRlbSIsInB1c2giLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJyZW5kZXIiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJmaWx0ZXIiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyxtRUFBWjs7QUFFQSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3hCO0FBQUNDLFVBQUksRUFBRTtBQUFQLEtBRHdCOztBQUFBLDZDQUdiQyxTQUFELElBQWU7QUFDN0IsWUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsWUFBTUMsS0FBSyxHQUFHLEVBQWQ7QUFFQUYsZUFBUyxDQUFDRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QkMsSUFBSSxJQUFJO0FBQzVCSixlQUFPLENBQUNLLElBQVIsQ0FBYUQsSUFBYjtBQUNBSCxhQUFLLENBQUNJLElBQU4sQ0FBV0QsSUFBSSxDQUFDRSxFQUFoQjtBQUNILE9BSEQ7QUFJQSxXQUFLQyxRQUFMLENBQWM7QUFBQ1QsWUFBSSxFQUFFO0FBQVAsT0FBZDtBQUNBVSxxREFBSyxDQUFDQyxHQUFOLENBQVUsT0FBVixFQUFtQlQsT0FBbkI7QUFDQVEscURBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBaUJSLEtBQWpCO0FBQ0gsS0FkK0I7QUFBQTs7QUFnQmhDUyxRQUFNLEdBQUk7QUFDTixVQUFNQyxVQUFVLEdBQUcsQ0FBQ0gsK0NBQUssQ0FBQ0ksR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDQSx3QkFDQSxxRUFBQyxxREFBRDtBQUFBLDhCQUNJLHFFQUFDLGtFQUFEO0FBQ0EsYUFBSyxFQUFDLFlBRE47QUFFQSxxQkFBYSxFQUFFO0FBQ1hDLGlCQUFPLEVBQUUsaUJBREU7QUFFWEMsa0JBQVEsRUFBRSxNQUFNLEtBQUtQLFFBQUwsQ0FBYztBQUFDVCxnQkFBSSxFQUFFO0FBQVAsV0FBZDtBQUZMO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBUUkscUVBQUMsd0VBQUQ7QUFDQSxvQkFBWSxFQUFDLFNBRGI7QUFFQSxvQkFBWSxFQUFFLEtBRmQ7QUFHQSxZQUFJLEVBQUUsS0FBS2lCLEtBQUwsQ0FBV2pCLElBSGpCO0FBSUEsMkJBQW1CLEVBQUVVLCtDQUFLLENBQUNJLEdBQU4sQ0FBVSxPQUFWLEVBQW1CSSxNQUFuQixDQUEwQlosSUFBSSxJQUFJO0FBQUMsaUJBQU9BLElBQUksQ0FBQ0UsRUFBWjtBQUFlLFNBQWxELENBSnJCO0FBS0EsbUJBQVcsRUFBR1AsU0FBRCxJQUFlLEtBQUtrQixlQUFMLENBQXFCbEIsU0FBckIsQ0FMNUI7QUFNQSxnQkFBUSxFQUFFLE1BQU0sS0FBS1EsUUFBTCxDQUFjO0FBQUNULGNBQUksRUFBRTtBQUFQLFNBQWQ7QUFOaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKLEVBZ0JLYSxVQUFVLGdCQUNYLHFFQUFDLHVEQUFEO0FBQUEsK0JBQ0EscUVBQUMsMkRBQUQ7QUFDSSxpQkFBTyxFQUFDLDBCQURaO0FBRUksZ0JBQU0sRUFBRTtBQUNSRSxtQkFBTyxFQUFFLGlCQUREO0FBRVJDLG9CQUFRLEVBQUUsTUFBTSxLQUFLUCxRQUFMLENBQWM7QUFBQ1Qsa0JBQUksRUFBRTtBQUFQLGFBQWQ7QUFGUixXQUZaO0FBTUksZUFBSyxFQUFFSixHQU5YO0FBQUEsaUNBUUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGdCQWNYLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREE7QUFvQ0w7O0FBdERpQzs7QUF3RHJCQyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgUGFnZSxcbiAgICBMYXlvdXQsXG4gICAgQmFubmVyLFxuICAgIFN0YWNrLFxuICAgIEVtcHR5U3RhdGUsXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcbmltcG9ydCB7IFRpdGxlQmFyLCBSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XG5cbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtvcGVuOiBmYWxzZX1cblxuICAgIGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUFyciA9IFtdXG4gICAgICAgIGNvbnN0IGlkQXJyID0gW11cblxuICAgICAgICByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW1BcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGlkQXJyLnB1c2goaXRlbS5pZClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICAgICAgc3RvcmUuc2V0KCdpdGVtcycsIGl0ZW1BcnIpO1xuICAgICAgICBzdG9yZS5zZXQoJ2lkcycsIGlkQXJyKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxUaXRsZUJhclxuICAgICAgICAgICAgdGl0bGU9XCJTYW1wbGUgQXBwXCJcbiAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgIGluaXRpYWxTZWxlY3Rpb25JZHM9e3N0b3JlLmdldCgnaXRlbXMnKS5maWx0ZXIoaXRlbSA9PiB7cmV0dXJuIGl0ZW0uaWR9KX1cbiAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2VzKSA9PiB0aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2VtcHR5U3RhdGUgPyAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEVtcHR5U3RhdGVcbiAgICAgICAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcbiAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcbiAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltZ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgKTooXG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L1BhZ2UgPlxuICAgICAgICApO1xuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tag\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiP2Y4YjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JhcGhxbC10YWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-tag\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-apollo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hcG9sbG9cIj8yMGU2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWFwb2xsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFwb2xsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-apollo\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"store-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiP2QxYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3RvcmUtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///store-js\n");

/***/ })

/******/ });