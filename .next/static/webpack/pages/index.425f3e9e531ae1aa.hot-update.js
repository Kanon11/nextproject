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

/***/ "./pages/components/mainddComponent.js":
/*!*********************************************!*\
  !*** ./pages/components/mainddComponent.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _maindd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maindd */ \"./pages/components/maindd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dressddComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dressddComponent */ \"./pages/components/dressddComponent.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MainddComponent = function(param) {\n    var from = param.from;\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(false), 2), open = ref[0], setOpen = ref[1];\n    var toggle = function() {\n        setOpen(!open);\n    };\n    // if (from === \"home\") {\n    //     toggle();\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            zIndex: 100,\n            position: \"absolute\",\n            minWidth: 280\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100\",\n                onClick: toggle,\n                style: {\n                    height: 65,\n                    marginTop: \"-1px\",\n                    padding: \"0 30px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"m-0\",\n                        children: \"Categories\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: \"fa fa-angle-down text-dark\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0\",\n                id: \"navbar-vertical\",\n                style: {\n                    width: \"calc(100% - 30px)\",\n                    zIndex: 1000\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav w-100 overflow-hidden\",\n                    style: {\n                        height: 410\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dressddComponent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, _this),\n                        _maindd__WEBPACK_IMPORTED_MODULE_1__.Maindd.map(function(item, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: item.link,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: \"nav-item nav-link\",\n                                        children: item.linkName\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 60\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 37\n                                }, _this1)\n                            }, index, false, {\n                                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                                lineNumber: 32,\n                                columnNumber: 33\n                            }, _this1);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\GIT\\\\nextproject\\\\pages\\\\components\\\\mainddComponent.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_s(MainddComponent, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = MainddComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainddComponent);\nvar _c;\n$RefreshReg$(_c, \"MainddComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL21haW5kZENvbXBvbmVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ1I7QUFDRztBQUNxQjs7QUFDbEQsSUFBTUksZUFBZSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7O0lBQzNCLElBQXdCSixHQUFxQixrQkFBckJBLHFEQUFjLENBQUMsS0FBSyxDQUFDLE1BQXRDTSxJQUFJLEdBQWFOLEdBQXFCLEdBQWxDLEVBQUVPLE9BQU8sR0FBSVAsR0FBcUIsR0FBekI7SUFDcEIsSUFBTVEsTUFBTSxHQUFHLFdBQU07UUFDakJELE9BQU8sQ0FBQyxDQUFDRCxJQUFJLENBQUMsQ0FBQztLQUNsQjtJQUNELHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVKLHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLEtBQUssRUFBRTtZQUFFQyxNQUFNLEVBQUUsR0FBRztZQUFFQyxRQUFRLEVBQUUsVUFBVTtZQUFDQyxRQUFRLEVBQUMsR0FBRztTQUFFOzswQkFDMUQsOERBQUNDLEdBQUM7Z0JBQUNDLFNBQVMsRUFBQywrRkFBK0Y7Z0JBQUNDLE9BQU8sRUFBRVIsTUFBTTtnQkFDeEhFLEtBQUssRUFBRTtvQkFBRU8sTUFBTSxFQUFFLEVBQUU7b0JBQUVDLFNBQVMsRUFBRSxNQUFNO29CQUFFQyxPQUFPLEVBQUUsUUFBUTtpQkFBRTs7a0NBRTNELDhEQUFDQyxJQUFFO3dCQUFDTCxTQUFTLEVBQUMsS0FBSztrQ0FBQyxZQUFVOzs7Ozs2QkFBSztrQ0FDbkMsOERBQUNNLEdBQUM7d0JBQUNOLFNBQVMsRUFBQyw0QkFBNEI7Ozs7OzZCQUFHOzs7Ozs7cUJBQzVDO1lBQ0hULElBQUksa0JBQ0QsOERBQUNnQixLQUFHO2dCQUFDUCxTQUFTLEVBQUMsNkdBQTZHO2dCQUN4SFEsRUFBRSxFQUFDLGlCQUFpQjtnQkFDcEJiLEtBQUssRUFBRTtvQkFBRWMsS0FBSyxFQUFFLG1CQUFtQjtvQkFBRWIsTUFBTSxFQUFFLElBQUk7aUJBQUU7MEJBR25ELDRFQUFDRixLQUFHO29CQUFDTSxTQUFTLEVBQUMsa0NBQWtDO29CQUFDTCxLQUFLLEVBQUU7d0JBQUVPLE1BQU0sRUFBRSxHQUFHO3FCQUFFOztzQ0FDcEUsOERBQUNmLHlEQUFnQjs7OztpQ0FBb0I7d0JBQ3BDSCwrQ0FBVSxDQUFDLFNBQUMyQixJQUFJLEVBQUVDLEtBQUssRUFBSzs0QkFDekIscUJBQ0ksOERBQUNsQixLQUFHOzBDQUNBLDRFQUFDUixrREFBSTtvQ0FBQzJCLElBQUksRUFBRUYsSUFBSSxDQUFDRyxJQUFJOzhDQUFFLDRFQUFDZixHQUFDO3dDQUFDQyxTQUFTLEVBQUMsbUJBQW1CO2tEQUFFVyxJQUFJLENBQUNJLFFBQVE7Ozs7OzhDQUFLOzs7OzswQ0FBTzsrQkFENUVILEtBQUs7Ozs7c0NBRVQsQ0FDUjt5QkFDTCxDQUFDOzs7Ozs7eUJBQ0E7Ozs7O3FCQUNKOzs7Ozs7YUFJUixDQUNUO0NBQ0o7R0F2Q0t4QixlQUFlO0FBQWZBLEtBQUFBLGVBQWU7QUF3Q3JCLCtEQUFlQSxlQUFlLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9tYWluZGRDb21wb25lbnQuanM/ZDViZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluZGQgfSBmcm9tIFwiLi9tYWluZGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBEcmVzc2RkQ29tcG9uZW50IGZyb20gXCIuL2RyZXNzZGRDb21wb25lbnRcIjtcclxuY29uc3QgTWFpbmRkQ29tcG9uZW50ID0gKHsgZnJvbSB9KSA9PiB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICB9O1xyXG4gICAgLy8gaWYgKGZyb20gPT09IFwiaG9tZVwiKSB7XHJcbiAgICAvLyAgICAgdG9nZ2xlKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHpJbmRleDogMTAwLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLG1pbldpZHRoOjI4MCB9fT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIHNoYWRvdy1ub25lIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gYmctcHJpbWFyeSB0ZXh0LXdoaXRlIHctMTAwXCIgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA2NSwgbWFyZ2luVG9wOiBcIi0xcHhcIiwgcGFkZGluZzogXCIwIDMwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibS0wXCI+Q2F0ZWdvcmllczwvaDY+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duIHRleHQtZGFya1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAge29wZW4gJiZcclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29sbGFwc2Ugc2hvdyBuYXZiYXIgbmF2YmFyLXZlcnRpY2FsIG5hdmJhci1saWdodCBhbGlnbi1pdGVtcy1zdGFydCBwLTAgYm9yZGVyIGJvcmRlci10b3AtMCBib3JkZXItYm90dG9tLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyLXZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCJjYWxjKDEwMCUgLSAzMHB4KVwiLCB6SW5kZXg6IDEwMDAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbmF2IHctMTAwIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7IGhlaWdodDogNDEwIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERyZXNzZGRDb21wb25lbnQ+PC9EcmVzc2RkQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7TWFpbmRkLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGlua30+PGEgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbmF2LWxpbmtcIj57aXRlbS5saW5rTmFtZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWFpbmRkQ29tcG9uZW50OyJdLCJuYW1lcyI6WyJNYWluZGQiLCJSZWFjdCIsIkxpbmsiLCJEcmVzc2RkQ29tcG9uZW50IiwiTWFpbmRkQ29tcG9uZW50IiwiZnJvbSIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ0b2dnbGUiLCJkaXYiLCJzdHlsZSIsInpJbmRleCIsInBvc2l0aW9uIiwibWluV2lkdGgiLCJhIiwiY2xhc3NOYW1lIiwib25DbGljayIsImhlaWdodCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJoNiIsImkiLCJuYXYiLCJpZCIsIndpZHRoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaHJlZiIsImxpbmsiLCJsaW5rTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/mainddComponent.js\n");

/***/ })

});