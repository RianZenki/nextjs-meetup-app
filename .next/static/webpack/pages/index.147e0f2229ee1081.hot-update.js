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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80\",\n        address: \"Some address 5, 1234 Some City\",\n        description: \"This is a first meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Seconde Meetup\",\n        image: \"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80\",\n        address: \"Some address 6, 4467 Some City\",\n        description: \"This is a second meetup\"\n    }, \n];\nvar HomePage = function(props) {\n    // const [loadedMeetups, setLoadedMeetups] = useState([])\n    // useEffect(() => {\n    //    setLoadedMeetups(DUMMY_MEETUPS)\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Nacazato\\\\Documents\\\\react\\\\next-meetups-app\\\\pages\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, _this);\n};\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRTBEO0FBRTFELElBQU1DLGFBQWEsR0FBRztJQUNyQjtRQUNDQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQUUsaUpBQWlKO1FBQ3hKQyxPQUFPLEVBQUUsZ0NBQWdDO1FBQ3pDQyxXQUFXLEVBQUUsd0JBQXdCO0tBQ3JDO0lBQ0Q7UUFDQ0osRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QkMsS0FBSyxFQUFFLGlKQUFpSjtRQUN4SkMsT0FBTyxFQUFFLGdDQUFnQztRQUN6Q0MsV0FBVyxFQUFFLHlCQUF5QjtLQUN0QztDQUNEO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLEtBQUssRUFBSztJQUMzQix5REFBeUQ7SUFFekQsb0JBQW9CO0lBQ3BCLHFDQUFxQztJQUNyQyxTQUFTO0lBRVQscUJBQU8sOERBQUNSLHNFQUFVO1FBQUNTLE9BQU8sRUFBRUQsS0FBSyxDQUFDQyxPQUFPOzs7OzthQUFJLENBQUM7QUFDL0MsQ0FBQztBQVJLRixLQUFBQSxRQUFROztBQTBDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG5cdHtcclxuXHRcdGlkOiBcIm0xXCIsXHJcblx0XHR0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG5cdFx0aW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Nzc5NTk4NTg2MTctNjdmODVjZjRmMWRmP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OFkybDBlWHhsYm53d2ZId3dmSHclM0Qmdz0xMDAwJnE9ODBcIixcclxuXHRcdGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDUsIDEyMzQgU29tZSBDaXR5XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgZmlyc3QgbWVldHVwXCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpZDogXCJtMlwiLFxyXG5cdFx0dGl0bGU6IFwiQSBTZWNvbmRlIE1lZXR1cFwiLFxyXG5cdFx0aW1hZ2U6IFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0Nzc5NTk4NTg2MTctNjdmODVjZjRmMWRmP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TW54OFkybDBlWHhsYm53d2ZId3dmSHclM0Qmdz0xMDAwJnE9ODBcIixcclxuXHRcdGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDYsIDQ0NjcgU29tZSBDaXR5XCIsXHJcblx0XHRkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgc2Vjb25kIG1lZXR1cFwiLFxyXG5cdH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG5cdC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHQvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdC8vICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUylcclxuXHQvLyB9LCBbXSlcclxuXHJcblx0cmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbi8vICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlc1xyXG5cclxuLy8gICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIEFQSVxyXG5cclxuLy8gICAgcmV0dXJuIHtcclxuLy8gICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cdGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcblx0XHRcIm1vbmdvZGIrc3J2Oi8vcmlhbnplbmtpOjlSdzlVbjZQOFhYQ0d5aFBAbWVldHVwLjB5eWZzYXoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG5cdCk7XHJcblx0Y29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHRjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuXHRjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKVxyXG5cclxuXHRjbGllbnQuY2xvc2UoKTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdG1lZXR1cHM6IG1lZXR1cHMubWFwXHJcblx0XHR9LFxyXG5cdFx0cmV2YWxpZGF0ZTogMTAsXHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});