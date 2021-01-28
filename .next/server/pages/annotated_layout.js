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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated_layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated_layout.js":
/*!***********************************!*\
  !*** ./pages/annotated_layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/annotated_layout.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      discount: '10%',\n      enabled: false\n    });\n\n    _defineProperty(this, \"handleSubmit\", () => {\n      this.setState({\n        discount: this.state.discount\n      });\n      console.log('submission', this.state);\n    });\n\n    _defineProperty(this, \"handleChange\", name => {\n      return value => this.setState({\n        [name]: value\n      });\n    });\n\n    _defineProperty(this, \"handleToogle\", () => {\n      this.setState(({\n        enabled\n      }) => {\n        return {\n          enabled: !enabled\n        };\n      });\n    });\n  }\n\n  render() {\n    const {\n      discount,\n      enabled\n    } = this.state;\n    const contentStatus = enabled ? 'Disabled' : 'Enabled';\n    const textStatus = enabled ? 'Enabled' : 'Disabeld';\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_3__[\"TitleBar\"], {\n        title: \"Annotated Layout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n            onDismiss: () => {\n              console.log('Dismissed');\n            },\n            children: \"A work in progress\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Default Discount\",\n          description: \"Add a product to Sample App, it will automatically be discounted\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            sectioned: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n              onSubmit: this.handleSubmit,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"FormLayout\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextField\"], {\n                  value: discount,\n                  onChange: this.handleChange('discount'),\n                  label: \"Discount\",\n                  type: \"discount\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 46,\n                  columnNumber: 37\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n                  distribution: \"trailing\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    primary: true,\n                    submit: true,\n                    children: \"Save\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 48,\n                    columnNumber: 41\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 37\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].AnnotatedSection, {\n          title: \"Toogle Discount\",\n          description: \"Enable or Disable the discounts for your products\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"SettingToggle\"], {\n            action: {\n              content: contentStatus,\n              onAction: this.handleToogle\n            },\n            enabled: enabled,\n            children: [\"this setting is \", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"TextStyle\"], {\n              variation: \"strong\",\n              children: textStatus\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 29\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnnotatedLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hbm5vdGF0ZWRfbGF5b3V0LmpzPzUwODAiXSwibmFtZXMiOlsiQW5ub3RhdGVkTGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNjb3VudCIsImVuYWJsZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlVG9vZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFOLFNBQThCQyw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE4QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2xDO0FBQ0pDLGNBQVEsRUFBRSxLQUROO0FBRUpDLGFBQU8sRUFBRTtBQUZMLEtBRGtDOztBQUFBLDBDQU0zQixNQUFNO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUNWRixnQkFBUSxFQUFFLEtBQUtHLEtBQUwsQ0FBV0g7QUFEWCxPQUFkO0FBR0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEIsS0FBS0YsS0FBL0I7QUFDSCxLQVh5Qzs7QUFBQSwwQ0FhMUJHLElBQUQsSUFBVTtBQUNyQixhQUFRQyxLQUFELElBQVcsS0FBS0wsUUFBTCxDQUFjO0FBQUUsU0FBQ0ksSUFBRCxHQUFRQztBQUFWLE9BQWQsQ0FBbEI7QUFDSCxLQWZ5Qzs7QUFBQSwwQ0FnQjNCLE1BQU07QUFDakIsV0FBS0wsUUFBTCxDQUFjLENBQUM7QUFBQ0Q7QUFBRCxPQUFELEtBQWU7QUFDekIsZUFBTztBQUFFQSxpQkFBTyxFQUFFLENBQUNBO0FBQVosU0FBUDtBQUNILE9BRkQ7QUFHSCxLQXBCeUM7QUFBQTs7QUFxQjFDTyxRQUFNLEdBQUc7QUFFTixVQUFNO0FBQUVSLGNBQUY7QUFBWUM7QUFBWixRQUF3QixLQUFLRSxLQUFuQztBQUNBLFVBQU1NLGFBQWEsR0FBR1IsT0FBTyxHQUFHLFVBQUgsR0FBZ0IsU0FBN0M7QUFDQSxVQUFNUyxVQUFVLEdBQUdULE9BQU8sR0FBRyxTQUFILEdBQWUsVUFBekM7QUFDQyx3QkFDSSxxRUFBQyxxREFBRDtBQUFBLDhCQUNJLHFFQUFDLGtFQUFEO0FBQVUsYUFBSyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHVEQUFEO0FBQUEsZ0NBQ0kscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQUEsaUNBQ0kscUVBQUMsdURBQUQ7QUFBUSxxQkFBUyxFQUNiLE1BQU07QUFDRkcscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSCxhQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQVFJLHFFQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFBeUIsZUFBSyxFQUFDLGtCQUEvQjtBQUFrRCxxQkFBVyxFQUFDLGtFQUE5RDtBQUFBLGlDQUNJLHFFQUFDLHFEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFBLG1DQUNJLHFFQUFDLHFEQUFEO0FBQU0sc0JBQVEsRUFBRSxLQUFLTSxZQUFyQjtBQUFBLHFDQUNJLHFFQUFDLDJEQUFEO0FBQUEsd0NBQ0kscUVBQUMsMERBQUQ7QUFBVyx1QkFBSyxFQUFFWCxRQUFsQjtBQUE0QiwwQkFBUSxFQUFFLEtBQUtZLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBdEM7QUFBcUUsdUJBQUssRUFBQyxVQUEzRTtBQUFzRixzQkFBSSxFQUFDO0FBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSSxxRUFBQyxzREFBRDtBQUFPLDhCQUFZLEVBQUMsVUFBcEI7QUFBQSx5Q0FDSSxxRUFBQyx1REFBRDtBQUFRLDJCQUFPLE1BQWY7QUFBZ0IsMEJBQU0sTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSixlQXNCSSxxRUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQXlCLGVBQUssRUFBQyxpQkFBL0I7QUFBaUQscUJBQVcsRUFBQyxtREFBN0Q7QUFBQSxpQ0FDSSxxRUFBQyw4REFBRDtBQUNJLGtCQUFNLEVBQUU7QUFDSkMscUJBQU8sRUFBRUosYUFETDtBQUVKSyxzQkFBUSxFQUFFLEtBQUtDO0FBRlgsYUFEWjtBQUtJLG1CQUFPLEVBQUVkLE9BTGI7QUFBQSwyQ0FPcUIsR0FQckIsZUFRSSxxRUFBQywwREFBRDtBQUFXLHVCQUFTLEVBQUMsUUFBckI7QUFBQSx3QkFBK0JTO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUF3Q0g7O0FBbEV5Qzs7QUFvRS9CYiw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Fubm90YXRlZF9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQYWdlLCBMYXlvdXQsIENhcmQsIEJhbm5lciwgQnV0dG9uLCBGb3JtLCBGb3JtTGF5b3V0LCBUZXh0RmllbGQsIFN0YWNrLCBTZXR0aW5nVG9nZ2xlLCBUZXh0U3R5bGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xuaW1wb3J0IHsgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcblxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZGlzY291bnQ6ICcxMCUnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRpc2NvdW50OiB0aGlzLnN0YXRlLmRpc2NvdW50XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbbmFtZV06IHZhbHVlfSk7XG4gICAgfVxuICAgIGhhbmRsZVRvb2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe2VuYWJsZWR9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBlbmFibGVkOiAhZW5hYmxlZH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgXG4gICAgICAgY29uc3QgeyBkaXNjb3VudCwgZW5hYmxlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICBjb25zdCBjb250ZW50U3RhdHVzID0gZW5hYmxlZCA/ICdEaXNhYmxlZCcgOiAnRW5hYmxlZCc7XG4gICAgICAgY29uc3QgdGV4dFN0YXR1cyA9IGVuYWJsZWQgPyAnRW5hYmxlZCcgOiAnRGlzYWJlbGQnO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhZ2U+XG4gICAgICAgICAgICAgICAgPFRpdGxlQmFyIHRpdGxlPSdBbm5vdGF0ZWQgTGF5b3V0JyAvPlxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgb25EaXNtaXNzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNtaXNzZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0+QSB3b3JrIGluIHByb2dyZXNzPC9CYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIkRlZmF1bHQgRGlzY291bnRcIiBkZXNjcmlwdGlvbj1cIkFkZCBhIHByb2R1Y3QgdG8gU2FtcGxlIEFwcCwgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGRpc2NvdW50ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2Rpc2NvdW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9IGxhYmVsPSdEaXNjb3VudCcgdHlwZT0nZGlzY291bnQnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBkaXN0cmlidXRpb249XCJ0cmFpbGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LkFubm90YXRlZFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuQW5ub3RhdGVkU2VjdGlvbiB0aXRsZT1cIlRvb2dsZSBEaXNjb3VudFwiIGRlc2NyaXB0aW9uPVwiRW5hYmxlIG9yIERpc2FibGUgdGhlIGRpc2NvdW50cyBmb3IgeW91ciBwcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246IHRoaXMuaGFuZGxlVG9vZ2xlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZD17ZW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzIHNldHRpbmcgaXMgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj0nc3Ryb25nJz57dGV4dFN0YXR1c308L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2V0dGluZ1RvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuQW5ub3RhdGVkU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEFubm90YXRlZExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/annotated_layout.js\n");

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