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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/index.js\";\n\n\n\n\nconst Index = () => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: Items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const handleSelection = resource => {\n    setOpen(false);\n    setItems(oldResouce => [...oldResouce, resource]);\n    console.log(resource.selection);\n    console.log(Items);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: () => {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      onSelection: resource => {\n        handleSelection(resource);\n      },\n      onCancel: () => setOpen(false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n              onDismiss: () => {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 21\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            primary: true,\n            onClick: () => {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIkl0ZW1zIiwic2V0SXRlbXMiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZSIsIm9sZFJlc291Y2UiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0aW9uIiwiY29udGVudCIsIm9uQWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsc0RBQVEsQ0FBQyxFQUFELENBQWxDOztBQUNBLFFBQU1HLGVBQWUsR0FBSUMsUUFBRCxJQUFjO0FBQ2pDTCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQ0csVUFBVSxJQUFJLENBQUMsR0FBR0EsVUFBSixFQUFnQkQsUUFBaEIsQ0FBZixDQUFSO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLFNBQXJCO0FBQ0FGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixLQUFaO0FBQ0osR0FMRDs7QUFPQyxzQkFDSSxxRUFBQyxxREFBRDtBQUFNLFNBQUssRUFBQyxZQUFaO0FBQXlCLFlBQVEsRUFBQyxjQUFsQztBQUFpRCxhQUFTLE1BQTFEO0FBQUEsNEJBQ0kscUVBQUMsa0VBQUQ7QUFDSSxXQUFLLEVBQUMsWUFEVjtBQUVJLG1CQUFhLEVBQUU7QUFDWFEsZUFBTyxFQUFDLGlCQURHO0FBRVhDLGdCQUFRLEVBQUUsTUFBSztBQUFDWCxpQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUFjO0FBRm5CO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSSxxRUFBQyx3RUFBRDtBQUNJLGtCQUFZLEVBQUMsU0FEakI7QUFFSSxrQkFBWSxFQUFFLEtBRmxCO0FBR0ksVUFBSSxFQUFFRCxJQUhWO0FBSUksaUJBQVcsRUFBR00sUUFBRCxJQUFjO0FBQUNELHVCQUFlLENBQUNDLFFBQUQsQ0FBZjtBQUEwQixPQUoxRDtBQUtJLGNBQVEsRUFBRSxNQUFLTCxPQUFPLENBQUMsS0FBRDtBQUwxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJKLGVBZUkscUVBQUMscURBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQXVCLGdCQUFRLE1BQS9CO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQ7QUFBQSxpQ0FDQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0IscUJBQVMsTUFBekI7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFRLHVCQUFTLEVBQ2IsTUFBTTtBQUNGTyx1QkFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNILGVBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQVdJLHFFQUFDLHNEQUFEO0FBQU8sc0JBQVksRUFBQyxVQUFwQjtBQUFBLGlDQUNRLHFFQUFDLHVEQUFEO0FBQVEsbUJBQU8sRUFBRSxJQUFqQjtBQUF1QixtQkFBTyxFQUFFLE1BQUs7QUFBQ1IscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYyxhQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW1DSCxDQTdDRDs7QUErQ2VGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIFBhZ2UsXG4gICAgTWVkaWFDYXJkLFxuICAgIExheW91dCxcbiAgICBDYXJkLFxuICAgIEJhbm5lcixcbiAgICBCdXR0b24sXG4gICAgU2tlbGV0b25Cb2R5VGV4dCxcbiAgICBTdGFjayxcbiAgICBCdXR0b25Hcm91cFxufSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcbmltcG9ydCB7IFRpdGxlQmFyLCBSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtJdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlKSA9PiB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRJdGVtcyhvbGRSZXNvdWNlID0+IFsuLi5vbGRSZXNvdWNlLCByZXNvdXJjZV0pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc291cmNlLnNlbGVjdGlvbik7XG4gICAgICAgIGNvbnNvbGUubG9nKEl0ZW1zKTtcbiAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIHRpdGxlPSdDcm9zcy1TZWxsJyBzdWJ0aXRsZT0nU2V0IFByb2R1Y3RzJyBzZXBhcmF0b3I+XG4gICAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgICAgICB0aXRsZT0nU2FtcGxlIEFwcCdcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6J1NlbGVjdCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKT0+IHtzZXRPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2UpID0+IHtoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2UpfX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCk9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9J2xvb3NlJyB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgb25EaXNtaXNzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+QSB3b3JrIGluIHByb2dyZXNzPC9CYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2sgZGlzdHJpYnV0aW9uPSd0cmFpbGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PXt0cnVlfSBvbkNsaWNrPXsoKSA9PntzZXRPcGVuKHRydWUpfX0+U2VsZWN0IFByb2R1Y3RzPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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