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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/components/ProductCard/index.js\";\n\n\n\n\nconst ProductCard = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"MediaCard\"], {\n    portrait: true,\n    title: props.item.title,\n    popoverActions: [{\n      content: 'dismiss',\n      onAction: () => {\n        props.dismiss(props.item.id);\n      }\n    }],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.item.images[0].originalSrc,\n      style: {\n        objectFit: 'cover',\n        objectPosition: 'center',\n        width: '100%'\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, undefined)\n  }, props.item.id, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)\n}, void 0, false);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL2luZGV4LmpzPzhiOTMiXSwibmFtZXMiOlsiUHJvZHVjdENhcmQiLCJwcm9wcyIsIml0ZW0iLCJ0aXRsZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsImRpc21pc3MiLCJpZCIsImltYWdlcyIsIm9yaWdpbmFsU3JjIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsaUJBQ2hCO0FBQUEseUJBQ0EscUVBQUMsMERBQUQ7QUFDSSxZQUFRLE1BRFo7QUFHSSxTQUFLLEVBQUVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUh0QjtBQUlJLGtCQUFjLEVBQUUsQ0FBQztBQUFDQyxhQUFPLEVBQUMsU0FBVDtBQUFvQkMsY0FBUSxFQUFDLE1BQUs7QUFBQ0osYUFBSyxDQUFDSyxPQUFOLENBQWNMLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxFQUF6QjtBQUE2QjtBQUFoRSxLQUFELENBSnBCO0FBQUEsMkJBTUk7QUFBSyxTQUFHLEVBQUVOLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxXQUEvQjtBQUE0QyxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBQyxPQUFYO0FBQW9CQyxzQkFBYyxFQUFDLFFBQW5DO0FBQTZDQyxhQUFLLEVBQUM7QUFBbkQ7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KLEtBRVNYLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxFQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsaUJBREo7O0FBZWVQLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZWRpYUNhcmQgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmNvbnN0IFByb2R1Y3RDYXJkID0gKHByb3BzKSA9PiAoXG4gICAgPD5cbiAgICA8TWVkaWFDYXJkIFxuICAgICAgICBwb3J0cmFpdCBcbiAgICAgICAga2V5PXtwcm9wcy5pdGVtLmlkfSBcbiAgICAgICAgdGl0bGU9e3Byb3BzLml0ZW0udGl0bGV9XG4gICAgICAgIHBvcG92ZXJBY3Rpb25zPXtbe2NvbnRlbnQ6J2Rpc21pc3MnLCBvbkFjdGlvbjooKT0+IHtwcm9wcy5kaXNtaXNzKHByb3BzLml0ZW0uaWQpfX1dfVxuICAgICAgICA+XG4gICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pdGVtLmltYWdlc1swXS5vcmlnaW5hbFNyY30gc3R5bGU9e3tvYmplY3RGaXQ6J2NvdmVyJywgb2JqZWN0UG9zaXRpb246J2NlbnRlcicsIHdpZHRoOicxMDAlJ319Lz5cbiAgICA8L01lZGlhQ2FyZD5cbiAgICA8Lz5cblxuKVxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductCard/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard/index.js\");\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\";\n\n\n\n\n\nconst Index = () => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: Items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const handleSelection = resource => {\n    setOpen(false);\n    resource.selection.map(item => {\n      Items.findIndex(oldItem => oldItem.id === item.id) == -1 ? setItems(oldArray => [...oldArray, item]) : null;\n      console.log(item);\n    });\n  };\n\n  const handleRemove = id => {\n    console.log(`${id} needs to be Dismissed`);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: () => {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      initialSelectionIds: Items.filter(item => {\n        return item.id;\n      }),\n      onSelection: resource => {\n        handleSelection(resource);\n      },\n      onCancel: () => setOpen(false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n              onDismiss: () => {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 21\n          }, undefined), Items.map(Product => {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n              oneThird: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                item: Product,\n                dismiss: handleRemove\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 29\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, undefined);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            primary: true,\n            onClick: () => {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIkl0ZW1zIiwic2V0SXRlbXMiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZSIsInNlbGVjdGlvbiIsIm1hcCIsIml0ZW0iLCJmaW5kSW5kZXgiLCJvbGRJdGVtIiwiaWQiLCJvbGRBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZW1vdmUiLCJjb250ZW50Iiwib25BY3Rpb24iLCJmaWx0ZXIiLCJQcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBVUE7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFFBQU1HLGVBQWUsR0FBSUMsUUFBRCxJQUFjO0FBQ2pDTCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FLLFlBQVEsQ0FBQ0MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUJDLElBQUksSUFBSTtBQUMzQk4sV0FBSyxDQUFDTyxTQUFOLENBQWdCQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlSCxJQUFJLENBQUNHLEVBQS9DLEtBQXNELENBQUMsQ0FBdkQsR0FBMkRSLFFBQVEsQ0FBQ1MsUUFBUSxJQUFJLENBQUMsR0FBR0EsUUFBSixFQUFjSixJQUFkLENBQWIsQ0FBbkUsR0FBdUcsSUFBdkc7QUFDQUssYUFBTyxDQUFDQyxHQUFSLENBQVlOLElBQVo7QUFDSCxLQUhEO0FBSUosR0FORDs7QUFPQSxRQUFNTyxZQUFZLEdBQUlKLEVBQUQsSUFBUTtBQUN4QkUsV0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUgsRUFBRyx3QkFBbEI7QUFDSixHQUZEOztBQUdDLHNCQUNJLHFFQUFDLHFEQUFEO0FBQU0sU0FBSyxFQUFDLFlBQVo7QUFBeUIsWUFBUSxFQUFDLGNBQWxDO0FBQWlELGFBQVMsTUFBMUQ7QUFBQSw0QkFDSSxxRUFBQyxrRUFBRDtBQUNJLFdBQUssRUFBQyxZQURWO0FBRUksbUJBQWEsRUFBRTtBQUNYSyxlQUFPLEVBQUMsaUJBREc7QUFFWEMsZ0JBQVEsRUFBRSxNQUFLO0FBQUNqQixpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUFjO0FBRm5CO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSSxxRUFBQyx3RUFBRDtBQUNJLGtCQUFZLEVBQUMsU0FEakI7QUFFSSxrQkFBWSxFQUFFLEtBRmxCO0FBR0ksVUFBSSxFQUFFRCxJQUhWO0FBSUkseUJBQW1CLEVBQUVHLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYVYsSUFBSSxJQUFJO0FBQUMsZUFBT0EsSUFBSSxDQUFDRyxFQUFaO0FBQWUsT0FBckMsQ0FKekI7QUFLSSxpQkFBVyxFQUFHTixRQUFELElBQWM7QUFBQ0QsdUJBQWUsQ0FBQ0MsUUFBRCxDQUFmO0FBQTBCLE9BTDFEO0FBTUksY0FBUSxFQUFFLE1BQUtMLE9BQU8sQ0FBQyxLQUFEO0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFnQkkscUVBQUMscURBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQXVCLGdCQUFRLE1BQS9CO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBQSxrQ0FDQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IscUJBQVMsTUFBekI7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFRLHVCQUFTLEVBQ2IsTUFBTTtBQUNGYSx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGVBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBLEVBUUNaLEtBQUssQ0FBQ0ssR0FBTixDQUFVWSxPQUFPLElBQUk7QUFDbEIsZ0NBQ0EscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLHNCQUFRLE1BQXhCO0FBQUEscUNBQ0kscUVBQUMsK0RBQUQ7QUFBYSxvQkFBSSxFQUFFQSxPQUFuQjtBQUE0Qix1QkFBTyxFQUFFSjtBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEQTtBQUtILFdBTkEsQ0FSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFpQkkscUVBQUMsc0RBQUQ7QUFBTyxzQkFBWSxFQUFDLFVBQXBCO0FBQUEsaUNBQ1EscUVBQUMsdURBQUQ7QUFBUSxtQkFBTyxFQUFFLElBQWpCO0FBQXVCLG1CQUFPLEVBQUUsTUFBSztBQUFDZixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUFjLGFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwQ0gsQ0F2REQ7O0FBeURlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIExheW91dCxcbiAgICBCYW5uZXIsXG4gICAgQnV0dG9uLFxuICAgIENhcmQsXG4gICAgU2tlbGV0b25Cb2R5VGV4dCxcbiAgICBTdGFjayxcbiAgICBCdXR0b25Hcm91cFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFRpdGxlQmFyLCBSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmQnO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbSXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgIGNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZSkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgICAgcmVzb3VyY2Uuc2VsZWN0aW9uLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIEl0ZW1zLmZpbmRJbmRleChvbGRJdGVtID0+IG9sZEl0ZW0uaWQgPT09IGl0ZW0uaWQpID09IC0xID8gc2V0SXRlbXMob2xkQXJyYXkgPT4gWy4uLm9sZEFycmF5LCBpdGVtXSkgOiBudWxsO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIH0pO1xuICAgfSAgIFxuICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2lkfSBuZWVkcyB0byBiZSBEaXNtaXNzZWRgKVxuICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIHRpdGxlPSdDcm9zcy1TZWxsJyBzdWJ0aXRsZT0nU2V0IFByb2R1Y3RzJyBzZXBhcmF0b3I+XG4gICAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgICAgICB0aXRsZT0nU2FtcGxlIEFwcCdcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6J1NlbGVjdCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKT0+IHtzZXRPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgIGluaXRpYWxTZWxlY3Rpb25JZHM9e0l0ZW1zLmZpbHRlcihpdGVtID0+IHtyZXR1cm4gaXRlbS5pZH0pfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2UpID0+IHtoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2UpfX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCk9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9J2xvb3NlJyB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgb25EaXNtaXNzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+QSB3b3JrIGluIHByb2dyZXNzPC9CYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIHtJdGVtcy5tYXAoUHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lVGhpcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGl0ZW09e1Byb2R1Y3R9IGRpc21pc3M9e2hhbmRsZVJlbW92ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249J3RyYWlsaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IG9uQ2xpY2s9eygpID0+e3NldE9wZW4odHJ1ZSl9fT5TZWxlY3QgUHJvZHVjdHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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