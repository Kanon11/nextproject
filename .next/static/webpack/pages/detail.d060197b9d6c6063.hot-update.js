"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail",{

/***/ "./pages/components/pageddComponent.js":
/*!*********************************************!*\
  !*** ./pages/components/pageddComponent.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pagedd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagedd */ \"./pages/components/pagedd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar PageddComponent = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var toggle = function() {\n        setOpen(!open);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"nav-link dropdown-toggle\",\n                onClick: toggle,\n                children: \"Pages\"\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\pageddComponent.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: _pagedd__WEBPACK_IMPORTED_MODULE_1__.PageDDLinks.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: item.link,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                children: item.linkName\n                            }, void 0, false, {\n                                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\pageddComponent.js\",\n                                lineNumber: 17,\n                                columnNumber: 56\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\pageddComponent.js\",\n                            lineNumber: 17,\n                            columnNumber: 33\n                        }, _this1)\n                    }, index, false, {\n                        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\pageddComponent.js\",\n                        lineNumber: 16,\n                        columnNumber: 29\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\pageddComponent.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(PageddComponent, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = PageddComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageddComponent);\nvar _c;\n$RefreshReg$(_c, \"PageddComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3BhZ2VkZENvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYjtBQUNHOztBQUM3QixJQUFNRyxlQUFlLEdBQUcsV0FBTTs7O0lBQzFCLElBQXdCRixHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxDQUFDLE1BQXRDSSxJQUFJLEdBQWFKLEdBQXFCLEdBQWxDLEVBQUVLLE9BQU8sR0FBSUwsR0FBcUIsR0FBekI7SUFDcEIsSUFBTU0sTUFBTSxHQUFHLFdBQU07UUFDakJELE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUNELHFCQUNJOzswQkFDSSw4REFBQ0csR0FBQztnQkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjtnQkFBQ0MsT0FBTyxFQUFFSCxNQUFNOzBCQUFFLE9BQUs7Ozs7O3FCQUFJO1lBQ2pFRixJQUFJLGtCQUNELDhEQUFDTSxLQUFHOzBCQUNDWCxvREFBZSxDQUFDLFNBQUNhLElBQUksRUFBRUMsS0FBSyxFQUFLO29CQUM5QixxQkFDSSw4REFBQ0gsS0FBRztrQ0FDQSw0RUFBQ1Qsa0RBQUk7NEJBQUNhLElBQUksRUFBRUYsSUFBSSxDQUFDRyxJQUFJO3NDQUFFLDRFQUFDUixHQUFDOzBDQUFFSyxJQUFJLENBQUNJLFFBQVE7Ozs7O3NDQUFLOzs7OztrQ0FBTzt1QkFEOUNILEtBQUs7Ozs7OEJBRVQsQ0FDUjtpQkFDTCxDQUFDOzs7OztxQkFDQTs7b0JBRVgsQ0FDTDtDQUNMO0dBckJLWCxlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUFzQnJCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9wYWdlZGRDb21wb25lbnQuanM/MmY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlRERMaW5rcyB9IGZyb20gXCIuL3BhZ2VkZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuY29uc3QgUGFnZWRkQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlXCIgb25DbGljaz17dG9nZ2xlfT5QYWdlczwvYT5cclxuICAgICAgICAgICAge29wZW4gJiZcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1BhZ2VERExpbmtzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5saW5rfT48YT57aXRlbS5saW5rTmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYWdlZGRDb21wb25lbnQ7Il0sIm5hbWVzIjpbIlBhZ2VERExpbmtzIiwiUmVhY3QiLCJMaW5rIiwiUGFnZWRkQ29tcG9uZW50IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInRvZ2dsZSIsImEiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsImxpbmsiLCJsaW5rTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/pageddComponent.js\n");

/***/ })

});