"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout */ \"./pages/components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar html = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"Index\"\n}, void 0, false, {\n    fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n    lineNumber: 3,\n    columnNumber: 14\n}, undefined);\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                content: html\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Post, {\n                title: \"Hello next js\"\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n        lineNumber: 5,\n        columnNumber: 12\n    }, _this);\n};\n_c = Home;\nfunction Post(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/post?title=\".concat(props.title),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: props.title\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n_c1 = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBeUM7QUFDWjtBQUM3QixJQUFNRSxJQUFJLGlCQUFHLDhEQUFDQyxJQUFFO2NBQUMsT0FBSzs7Ozs7YUFBSztBQUMzQixJQUFNQyxJQUFJLEdBQUcsV0FBTTtJQUNmLHFCQUFPLDhEQUFDQyxLQUFHOzswQkFFUCw4REFBQ0wsMERBQU07Z0JBQUNNLE9BQU8sRUFBRUosSUFBSTs7Ozs7cUJBQVc7MEJBQ2hDLDhEQUFDSyxJQUFJO2dCQUFDQyxLQUFLLEVBQUMsZUFBZTs7Ozs7cUJBQVE7Ozs7OzthQUdqQztDQUNUO0FBUktKLEtBQUFBLElBQUk7QUFTVixTQUFTRyxJQUFJLENBQUNFLEtBQUssRUFBRTtJQUNqQixxQkFBTyw4REFBQ0osS0FBRztrQkFDUCw0RUFBQ0osa0RBQUk7WUFBQ1MsSUFBSSxFQUFFLGNBQWEsQ0FBYyxPQUFaRCxLQUFLLENBQUNELEtBQUssQ0FBRTtzQkFDcEMsNEVBQUNHLEdBQUM7MEJBQUdGLEtBQUssQ0FBQ0QsS0FBSzs7Ozs7b0JBQUs7Ozs7O2dCQUNsQjs7Ozs7WUFDTDtDQUNUO0FBTlFELE1BQUFBLElBQUk7QUFPYiwrREFBZUgsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IGh0bWwgPSA8aDE+SW5kZXg8L2gxPjtcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8TGF5b3V0IGNvbnRlbnQ9e2h0bWx9PjwvTGF5b3V0PlxyXG4gICAgICAgIDxQb3N0IHRpdGxlPVwiSGVsbG8gbmV4dCBqc1wiPjwvUG9zdD5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbn1cclxuZnVuY3Rpb24gUG9zdChwcm9wcykge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XHJcbiAgICAgICAgICAgIDxhPnsgcHJvcHMudGl0bGV9PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkxheW91dCIsIkxpbmsiLCJodG1sIiwiaDEiLCJIb21lIiwiZGl2IiwiY29udGVudCIsIlBvc3QiLCJ0aXRsZSIsInByb3BzIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});