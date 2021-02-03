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

/***/ "./components/ProductCard/index.js":
/*!*****************************************!*\
  !*** ./components/ProductCard/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/components/ProductCard/index.js\";\n\n\n\n\nconst ProductCard = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"MediaCard\"], {\n    portrait: true,\n    title: props.item.title,\n    popoverActions: [{\n      content: 'dismiss',\n      onAction: () => {\n        props.dismiss(props.item.id);\n      }\n    }],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.item.images[0] ? props.item.images[0].originalSrc : 'http://via.placeholder.com/926x617',\n      style: {\n        objectFit: 'contain',\n        objectPosition: 'center',\n        width: '100%'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined)\n  }, props.item.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL2luZGV4LmpzPzhiOTMiXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImRpc21pc3MiLCJpZCIsImltYWdlcyIsIm9yaWdpbmFsU3JjIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsaUJBQ2hCO0FBQUEseUJBQ0EscUVBQUMsMERBQUQ7QUFDSSxZQUFRLE1BRFo7QUFHSSxTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUh0QjtBQUlJLGtCQUFjLEVBQUUsQ0FBQztBQUFDQyxhQUFPLEVBQUMsU0FBVDtBQUFvQkMsY0FBUSxFQUFDLE1BQUs7QUFBQ0osYUFBSyxDQUFDSyxPQUFOLENBQWNMLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxFQUF6QjtBQUE2QjtBQUFoRSxLQUFELENBSnBCO0FBQUEsMkJBTUk7QUFBSyxTQUFHLEVBQUVOLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxNQUFYLENBQWtCLENBQWxCLElBQXVCUCxLQUFLLENBQUNDLElBQU4sQ0FBV00sTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsV0FBNUMsR0FBMEQsb0NBQXBFO0FBQTBHLFdBQUssRUFBRTtBQUFDQyxpQkFBUyxFQUFDLFNBQVg7QUFBc0JDLHNCQUFjLEVBQUMsUUFBckM7QUFBK0NDLGFBQUssRUFBQztBQUFyRDtBQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkosS0FFU1gsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEVBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxpQkFESjs7QUFlZVAsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lZGlhQ2FyZCB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuY29uc3QgUHJvZHVjdENhcmQgPSAocHJvcHMpID0+IChcbiAgICA8PlxuICAgIDxNZWRpYUNhcmQgXG4gICAgICAgIHBvcnRyYWl0IFxuICAgICAgICBrZXk9e3Byb3BzLml0ZW0uaWR9IFxuICAgICAgICB0aXRsZT17cHJvcHMuaXRlbS50aXRsZX1cbiAgICAgICAgcG9wb3ZlckFjdGlvbnM9e1t7Y29udGVudDonZGlzbWlzcycsIG9uQWN0aW9uOigpPT4ge3Byb3BzLmRpc21pc3MocHJvcHMuaXRlbS5pZCl9fV19XG4gICAgICAgID5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLml0ZW0uaW1hZ2VzWzBdID8gcHJvcHMuaXRlbS5pbWFnZXNbMF0ub3JpZ2luYWxTcmMgOiAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vOTI2eDYxNyd9IHN0eWxlPXt7b2JqZWN0Rml0Oidjb250YWluJywgb2JqZWN0UG9zaXRpb246J2NlbnRlcicsIHdpZHRoOicxMDAlJ319Lz5cbiAgICA8L01lZGlhQ2FyZD5cbiAgICA8Lz5cblxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductCard/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard/index.js\");\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\";\n\n\n\n\n\nconst Index = props => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: Items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const handleSelection = resource => {\n    setOpen(false);\n    resource.selection.map(item => {\n      Items.findIndex(oldItem => oldItem.id === item.id) == -1 ? setItems(oldArray => [...oldArray, item]) : null;\n    });\n  };\n\n  const handleRemove = id => {\n    console.log(`${id} needs to be Dismissed`);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: () => {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      initialSelectionIds: Items.filter(item => {\n        return item.id;\n      }),\n      onSelection: resource => {\n        handleSelection(resource);\n      },\n      onCancel: () => setOpen(false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n              onDismiss: () => {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 21\n          }, undefined), Items.map(Product => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n              oneThird: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                item: Product,\n                dismiss: handleRemove\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 29\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, undefined);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            primary: true,\n            onClick: () => {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJvcGVuIiwic2V0T3BlbiIsInVzZVN0YXRlIiwiSXRlbXMiLCJzZXRJdGVtcyIsImhhbmRsZVNlbGVjdGlvbiIsInJlc291cmNlIiwic2VsZWN0aW9uIiwibWFwIiwiaXRlbSIsImZpbmRJbmRleCIsIm9sZEl0ZW0iLCJpZCIsIm9sZEFycmF5IiwiaGFuZGxlUmVtb3ZlIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImZpbHRlciIsIlByb2R1Y3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFVQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3RCLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxLQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7O0FBRUEsUUFBTUcsZUFBZSxHQUFJQyxRQUFELElBQWM7QUFDakNMLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDQUssWUFBUSxDQUFDQyxTQUFULENBQW1CQyxHQUFuQixDQUF1QkMsSUFBSSxJQUFJO0FBQzNCTixXQUFLLENBQUNPLFNBQU4sQ0FBZ0JDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVILElBQUksQ0FBQ0csRUFBL0MsS0FBc0QsQ0FBQyxDQUF2RCxHQUEyRFIsUUFBUSxDQUFDUyxRQUFRLElBQUksQ0FBQyxHQUFHQSxRQUFKLEVBQWNKLElBQWQsQ0FBYixDQUFuRSxHQUF1RyxJQUF2RztBQUNILEtBRkQ7QUFHSixHQUxEOztBQU1BLFFBQU1LLFlBQVksR0FBSUYsRUFBRCxJQUFRO0FBQ3hCRyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxHQUFFSixFQUFHLHdCQUFsQjtBQUNKLEdBRkQ7O0FBR0Msc0JBQ0kscUVBQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUF5QixZQUFRLEVBQUMsY0FBbEM7QUFBaUQsYUFBUyxNQUExRDtBQUFBLDRCQUNJLHFFQUFDLGtFQUFEO0FBQ0ksV0FBSyxFQUFDLFlBRFY7QUFFSSxtQkFBYSxFQUFFO0FBQ1hLLGVBQU8sRUFBQyxpQkFERztBQUVYQyxnQkFBUSxFQUFFLE1BQUs7QUFBQ2pCLGlCQUFPLENBQUMsSUFBRCxDQUFQO0FBQWM7QUFGbkI7QUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVFJLHFFQUFDLHdFQUFEO0FBQ0ksa0JBQVksRUFBQyxTQURqQjtBQUVJLGtCQUFZLEVBQUUsS0FGbEI7QUFHSSxVQUFJLEVBQUVELElBSFY7QUFJSSx5QkFBbUIsRUFBRUcsS0FBSyxDQUFDZ0IsTUFBTixDQUFhVixJQUFJLElBQUk7QUFBQyxlQUFPQSxJQUFJLENBQUNHLEVBQVo7QUFBZSxPQUFyQyxDQUp6QjtBQUtJLGlCQUFXLEVBQUdOLFFBQUQsSUFBYztBQUFDRCx1QkFBZSxDQUFDQyxRQUFELENBQWY7QUFBMEIsT0FMMUQ7QUFNSSxjQUFRLEVBQUUsTUFBS0wsT0FBTyxDQUFDLEtBQUQ7QUFOMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSixlQWdCSSxxRUFBQyxxREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNBLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixxQkFBUyxNQUF6QjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixNQUFNO0FBQ0ZjLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsZUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsRUFRQ2IsS0FBSyxDQUFDSyxHQUFOLENBQVVZLE9BQU8sSUFBSTtBQUNsQixnQ0FDQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0Isc0JBQVEsTUFBeEI7QUFBQSxxQ0FDSSxxRUFBQywrREFBRDtBQUFhLG9CQUFJLEVBQUVBLE9BQW5CO0FBQTRCLHVCQUFPLEVBQUVOO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURBO0FBS0gsV0FOQSxDQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQWlCSSxxRUFBQyxzREFBRDtBQUFPLHNCQUFZLEVBQUMsVUFBcEI7QUFBQSxpQ0FDUSxxRUFBQyx1REFBRDtBQUFRLG1CQUFPLEVBQUUsSUFBakI7QUFBdUIsbUJBQU8sRUFBRSxNQUFLO0FBQUNiLHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBQWMsYUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTBDSCxDQXZERDs7QUF5RGVILG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFBhZ2UsXG4gICAgTGF5b3V0LFxuICAgIEJhbm5lcixcbiAgICBCdXR0b24sXG4gICAgQ2FyZCxcbiAgICBTa2VsZXRvbkJvZHlUZXh0LFxuICAgIFN0YWNrLFxuICAgIEJ1dHRvbkdyb3VwXG59IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgVGl0bGVCYXIsIFJlc291cmNlUGlja2VyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdCc7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZCc7XG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW0l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgcmVzb3VyY2Uuc2VsZWN0aW9uLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIEl0ZW1zLmZpbmRJbmRleChvbGRJdGVtID0+IG9sZEl0ZW0uaWQgPT09IGl0ZW0uaWQpID09IC0xID8gc2V0SXRlbXMob2xkQXJyYXkgPT4gWy4uLm9sZEFycmF5LCBpdGVtXSkgOiBudWxsO1xuICAgICAgICB9KTtcbiAgIH0gICBcbiAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9IChpZCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtpZH0gbmVlZHMgdG8gYmUgRGlzbWlzc2VkYClcbiAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZSB0aXRsZT0nQ3Jvc3MtU2VsbCcgc3VidGl0bGU9J1NldCBQcm9kdWN0cycgc2VwYXJhdG9yPlxuICAgICAgICAgICAgPFRpdGxlQmFyXG4gICAgICAgICAgICAgICAgdGl0bGU9J1NhbXBsZSBBcHAnXG4gICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OidTZWxlY3QgUHJvZHVjdHMnLFxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCk9PiB7c2V0T3Blbih0cnVlKX1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxuICAgICAgICAgICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxuICAgICAgICAgICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBpbml0aWFsU2VsZWN0aW9uSWRzPXtJdGVtcy5maWx0ZXIoaXRlbSA9PiB7cmV0dXJuIGl0ZW0uaWR9KX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlKSA9PiB7aGFuZGxlU2VsZWN0aW9uKHJlc291cmNlKX19XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpPT4gc2V0T3BlbihmYWxzZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxuICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPSdsb29zZScgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBmdWxsV2lkdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QmFubmVyIG9uRGlzbWlzcz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGlzbWlzc2VkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9PkEgd29yayBpbiBwcm9ncmVzczwvQmFubmVyPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7SXRlbXMubWFwKFByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZVRoaXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q2FyZCBpdGVtPXtQcm9kdWN0fSBkaXNtaXNzPXtoYW5kbGVSZW1vdmV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPSd0cmFpbGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PntzZXRPcGVuKHRydWUpfX0+U2VsZWN0IFByb2R1Y3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });