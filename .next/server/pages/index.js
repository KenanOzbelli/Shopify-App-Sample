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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/kenanozbelli/Documents/Coding Projects/Sample-embedded-app/pages/index.js\";\n\n\n\n\nconst Index = () => {\n  const {\n    0: open,\n    1: setOpen\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: Items,\n    1: setItems\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const handleSelection = resource => {\n    setOpen(false);\n    resource.selection.map(item => {\n      Items.findIndex(oldItem => oldItem.id === item.id) == -1 ? setItems(oldArray => [...oldArray, item]) : console.log(\"Can't add\");\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    title: \"Cross-Sell\",\n    subtitle: \"Set Products\",\n    separator: true,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n      title: \"Sample App\",\n      primaryAction: {\n        content: 'Select Products',\n        onAction: () => {\n          setOpen(true);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"ResourcePicker\"], {\n      resourceType: \"Product\",\n      showVariants: false,\n      open: open,\n      onSelection: resource => {\n        handleSelection(resource);\n      },\n      onCancel: () => setOpen(false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n              onDismiss: () => {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            children: Items.map(Product => {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                    children: Product.handle\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 34\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 30\n                }, undefined)\n              }, void 0, false);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n            primary: true,\n            onClick: () => {\n              setOpen(true);\n            },\n            children: \"Select Products\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 29\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwib3BlbiIsInNldE9wZW4iLCJ1c2VTdGF0ZSIsIkl0ZW1zIiwic2V0SXRlbXMiLCJoYW5kbGVTZWxlY3Rpb24iLCJyZXNvdXJjZSIsInNlbGVjdGlvbiIsIm1hcCIsIml0ZW0iLCJmaW5kSW5kZXgiLCJvbGRJdGVtIiwiaWQiLCJvbGRBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjb250ZW50Iiwib25BY3Rpb24iLCJQcm9kdWN0IiwiaGFuZGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEtBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQzs7QUFDQSxRQUFNRyxlQUFlLEdBQUlDLFFBQUQsSUFBYztBQUNqQ0wsV0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBSyxZQUFRLENBQUNDLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCQyxJQUFJLElBQUk7QUFDM0JOLFdBQUssQ0FBQ08sU0FBTixDQUFnQkMsT0FBTyxJQUFJQSxPQUFPLENBQUNDLEVBQVIsS0FBZUgsSUFBSSxDQUFDRyxFQUEvQyxLQUFzRCxDQUFDLENBQXZELEdBQTJEUixRQUFRLENBQUNTLFFBQVEsSUFBSSxDQUFDLEdBQUdBLFFBQUosRUFBY0osSUFBZCxDQUFiLENBQW5FLEdBQXVHSyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLENBQXZHO0FBQ0gsS0FGRDtBQUdKLEdBTEQ7O0FBTUMsc0JBQ0kscUVBQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsWUFBWjtBQUF5QixZQUFRLEVBQUMsY0FBbEM7QUFBaUQsYUFBUyxNQUExRDtBQUFBLDRCQUNJLHFFQUFDLGtFQUFEO0FBQ0ksV0FBSyxFQUFDLFlBRFY7QUFFSSxtQkFBYSxFQUFFO0FBQ1hDLGVBQU8sRUFBQyxpQkFERztBQUVYQyxnQkFBUSxFQUFFLE1BQUs7QUFBQ2hCLGlCQUFPLENBQUMsSUFBRCxDQUFQO0FBQWM7QUFGbkI7QUFGbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVFJLHFFQUFDLHdFQUFEO0FBQ0ksa0JBQVksRUFBQyxTQURqQjtBQUVJLGtCQUFZLEVBQUUsS0FGbEI7QUFHSSxVQUFJLEVBQUVELElBSFY7QUFJSSxpQkFBVyxFQUFHTSxRQUFELElBQWM7QUFBQ0QsdUJBQWUsQ0FBQ0MsUUFBRCxDQUFmO0FBQTBCLE9BSjFEO0FBS0ksY0FBUSxFQUFFLE1BQUtMLE9BQU8sQ0FBQyxLQUFEO0FBTDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkosZUFlSSxxRUFBQyxxREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNBLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixxQkFBUyxNQUF6QjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixNQUFNO0FBQ0ZhLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsZUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFRQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBQSxzQkFDQ1osS0FBSyxDQUFDSyxHQUFOLENBQVVVLE9BQU8sSUFBSTtBQUNsQixrQ0FDSTtBQUFBLHVDQUNDLHFFQUFDLHFEQUFEO0FBQUEseUNBQ0k7QUFBQSw4QkFBSUEsT0FBTyxDQUFDQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsK0JBREo7QUFPSCxhQVJBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFxQkkscUVBQUMsc0RBQUQ7QUFBTyxzQkFBWSxFQUFDLFVBQXBCO0FBQUEsaUNBQ1EscUVBQUMsdURBQUQ7QUFBUSxtQkFBTyxFQUFFLElBQWpCO0FBQXVCLG1CQUFPLEVBQUUsTUFBSztBQUFDbEIscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFBYyxhQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2Q0gsQ0F0REQ7O0FBd0RlRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIE1lZGlhQ2FyZCxcbiAgICBMYXlvdXQsXG4gICAgQ2FyZCxcbiAgICBCYW5uZXIsXG4gICAgQnV0dG9uLFxuICAgIFNrZWxldG9uQm9keVRleHQsXG4gICAgU3RhY2ssXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQgeyBUaXRsZUJhciwgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW0l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XG4gICBjb25zdCBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2UpID0+IHtcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XG4gICAgICAgIHJlc291cmNlLnNlbGVjdGlvbi5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBJdGVtcy5maW5kSW5kZXgob2xkSXRlbSA9PiBvbGRJdGVtLmlkID09PSBpdGVtLmlkKSA9PSAtMSA/IHNldEl0ZW1zKG9sZEFycmF5ID0+IFsuLi5vbGRBcnJheSwgaXRlbV0pIDogY29uc29sZS5sb2coXCJDYW4ndCBhZGRcIik7XG4gICAgICAgIH0pO1xuICAgfSAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlIHRpdGxlPSdDcm9zcy1TZWxsJyBzdWJ0aXRsZT0nU2V0IFByb2R1Y3RzJyBzZXBhcmF0b3I+XG4gICAgICAgICAgICA8VGl0bGVCYXJcbiAgICAgICAgICAgICAgICB0aXRsZT0nU2FtcGxlIEFwcCdcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6J1NlbGVjdCBQcm9kdWN0cycsXG4gICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKT0+IHtzZXRPcGVuKHRydWUpfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2UpID0+IHtoYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2UpfX1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCk9PiBzZXRPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XG4gICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9J2xvb3NlJyB2ZXJ0aWNhbD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIGZ1bGxXaWR0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgb25EaXNtaXNzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+QSB3b3JrIGluIHByb2dyZXNzPC9CYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge0l0ZW1zLm1hcChQcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntQcm9kdWN0LmhhbmRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249J3RyYWlsaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk9e3RydWV9IG9uQ2xpY2s9eygpID0+e3NldE9wZW4odHJ1ZSl9fT5TZWxlY3QgUHJvZHVjdHM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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