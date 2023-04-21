/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: 'Distributed Hashtable using Chord protocol',\n  description: \"Developed a highly available and scalable distributed key-value store by implementing the Chord protocol. Implemented consistent hashing for the distribution of keys and replication of factor 2 to make the system fault-tolerant.\",\n  image: '/images/chord_network.png',\n  tags: ['Java', 'RMI'],\n  source: 'https://github.com/jw86813/Chord_DHT',\n  id: 0\n}, {\n  title: 'FundMe - Crowd Funding Application',\n  description: \"Created a web application by implementing the repository pattern to start and support crowdfunding projects. Features include user authentication using Firebase, an admin dashboard to approve projects, and a reward system to disburse funds.\",\n  image: '/images/fundme.png',\n  tags: [' Java(Springboot) ', 'MongoDB ', 'Angular '],\n  source: 'https://github.com/jagadeeshmarali/crowd-funding-app',\n  id: 2\n}, {\n  title: 'ParkSafe – Find safe parking spots',\n  description: \"Analyzed historical crime statistics(time, location, description, etc) for San Francisco and developed a metric (Safety Score) to find the probability of car thefts happening for a parking spot. Created a custom API and a web application to rank available parking spots based on car-related crimes.\",\n  image: '/images/parksafe.jpeg',\n  tags: ['Javascript', 'Python(Flask)'],\n  source: 'https://github.com/tonymathen/Inrix-Hack',\n  id: 1\n}, {\n  title: 'Diamond Prices Prediction using Machine Learning',\n  description: \"Performed data cleaning and used supervised machine learning algorithms Decision Trees and ensembling techniques Random Forest and XGBoost for predicting diamond prices. Performed hyperparameter tuning to improve the accuracy to 98%\",\n  image: '/images/diamond_prices_prediction.png',\n  tags: ['Google Colab', 'Pandas', 'Seaborn', 'Matplotlib', 'NumPy', 'Scikit'],\n  source: 'https://github.com/tonymathen/Diamond_Prices_Prediction/tree/main',\n  id: 1\n}];\nvar TimeLineData = [{\n  year: '2015-2019',\n  text: 'Bachelors in Computer Science and Engineering'\n}, {\n  year: '2019-2021',\n  text: 'System Engineer at TATA Consultancy Services'\n}, {\n  year: \"2021-Present\",\n  text: 'Masters in Computer Science at Santa Clara University'\n}, {\n  year: \"2022 Summer\",\n  text: 'Software Engineer Intern at INRIX, Inc'\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLDRDQURUO0FBRUVDLGFBQVcsRUFBRSxzT0FGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsc0NBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FEc0IsRUFTdEI7QUFDRUwsT0FBSyxFQUFFLG9DQURUO0FBRUVDLGFBQVcsRUFBRSxrUEFGZjtBQUdJQyxPQUFLLEVBQUUsb0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsb0JBQUQsRUFBdUIsVUFBdkIsRUFBbUMsVUFBbkMsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsc0RBTFY7QUFNRUMsSUFBRSxFQUFFO0FBTk4sQ0FUc0IsRUFpQnRCO0FBQ0VMLE9BQUssRUFBRSxvQ0FEVDtBQUVFQyxhQUFXLEVBQUMsNFNBRmQ7QUFHRUMsT0FBSyxFQUFFLHVCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFlBQUQsRUFBZSxlQUFmLENBSlI7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLElBQUUsRUFBRTtBQU5OLENBakJzQixFQXlCdEI7QUFDRUwsT0FBSyxFQUFFLGtEQURUO0FBRUVDLGFBQVcsRUFBQywwT0FGZDtBQUdFQyxPQUFLLEVBQUUsdUNBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsY0FBRCxFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxZQUF0QyxFQUFvRCxPQUFwRCxFQUE2RCxRQUE3RCxDQUpSO0FBS0VDLFFBQU0sRUFBRSxtRUFMVjtBQU1FQyxJQUFFLEVBQUU7QUFOTixDQXpCc0IsQ0FBakI7QUFtQ0EsSUFBTUMsWUFBWSxHQUFHLENBQzFCO0FBQUVDLE1BQUksRUFBRSxXQUFSO0FBQXFCQyxNQUFJLEVBQUU7QUFBM0IsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLFdBQVI7QUFBcUJDLE1BQUksRUFBRTtBQUEzQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsY0FBUjtBQUF3QkMsTUFBSSxFQUFFO0FBQTlCLENBSDBCLEVBSTFCO0FBQUVELE1BQUksRUFBRSxhQUFSO0FBQXVCQyxNQUFJLEVBQUU7QUFBN0IsQ0FKMEIsQ0FBckIiLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnRGlzdHJpYnV0ZWQgSGFzaHRhYmxlIHVzaW5nIENob3JkIHByb3RvY29sJyxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYSBoaWdobHkgYXZhaWxhYmxlIGFuZCBzY2FsYWJsZSBkaXN0cmlidXRlZCBrZXktdmFsdWUgc3RvcmUgYnkgaW1wbGVtZW50aW5nIHRoZSBDaG9yZCBwcm90b2NvbC4gSW1wbGVtZW50ZWQgY29uc2lzdGVudCBoYXNoaW5nIGZvciB0aGUgZGlzdHJpYnV0aW9uIG9mIGtleXMgYW5kIHJlcGxpY2F0aW9uIG9mIGZhY3RvciAyIHRvIG1ha2UgdGhlIHN5c3RlbSBmYXVsdC10b2xlcmFudC5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvY2hvcmRfbmV0d29yay5wbmcnLFxuICAgIHRhZ3M6IFsnSmF2YScsICdSTUknXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vanc4NjgxMy9DaG9yZF9ESFQnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGdW5kTWUgLSBDcm93ZCBGdW5kaW5nIEFwcGxpY2F0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogXCJDcmVhdGVkIGEgd2ViIGFwcGxpY2F0aW9uIGJ5IGltcGxlbWVudGluZyB0aGUgcmVwb3NpdG9yeSBwYXR0ZXJuIHRvIHN0YXJ0IGFuZCBzdXBwb3J0IGNyb3dkZnVuZGluZyBwcm9qZWN0cy4gRmVhdHVyZXMgaW5jbHVkZSB1c2VyIGF1dGhlbnRpY2F0aW9uIHVzaW5nIEZpcmViYXNlLCBhbiBhZG1pbiBkYXNoYm9hcmQgdG8gYXBwcm92ZSBwcm9qZWN0cywgYW5kIGEgcmV3YXJkIHN5c3RlbSB0byBkaXNidXJzZSBmdW5kcy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9mdW5kbWUucG5nJyxcbiAgICAgIHRhZ3M6IFsnIEphdmEoU3ByaW5nYm9vdCkgJywgJ01vbmdvREIgJywgJ0FuZ3VsYXIgJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2phZ2FkZWVzaG1hcmFsaS9jcm93ZC1mdW5kaW5nLWFwcCcsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1BhcmtTYWZlIOKAkyBGaW5kIHNhZmUgcGFya2luZyBzcG90cycsXG4gICAgZGVzY3JpcHRpb246XCJBbmFseXplZCBoaXN0b3JpY2FsIGNyaW1lIHN0YXRpc3RpY3ModGltZSwgbG9jYXRpb24sIGRlc2NyaXB0aW9uLCBldGMpIGZvciBTYW4gRnJhbmNpc2NvIGFuZCBkZXZlbG9wZWQgYSBtZXRyaWMgKFNhZmV0eSBTY29yZSkgdG8gZmluZCB0aGUgcHJvYmFiaWxpdHkgb2YgY2FyIHRoZWZ0cyBoYXBwZW5pbmcgZm9yIGEgcGFya2luZyBzcG90LiBDcmVhdGVkIGEgY3VzdG9tIEFQSSBhbmQgYSB3ZWIgYXBwbGljYXRpb24gdG8gcmFuayBhdmFpbGFibGUgcGFya2luZyBzcG90cyBiYXNlZCBvbiBjYXItcmVsYXRlZCBjcmltZXMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3BhcmtzYWZlLmpwZWcnLFxuICAgIHRhZ3M6IFsnSmF2YXNjcmlwdCcsICdQeXRob24oRmxhc2spJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbnltYXRoZW4vSW5yaXgtSGFjaycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0RpYW1vbmQgUHJpY2VzIFByZWRpY3Rpb24gdXNpbmcgTWFjaGluZSBMZWFybmluZycsXG4gICAgZGVzY3JpcHRpb246XCJQZXJmb3JtZWQgZGF0YSBjbGVhbmluZyBhbmQgdXNlZCBzdXBlcnZpc2VkIG1hY2hpbmUgbGVhcm5pbmcgYWxnb3JpdGhtcyBEZWNpc2lvbiBUcmVlcyBhbmQgZW5zZW1ibGluZyB0ZWNobmlxdWVzIFJhbmRvbSBGb3Jlc3QgYW5kIFhHQm9vc3QgZm9yIHByZWRpY3RpbmcgZGlhbW9uZCBwcmljZXMuIFBlcmZvcm1lZCBoeXBlcnBhcmFtZXRlciB0dW5pbmcgdG8gaW1wcm92ZSB0aGUgYWNjdXJhY3kgdG8gOTglXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2RpYW1vbmRfcHJpY2VzX3ByZWRpY3Rpb24ucG5nJyxcbiAgICB0YWdzOiBbJ0dvb2dsZSBDb2xhYicsICdQYW5kYXMnLCAnU2VhYm9ybicsICdNYXRwbG90bGliJywgJ051bVB5JywgJ1NjaWtpdCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b255bWF0aGVuL0RpYW1vbmRfUHJpY2VzX1ByZWRpY3Rpb24vdHJlZS9tYWluJyxcbiAgICBpZDogMSxcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAnMjAxNS0yMDE5JywgdGV4dDogJ0JhY2hlbG9ycyBpbiBDb21wdXRlciBTY2llbmNlIGFuZCBFbmdpbmVlcmluZycsIH0sXG4gIHsgeWVhcjogJzIwMTktMjAyMScsIHRleHQ6ICdTeXN0ZW0gRW5naW5lZXIgYXQgVEFUQSBDb25zdWx0YW5jeSBTZXJ2aWNlcycsIH0sXG4gIHsgeWVhcjogXCIyMDIxLVByZXNlbnRcIiwgdGV4dDogJ01hc3RlcnMgaW4gQ29tcHV0ZXIgU2NpZW5jZSBhdCBTYW50YSBDbGFyYSBVbml2ZXJzaXR5JywgfSxcbiAgeyB5ZWFyOiBcIjIwMjIgU3VtbWVyXCIsIHRleHQ6ICdTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm4gYXQgSU5SSVgsIEluYycsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});