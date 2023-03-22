/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/add.js":
/*!**************************!*\
  !*** ./functions/add.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction add(a, b){\r\n    return a + b; \r\n}\r\n\r\n\r\n//module.exports = add; \r\n//module.exports = add\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add); \n\n//# sourceURL=webpack://modules/./functions/add.js?");

/***/ }),

/***/ "./functions/addAndMultiply.js":
/*!*************************************!*\
  !*** ./functions/addAndMultiply.js ***!
  \*************************************/
/***/ ((module) => {

eval("\r\nfunction addAndMultiply(a, b, c){\r\n    return (a + b) * c; \r\n}\r\n\r\n//module.exports = add; \r\nmodule.exports = addAndMultiply\r\n\n\n//# sourceURL=webpack://modules/./functions/addAndMultiply.js?");

/***/ }),

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"addAndMultiply\": () => (/* reexport default from dynamic */ _addAndMultiply__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   \"subtract\": () => (/* reexport safe */ _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./functions/add.js\");\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./functions/subtract.js\");\n/* harmony import */ var _addAndMultiply__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAndMultiply */ \"./functions/addAndMultiply.js\");\n/* harmony import */ var _addAndMultiply__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_addAndMultiply__WEBPACK_IMPORTED_MODULE_2__);\n// const add  = require('./add')\r\n// const subtract = require('./subtract')\r\n// const addAndMultiply = require('./addAndMultiply')\r\n\r\n\r\n\r\n\r\n\r\n//module.exports = {  add, addAndMultiply, subtract}\r\n\r\n\n\n//# sourceURL=webpack://modules/./functions/index.js?");

/***/ }),

/***/ "./functions/subtract.js":
/*!*******************************!*\
  !*** ./functions/subtract.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction subtract(a, b){\r\n    return a - b; \r\n}\r\n\r\n//module.exports = subtract; \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subtract); \n\n//# sourceURL=webpack://modules/./functions/subtract.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions/index.js\");\n//const add = require(\"./functions/add\")\r\n//const {add, addAndMultiply, subtract} = require(\"./functions\")\r\n\r\n\r\nconst output = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.add)(1,2)\r\nconst output1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addAndMultiply)(1, 2, 3)\r\n\r\nconsole.log(output)\r\nconsole.log(output1)\n\n//# sourceURL=webpack://modules/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;