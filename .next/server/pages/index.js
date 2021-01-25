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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kenanozbelli/Desktop/Sample-embedded-app/pages/index.js\";\n\n\n\nconst Index = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Page\"], {\n    title: \"Menu Item\",\n    subtitle: \"Secondary Menu Item\",\n    separator: true,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      sectioned: true,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n        spacing: \"loose\",\n        vertical: true,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            fullWidth: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Banner\"], {\n              onDismiss: () => {\n                console.log('Dismissed');\n              },\n              children: \"A work in progress\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 25\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            oneThird: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"MediaCard\"], {\n              portrait: true,\n              title: \"Test-App\",\n              description: \"Testing The Design of Polaris\",\n              primaryAction: {\n                content: \"Add a Product\",\n                onAction: () => {\n                  console.log('Product Added');\n                }\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                alt: \"Mountains\",\n                width: \"100%\",\n                style: {\n                  objectFit: 'cover',\n                  objectPosition: 'center'\n                },\n                src: \"https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 37\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 33\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            oneThird: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"MediaCard\"], {\n              portrait: true,\n              title: \"Test-App\",\n              description: \"Testing The Design of Polaris\",\n              primaryAction: {\n                content: \"Add a Product\",\n                onAction: () => {\n                  console.log('Product Added');\n                }\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                alt: \"Mountains\",\n                width: \"100%\",\n                style: {\n                  objectFit: 'cover',\n                  objectPosition: 'center'\n                },\n                src: \"https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 37\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 33\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Section, {\n            oneThird: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"MediaCard\"], {\n              portrait: true,\n              title: \"Test-App\",\n              description: \"Testing The Design of Polaris\",\n              primaryAction: {\n                content: \"Add a Product\",\n                onAction: () => {\n                  console.log('Product Added');\n                }\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                alt: \"Mountains\",\n                width: \"100%\",\n                style: {\n                  objectFit: 'cover',\n                  objectPosition: 'center'\n                },\n                src: \"https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=925&format=pjpg&exif=1&iptc=1 1x, https://burst.shopifycdn.com/photos/icy-summit-of-a-mountain-on-a-frosty-night.jpg?width=1850&format=pjpg&exif=1&iptc=1 2x\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 37\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 33\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Stack\"], {\n          distribution: \"trailing\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"ButtonGroup\"], {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              primary: true,\n              children: \"Add a Product\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 29\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              style: {\n                color: 'red'\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                outline: true,\n                monochrome: true,\n                children: \"Delete a Product\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 33\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 92,\n              columnNumber: 29\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBWUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFFaEIsc0JBQ0kscUVBQUMscURBQUQ7QUFBTSxTQUFLLEVBQUMsV0FBWjtBQUF3QixZQUFRLEVBQUMscUJBQWpDO0FBQXVELGFBQVMsTUFBaEU7QUFBQSwyQkFDSSxxRUFBQyxxREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBQSxnQ0FDSSxxRUFBQyx1REFBRDtBQUFBLGtDQUNBLHFFQUFDLHVEQUFELENBQVEsT0FBUjtBQUFnQixxQkFBUyxNQUF6QjtBQUFBLG1DQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQVMsRUFDYixNQUFNO0FBQ0ZDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0gsZUFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREEsZUFRQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0Isb0JBQVEsTUFBeEI7QUFBQSxtQ0FDWSxxRUFBQywwREFBRDtBQUFXLHNCQUFRLE1BQW5CO0FBQW9CLG1CQUFLLEVBQUMsVUFBMUI7QUFBcUMseUJBQVcsRUFBQywrQkFBakQ7QUFDSSwyQkFBYSxFQUNUO0FBQ0lDLHVCQUFPLEVBQUUsZUFEYjtBQUVJQyx3QkFBUSxFQUFFLE1BQU07QUFDWkgseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSDtBQUpMLGVBRlI7QUFBQSxxQ0FTSTtBQUFLLG1CQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBSyxFQUFDLE1BQTNCO0FBQ0kscUJBQUssRUFDRDtBQUNJRywyQkFBUyxFQUFFLE9BRGY7QUFFSUMsZ0NBQWMsRUFBRTtBQUZwQixpQkFGUjtBQU9JLG1CQUFHLEVBQUM7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkEsZUE0QkEscUVBQUMsdURBQUQsQ0FBUSxPQUFSO0FBQWdCLG9CQUFRLE1BQXhCO0FBQUEsbUNBQ1kscUVBQUMsMERBQUQ7QUFBVyxzQkFBUSxNQUFuQjtBQUFvQixtQkFBSyxFQUFDLFVBQTFCO0FBQXFDLHlCQUFXLEVBQUMsK0JBQWpEO0FBQ0ksMkJBQWEsRUFDVDtBQUNJSCx1QkFBTyxFQUFFLGVBRGI7QUFFSUMsd0JBQVEsRUFBRSxNQUFNO0FBQ1pILHlCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7QUFKTCxlQUZSO0FBQUEscUNBU0k7QUFBSyxtQkFBRyxFQUFDLFdBQVQ7QUFBcUIscUJBQUssRUFBQyxNQUEzQjtBQUNJLHFCQUFLLEVBQ0Q7QUFDSUcsMkJBQVMsRUFBRSxPQURmO0FBRUlDLGdDQUFjLEVBQUU7QUFGcEIsaUJBRlI7QUFPSSxtQkFBRyxFQUFDO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTVCQSxlQWdEQSxxRUFBQyx1REFBRCxDQUFRLE9BQVI7QUFBZ0Isb0JBQVEsTUFBeEI7QUFBQSxtQ0FDWSxxRUFBQywwREFBRDtBQUFXLHNCQUFRLE1BQW5CO0FBQW9CLG1CQUFLLEVBQUMsVUFBMUI7QUFBcUMseUJBQVcsRUFBQywrQkFBakQ7QUFDSSwyQkFBYSxFQUNUO0FBQ0lILHVCQUFPLEVBQUUsZUFEYjtBQUVJQyx3QkFBUSxFQUFFLE1BQU07QUFDWkgseUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSDtBQUpMLGVBRlI7QUFBQSxxQ0FTSTtBQUFLLG1CQUFHLEVBQUMsV0FBVDtBQUFxQixxQkFBSyxFQUFDLE1BQTNCO0FBQ0kscUJBQUssRUFDRDtBQUNJRywyQkFBUyxFQUFFLE9BRGY7QUFFSUMsZ0NBQWMsRUFBRTtBQUZwQixpQkFGUjtBQU9JLG1CQUFHLEVBQUM7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQXNFSSxxRUFBQyxzREFBRDtBQUFPLHNCQUFZLEVBQUMsVUFBcEI7QUFBQSxpQ0FDSSxxRUFBQyw0REFBRDtBQUFBLG9DQUNJLHFFQUFDLHVEQUFEO0FBQVEscUJBQU8sRUFBRSxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQU0sbUJBQUssRUFBRTtBQUFDQyxxQkFBSyxFQUFDO0FBQVAsZUFBYjtBQUFBLHFDQUNJLHFFQUFDLHVEQUFEO0FBQVEsdUJBQU8sRUFBRSxJQUFqQjtBQUF1QiwwQkFBVSxNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0RUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFGSCxDQXZGRDs7QUF5RmVQLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgICBQYWdlLFxuICAgIE1lZGlhQ2FyZCxcbiAgICBMYXlvdXQsXG4gICAgQ2FyZCxcbiAgICBCYW5uZXIsXG4gICAgQnV0dG9uLFxuICAgIFNrZWxldG9uQm9keVRleHQsXG4gICAgU3RhY2ssXG4gICAgQnV0dG9uR3JvdXBcbn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2UgdGl0bGU9J01lbnUgSXRlbScgc3VidGl0bGU9J1NlY29uZGFyeSBNZW51IEl0ZW0nIHNlcGFyYXRvcj5cbiAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cbiAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz0nbG9vc2UnIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gZnVsbFdpZHRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBvbkRpc21pc3M9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc21pc3NlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfT5BIHdvcmsgaW4gcHJvZ3Jlc3M8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uIG9uZVRoaXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVkaWFDYXJkIHBvcnRyYWl0IHRpdGxlPSdUZXN0LUFwcCcgZGVzY3JpcHRpb249XCJUZXN0aW5nIFRoZSBEZXNpZ24gb2YgUG9sYXJpc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiQWRkIGEgUHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2R1Y3QgQWRkZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PSdNb3VudGFpbnMnIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0UG9zaXRpb246ICdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9idXJzdC5zaG9waWZ5Y2RuLmNvbS9waG90b3MvaWN5LXN1bW1pdC1vZi1hLW1vdW50YWluLW9uLWEtZnJvc3R5LW5pZ2h0LmpwZz93aWR0aD05MjUmZm9ybWF0PXBqcGcmZXhpZj0xJmlwdGM9MSAxeCwgaHR0cHM6Ly9idXJzdC5zaG9waWZ5Y2RuLmNvbS9waG90b3MvaWN5LXN1bW1pdC1vZi1hLW1vdW50YWluLW9uLWEtZnJvc3R5LW5pZ2h0LmpwZz93aWR0aD0xODUwJmZvcm1hdD1wanBnJmV4aWY9MSZpcHRjPTEgMnhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVkaWFDYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24gb25lVGhpcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYUNhcmQgcG9ydHJhaXQgdGl0bGU9J1Rlc3QtQXBwJyBkZXNjcmlwdGlvbj1cIlRlc3RpbmcgVGhlIERlc2lnbiBvZiBQb2xhcmlzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJBZGQgYSBQcm9kdWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdCBBZGRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9J01vdW50YWlucycgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RQb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2J1cnN0LnNob3BpZnljZG4uY29tL3Bob3Rvcy9pY3ktc3VtbWl0LW9mLWEtbW91bnRhaW4tb24tYS1mcm9zdHktbmlnaHQuanBnP3dpZHRoPTkyNSZmb3JtYXQ9cGpwZyZleGlmPTEmaXB0Yz0xIDF4LCBodHRwczovL2J1cnN0LnNob3BpZnljZG4uY29tL3Bob3Rvcy9pY3ktc3VtbWl0LW9mLWEtbW91bnRhaW4tb24tYS1mcm9zdHktbmlnaHQuanBnP3dpZHRoPTE4NTAmZm9ybWF0PXBqcGcmZXhpZj0xJmlwdGM9MSAyeFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZWRpYUNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbiBvbmVUaGlyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhQ2FyZCBwb3J0cmFpdCB0aXRsZT0nVGVzdC1BcHAnIGRlc2NyaXB0aW9uPVwiVGVzdGluZyBUaGUgRGVzaWduIG9mIFBvbGFyaXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkFkZCBhIFByb2R1Y3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0IEFkZGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD0nTW91bnRhaW5zJyB3aWR0aD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFBvc2l0aW9uOiAnY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYnVyc3Quc2hvcGlmeWNkbi5jb20vcGhvdG9zL2ljeS1zdW1taXQtb2YtYS1tb3VudGFpbi1vbi1hLWZyb3N0eS1uaWdodC5qcGc/d2lkdGg9OTI1JmZvcm1hdD1wanBnJmV4aWY9MSZpcHRjPTEgMXgsIGh0dHBzOi8vYnVyc3Quc2hvcGlmeWNkbi5jb20vcGhvdG9zL2ljeS1zdW1taXQtb2YtYS1tb3VudGFpbi1vbi1hLWZyb3N0eS1uaWdodC5qcGc/d2lkdGg9MTg1MCZmb3JtYXQ9cGpwZyZleGlmPTEmaXB0Yz0xIDJ4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lZGlhQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj0ndHJhaWxpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT17dHJ1ZX0+QWRkIGEgUHJvZHVjdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvdXRsaW5lPXt0cnVlfSBtb25vY2hyb21lPkRlbGV0ZSBhIFByb2R1Y3Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L1BhZ2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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