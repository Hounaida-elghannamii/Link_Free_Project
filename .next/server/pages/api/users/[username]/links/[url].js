"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/[username]/links/[url]";
exports.ids = ["pages/api/users/[username]/links/[url]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/YWZjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./config/logger.js":
/*!**************************!*\
  !*** ./config/logger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    transport: {\n        target: \"pino-pretty\",\n        options: {\n            colorize: true\n        }\n    }\n};\nconst logger = pino__WEBPACK_IMPORTED_MODULE_0__.pino( true ? config : 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbG9nZ2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7UUFDVEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLFVBQVUsSUFBSTtRQUNoQjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxTQUFTTixzQ0FBZSxDQUM1QlEsS0FBc0MsR0FBR1AsU0FBUyxDQUFFO0FBR3RELGlFQUFlSyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9jb25maWcvbG9nZ2VyLmpzP2YxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGlub0xvZ2dlciBmcm9tIFwicGlub1wiO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIHRyYW5zcG9ydDoge1xyXG4gICAgdGFyZ2V0OiBcInBpbm8tcHJldHR5XCIsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIGNvbG9yaXplOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgbG9nZ2VyID0gUGlub0xvZ2dlci5waW5vKFxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBjb25maWcgOiB7fVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xyXG4iXSwibmFtZXMiOlsiUGlub0xvZ2dlciIsImNvbmZpZyIsInRyYW5zcG9ydCIsInRhcmdldCIsIm9wdGlvbnMiLCJjb2xvcml6ZSIsImxvZ2dlciIsInBpbm8iLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/logger.js\n");

/***/ }),

/***/ "(api)/./config/mongo.js":
/*!*************************!*\
  !*** ./config/mongo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nlet hasConnection = false;\nconst connectMongo = async ()=>{\n    if (!process.env.LINKFREE_MONGO_CONNECTION_STRING) {\n        throw new Error(\"Please define the LINKFREE_MONGO_CONNECTION_STRING environment variable (if local add to .env file)\");\n    }\n    if (hasConnection) {\n        return;\n    }\n    try {\n        // DigitalOcean Apps has cert as environment variable but Mongo needs a file path\n        // Write Mongo cert file to disk\n        if (process.env.CA_CERT) {\n            fs__WEBPACK_IMPORTED_MODULE_1__.writeFileSync(\"cert.pem\", process.env.CA_CERT);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.LINKFREE_MONGO_CONNECTION_STRING);\n        hasConnection = true;\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(\"MongoDB connected\");\n    } catch (e) {\n        hasConnection = false;\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, \"DB connection failed\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1A7QUFFYTtBQUV0QyxJQUFJRyxnQkFBZ0IsS0FBSztBQUN6QixNQUFNQyxlQUFlLFVBQVk7SUFDL0IsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGdDQUFnQyxFQUFFO1FBQ2pELE1BQU0sSUFBSUMsTUFDUix1R0FDQTtJQUNKLENBQUM7SUFFRCxJQUFJTCxlQUFlO1FBQ2pCO0lBQ0YsQ0FBQztJQUNELElBQUk7UUFDRixpRkFBaUY7UUFDakYsZ0NBQWdDO1FBQ2hDLElBQUlFLFFBQVFDLEdBQUcsQ0FBQ0csT0FBTyxFQUFFO1lBQ3ZCUiw2Q0FBZ0IsQ0FBQyxZQUFZSSxRQUFRQyxHQUFHLENBQUNHLE9BQU87UUFDbEQsQ0FBQztRQUVELE1BQU1ULHVEQUFnQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLGdDQUFnQztRQUNuRUosZ0JBQWdCLElBQUk7UUFDcEJELDJEQUFXLENBQUM7SUFDZCxFQUFFLE9BQU9XLEdBQUc7UUFDVlYsZ0JBQWdCLEtBQUs7UUFDckJELDREQUFZLENBQUNXLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGlFQUFlVCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9jb25maWcvbW9uZ28uanM/ZTk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5cclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vY29uZmlnL2xvZ2dlclwiO1xyXG5cclxubGV0IGhhc0Nvbm5lY3Rpb24gPSBmYWxzZTtcclxuY29uc3QgY29ubmVjdE1vbmdvID0gYXN5bmMgKCkgPT4ge1xyXG4gIGlmICghcHJvY2Vzcy5lbnYuTElOS0ZSRUVfTU9OR09fQ09OTkVDVElPTl9TVFJJTkcpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBMSU5LRlJFRV9NT05HT19DT05ORUNUSU9OX1NUUklORyBlbnZpcm9ubWVudCB2YXJpYWJsZSAoaWYgbG9jYWwgYWRkIHRvIC5lbnYgZmlsZSlcIlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNDb25uZWN0aW9uKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRyeSB7XHJcbiAgICAvLyBEaWdpdGFsT2NlYW4gQXBwcyBoYXMgY2VydCBhcyBlbnZpcm9ubWVudCB2YXJpYWJsZSBidXQgTW9uZ28gbmVlZHMgYSBmaWxlIHBhdGhcclxuICAgIC8vIFdyaXRlIE1vbmdvIGNlcnQgZmlsZSB0byBkaXNrXHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuQ0FfQ0VSVCkge1xyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKFwiY2VydC5wZW1cIiwgcHJvY2Vzcy5lbnYuQ0FfQ0VSVCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5MSU5LRlJFRV9NT05HT19DT05ORUNUSU9OX1NUUklORyk7XHJcbiAgICBoYXNDb25uZWN0aW9uID0gdHJ1ZTtcclxuICAgIGxvZ2dlci5pbmZvKFwiTW9uZ29EQiBjb25uZWN0ZWRcIik7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaGFzQ29ubmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIFwiREIgY29ubmVjdGlvbiBmYWlsZWRcIik7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJmcyIsImxvZ2dlciIsImhhc0Nvbm5lY3Rpb24iLCJjb25uZWN0TW9uZ28iLCJwcm9jZXNzIiwiZW52IiwiTElOS0ZSRUVfTU9OR09fQ09OTkVDVElPTl9TVFJJTkciLCJFcnJvciIsIkNBX0NFUlQiLCJ3cml0ZUZpbGVTeW5jIiwiY29ubmVjdCIsImluZm8iLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/mongo.js\n");

/***/ }),

/***/ "(api)/./models/Link.js":
/*!************************!*\
  !*** ./models/Link.js ***!
  \************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst LinkSchema = new _mongoose.default.Schema({\n    username: String,\n    url: String,\n    clicks: {\n        type: Number,\n        default: 0\n    },\n    profile: {\n        type: _mongoose.default.Schema.Types.ObjectId,\n        ref: \"profile\"\n    }\n});\nmodule.exports = _mongoose.default.models.Link || _mongoose.default.model(\"Link\", LinkSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvTGluay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsyRUFBcUIsMEJBQVU7QUFFL0IsTUFBTUEsYUFBYSxJQUFJQyxpQkFBUSxDQUFDQyxNQUFNLENBQUM7SUFDckNDLFVBQVVDO0lBQ1ZDLEtBQUtEO0lBQ0xFLFFBQVE7UUFDTkMsTUFBTUM7UUFDTkMsU0FBUztJQUNYO0lBQ0FDLFNBQVM7UUFDUEgsTUFBTU4saUJBQVEsQ0FBQ0MsTUFBTSxDQUFDUyxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7SUFDUDtBQUNGO0FBRUFDLE9BQU9DLE9BQU8sR0FBR2QsaUJBQVEsQ0FBQ2UsTUFBTSxDQUFDQyxJQUFJLElBQUloQixpQkFBUSxDQUFDaUIsS0FBSyxDQUFDLFFBQVFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vbW9kZWxzL0xpbmsuanM/ZjM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBMaW5rU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IFN0cmluZyxcclxuICB1cmw6IFN0cmluZyxcclxuICBjbGlja3M6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDAsXHJcbiAgfSxcclxuICBwcm9maWxlOiB7XHJcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6IFwicHJvZmlsZVwiLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuTGluayB8fCBtb25nb29zZS5tb2RlbChcIkxpbmtcIiwgTGlua1NjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJMaW5rU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsInVybCIsImNsaWNrcyIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwicHJvZmlsZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiTGluayIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Link.js\n");

/***/ }),

/***/ "(api)/./models/Profile.js":
/*!***************************!*\
  !*** ./models/Profile.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst ProfileSchema = new _mongoose.default.Schema({\n    username: String,\n    views: {\n        type: Number,\n        default: 0\n    },\n    links: {\n        default: [],\n        type: [\n            {\n                type: _mongoose.default.Schema.Types.ObjectId,\n                ref: \"Link\"\n            }\n        ]\n    }\n});\nmodule.exports = _mongoose.default.models.Profile || _mongoose.default.model(\"Profile\", ProfileSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OzsyRUFBcUIsMEJBQVU7QUFFL0IsTUFBTUEsZ0JBQWdCLElBQUlDLGlCQUFRLENBQUNDLE1BQU0sQ0FBQztJQUN4Q0MsVUFBVUM7SUFDVkMsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsT0FBTztRQUNMRCxTQUFTLEVBQUU7UUFDWEYsTUFBTTtZQUFDO2dCQUFFQSxNQUFNTCxpQkFBUSxDQUFDQyxNQUFNLENBQUNRLEtBQUssQ0FBQ0MsUUFBUTtnQkFBRUMsS0FBSztZQUFPO1NBQUU7SUFDL0Q7QUFDRjtBQUVBQyxPQUFPQyxPQUFPLEdBQ1piLGlCQUFRLENBQUNjLE1BQU0sQ0FBQ0MsT0FBTyxJQUFJZixpQkFBUSxDQUFDZ0IsS0FBSyxDQUFDLFdBQVdqQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vbW9kZWxzL1Byb2ZpbGUuanM/NDQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBQcm9maWxlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdXNlcm5hbWU6IFN0cmluZyxcclxuICB2aWV3czoge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMCxcclxuICB9LFxyXG4gIGxpbmtzOiB7XHJcbiAgICBkZWZhdWx0OiBbXSxcclxuICAgIHR5cGU6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkxpbmtcIiB9XSxcclxuICB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID1cclxuICBtb25nb29zZS5tb2RlbHMuUHJvZmlsZSB8fCBtb25nb29zZS5tb2RlbChcIlByb2ZpbGVcIiwgUHJvZmlsZVNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJQcm9maWxlU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VybmFtZSIsIlN0cmluZyIsInZpZXdzIiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJsaW5rcyIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUHJvZmlsZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Profile.js\n");

/***/ }),

/***/ "(api)/./models/Stats.js":
/*!*************************!*\
  !*** ./models/Stats.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst StatsSchema = new _mongoose.default.Schema({\n    views: {\n        type: Number,\n        default: 0\n    },\n    clicks: {\n        type: Number,\n        default: 0\n    },\n    users: {\n        type: Number,\n        default: 0\n    },\n    date: {\n        type: Date,\n        default: new Date(new Date().toLocaleDateString())\n    }\n});\nmodule.exports = _mongoose.default.models.Stats || _mongoose.default.model(\"Stats\", StatsSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvU3RhdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLGNBQWMsSUFBSUMsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ3RDQyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBQyxRQUFRO1FBQ05ILE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBRSxPQUFPO1FBQ0xKLE1BQU1DO1FBQ05DLFNBQVM7SUFDWDtJQUNBRyxNQUFNO1FBQ0pMLE1BQU1NO1FBQ05KLFNBQVMsSUFBSUksS0FBSyxJQUFJQSxPQUFPQyxrQkFBa0I7SUFDakQ7QUFDRjtBQUVBQyxPQUFPQyxPQUFPLEdBQUdaLGlCQUFRLENBQUNhLE1BQU0sQ0FBQ0MsS0FBSyxJQUFJZCxpQkFBUSxDQUFDZSxLQUFLLENBQUMsU0FBU2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9tb2RlbHMvU3RhdHMuanM/NTcyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBTdGF0c1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHZpZXdzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAwLFxyXG4gIH0sXHJcbiAgY2xpY2tzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiAwLFxyXG4gIH0sXHJcbiAgdXNlcnM6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDAsXHJcbiAgfSxcclxuICBkYXRlOiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgZGVmYXVsdDogbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSksXHJcbiAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5TdGF0cyB8fCBtb25nb29zZS5tb2RlbChcIlN0YXRzXCIsIFN0YXRzU2NoZW1hKTtcclxuIl0sIm5hbWVzIjpbIlN0YXRzU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ2aWV3cyIsInR5cGUiLCJOdW1iZXIiLCJkZWZhdWx0IiwiY2xpY2tzIiwidXNlcnMiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJTdGF0cyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Stats.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/[username]/links/[url].js":
/*!***************************************************!*\
  !*** ./pages/api/users/[username]/links/[url].js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/Link */ \"(api)/./models/Link.js\");\n/* harmony import */ var _models_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../models/Stats */ \"(api)/./models/Stats.js\");\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_Stats__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_profiles_findOneByUsernameBasic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/profiles/findOneByUsernameBasic */ \"(api)/./services/profiles/findOneByUsernameBasic.js\");\n\n\n\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { username , url  } = req.query;\n    if (req.method != \"GET\") {\n        return res.status(400).json({\n            error: \"Invalid request: GET request required\"\n        });\n    }\n    const data = (0,_services_profiles_findOneByUsernameBasic__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(username);\n    if (!data.username) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(`failed loading profile username: ${username}`);\n        return res.status(404).json({\n            error: `${username} not found`\n        });\n    }\n    if (!data.links.find((link)=>link.url === url) && !data.socials.find((social)=>social.url === url)) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(`link ${url} not found for username ${username}`);\n        return res.status(404).json({\n            error: `ERROR ${url} not found`\n        });\n    }\n    let getProfile;\n    try {\n        getProfile = await _models_Profile__WEBPACK_IMPORTED_MODULE_3___default().findOne({\n            username\n        });\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed loading profile username: ${username}`);\n        return res.status(404).json({\n            error: `ERROR ${username} not found`\n        });\n    }\n    if (!getProfile) {\n        return res.status(404).json({\n            error: `ERROR ${username} not found`\n        });\n    }\n    let getLink;\n    try {\n        getLink = await _models_Link__WEBPACK_IMPORTED_MODULE_2___default().findOne({\n            username,\n            url\n        });\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed loading link ${url} for username: ${username}`);\n        return res.status(404).json({\n            error: `ERROR ${url} not found`\n        });\n    }\n    if (getLink) {\n        try {\n            await _models_Link__WEBPACK_IMPORTED_MODULE_2___default().updateOne({\n                username,\n                url\n            }, {\n                $inc: {\n                    clicks: 1\n                }\n            });\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed incrementing link: ${url} for username ${username}`);\n        }\n    }\n    if (!getLink) {\n        try {\n            const link = await _models_Link__WEBPACK_IMPORTED_MODULE_2___default().create({\n                profile: getProfile._id,\n                username,\n                url,\n                clicks: 1\n            });\n            await _models_Profile__WEBPACK_IMPORTED_MODULE_3___default().updateOne({\n                username\n            }, {\n                $push: {\n                    links: link._id\n                }\n            }, {\n                new: true,\n                useFindAndModify: false\n            });\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed create link stats ${url} for username ${username}`);\n        }\n    }\n    const date = new Date();\n    date.setHours(1, 0, 0, 0);\n    let getPlatformStats;\n    try {\n        getPlatformStats = await _models_Stats__WEBPACK_IMPORTED_MODULE_4___default().findOne({\n            date\n        });\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed finding platform stats for ${data}`);\n    }\n    if (getPlatformStats) {\n        try {\n            await _models_Stats__WEBPACK_IMPORTED_MODULE_4___default().updateOne({\n                date\n            }, {\n                $inc: {\n                    clicks: 1\n                }\n            });\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed incrementing platform stats for ${data}`);\n        }\n    }\n    if (!getPlatformStats) {\n        try {\n            await _models_Stats__WEBPACK_IMPORTED_MODULE_4___default().create({\n                date,\n                views: 0,\n                clicks: 1,\n                users: 0\n            });\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, `failed creating platform stats for ${data}`);\n        }\n    }\n    return res.status(201).redirect(decodeURIComponent(url));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW3VzZXJuYW1lXS9saW5rcy9bdXJsXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ0w7QUFFSjtBQUNNO0FBQ0o7QUFDNkM7QUFJOUUsZUFBZU0sUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTVIseURBQVlBO0lBRWxCLE1BQU0sRUFBRVMsU0FBUSxFQUFFQyxJQUFHLEVBQUUsR0FBR0gsSUFBSUksS0FBSztJQUVuQyxJQUFJSixJQUFJSyxNQUFNLElBQUksT0FBTztRQUN2QixPQUFPSixJQUNKSyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0M7SUFDM0QsQ0FBQztJQUVELE1BQU1DLE9BQU9YLHFGQUFzQkEsQ0FBQ0k7SUFFcEMsSUFBSSxDQUFDTyxLQUFLUCxRQUFRLEVBQUU7UUFDbEJSLDREQUFZLENBQUMsQ0FBQyxpQ0FBaUMsRUFBRVEsU0FBUyxDQUFDO1FBQzNELE9BQU9ELElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxDQUFDLEVBQUVOLFNBQVMsVUFBVSxDQUFDO1FBQUM7SUFDL0QsQ0FBQztJQUVELElBQ0UsQ0FBQ08sS0FBS0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1QsR0FBRyxLQUFLQSxRQUN4QyxDQUFDTSxLQUFLSSxPQUFPLENBQUNGLElBQUksQ0FBQyxDQUFDRyxTQUFXQSxPQUFPWCxHQUFHLEtBQUtBLE1BQzlDO1FBQ0FULDREQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUVTLElBQUksd0JBQXdCLEVBQUVELFNBQVMsQ0FBQztRQUM3RCxPQUFPRCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sQ0FBQyxNQUFNLEVBQUVMLElBQUksVUFBVSxDQUFDO1FBQUM7SUFDaEUsQ0FBQztJQUVELElBQUlZO0lBQ0osSUFBSTtRQUNGQSxhQUFhLE1B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QixRQUFRLENBQUNDLG1CQUFtQmhDO0FBQ3JELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3BhZ2VzL2FwaS91c2Vycy9bdXNlcm5hbWVdL2xpbmtzL1t1cmxdLmpzPzJlYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29uZmlnL21vbmdvXCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbmZpZy9sb2dnZXJcIjtcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9tb2RlbHMvTGlua1wiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbW9kZWxzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IFN0YXRzIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9tb2RlbHMvU3RhdHNcIjtcclxuaW1wb3J0IGZpbmRPbmVCeVVzZXJuYW1lQmFzaWMgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3NlcnZpY2VzL3Byb2ZpbGVzL2ZpbmRPbmVCeVVzZXJuYW1lQmFzaWNcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGF3YWl0IGNvbm5lY3RNb25nbygpO1xyXG5cclxuICBjb25zdCB7IHVzZXJuYW1lLCB1cmwgfSA9IHJlcS5xdWVyeTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgIT0gXCJHRVRcIikge1xyXG4gICAgcmV0dXJuIHJlc1xyXG4gICAgICAuc3RhdHVzKDQwMClcclxuICAgICAgLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIHJlcXVlc3Q6IEdFVCByZXF1ZXN0IHJlcXVpcmVkXCIgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRhID0gZmluZE9uZUJ5VXNlcm5hbWVCYXNpYyh1c2VybmFtZSk7XHJcblxyXG4gIGlmICghZGF0YS51c2VybmFtZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGBmYWlsZWQgbG9hZGluZyBwcm9maWxlIHVzZXJuYW1lOiAke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IGAke3VzZXJuYW1lfSBub3QgZm91bmRgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgIWRhdGEubGlua3MuZmluZCgobGluaykgPT4gbGluay51cmwgPT09IHVybCkgJiZcclxuICAgICFkYXRhLnNvY2lhbHMuZmluZCgoc29jaWFsKSA9PiBzb2NpYWwudXJsID09PSB1cmwpXHJcbiAgKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoYGxpbmsgJHt1cmx9IG5vdCBmb3VuZCBmb3IgdXNlcm5hbWUgJHt1c2VybmFtZX1gKTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiBgRVJST1IgJHt1cmx9IG5vdCBmb3VuZGAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0UHJvZmlsZTtcclxuICB0cnkge1xyXG4gICAgZ2V0UHJvZmlsZSA9IGF3YWl0IFByb2ZpbGUuZmluZE9uZSh7IHVzZXJuYW1lIH0pO1xyXG4gICAgXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIGBmYWlsZWQgbG9hZGluZyBwcm9maWxlIHVzZXJuYW1lOiAke3VzZXJuYW1lfWApO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IGBFUlJPUiAke3VzZXJuYW1lfSBub3QgZm91bmRgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFnZXRQcm9maWxlKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogYEVSUk9SICR7dXNlcm5hbWV9IG5vdCBmb3VuZGAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0TGluaztcclxuICB0cnkge1xyXG4gICAgZ2V0TGluayA9IGF3YWl0IExpbmsuZmluZE9uZSh7IHVzZXJuYW1lLCB1cmwgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIGBmYWlsZWQgbG9hZGluZyBsaW5rICR7dXJsfSBmb3IgdXNlcm5hbWU6ICR7dXNlcm5hbWV9YCk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogYEVSUk9SICR7dXJsfSBub3QgZm91bmRgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGdldExpbmspIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IExpbmsudXBkYXRlT25lKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJGluYzogeyBjbGlja3M6IDEgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvcihcclxuICAgICAgICBlLFxyXG4gICAgICAgIGBmYWlsZWQgaW5jcmVtZW50aW5nIGxpbms6ICR7dXJsfSBmb3IgdXNlcm5hbWUgJHt1c2VybmFtZX1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWdldExpbmspIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGxpbmsgPSBhd2FpdCBMaW5rLmNyZWF0ZSh7XHJcbiAgICAgICAgcHJvZmlsZTogZ2V0UHJvZmlsZS5faWQsXHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIGNsaWNrczogMSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBhd2FpdCBQcm9maWxlLnVwZGF0ZU9uZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICRwdXNoOiB7IGxpbmtzOiBsaW5rLl9pZCB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeyBuZXc6IHRydWUsIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nZ2VyLmVycm9yKFxyXG4gICAgICAgIGUsXHJcbiAgICAgICAgYGZhaWxlZCBjcmVhdGUgbGluayBzdGF0cyAke3VybH0gZm9yIHVzZXJuYW1lICR7dXNlcm5hbWV9YFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZGF0ZS5zZXRIb3VycygxLCAwLCAwLCAwKTtcclxuXHJcbiAgbGV0IGdldFBsYXRmb3JtU3RhdHM7XHJcbiAgdHJ5IHtcclxuICAgIGdldFBsYXRmb3JtU3RhdHMgPSBhd2FpdCBTdGF0cy5maW5kT25lKHsgZGF0ZSB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoZSwgYGZhaWxlZCBmaW5kaW5nIHBsYXRmb3JtIHN0YXRzIGZvciAke2RhdGF9YCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1TdGF0cykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgU3RhdHMudXBkYXRlT25lKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkaW5jOiB7IGNsaWNrczogMSB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nZ2VyLmVycm9yKGUsIGBmYWlsZWQgaW5jcmVtZW50aW5nIHBsYXRmb3JtIHN0YXRzIGZvciAke2RhdGF9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIWdldFBsYXRmb3JtU3RhdHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IFN0YXRzLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICB2aWV3czogMCxcclxuICAgICAgICBjbGlja3M6IDEsXHJcbiAgICAgICAgdXNlcnM6IDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBsb2dnZXIuZXJyb3IoZSwgYGZhaWxlZCBjcmVhdGluZyBwbGF0Zm9ybSBzdGF0cyBmb3IgJHtkYXRhfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5yZWRpcmVjdChkZWNvZGVVUklDb21wb25lbnQodXJsKSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nbyIsImxvZ2dlciIsIkxpbmsiLCJQcm9maWxlIiwiU3RhdHMiLCJmaW5kT25lQnlVc2VybmFtZUJhc2ljIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwidXJsIiwicXVlcnkiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwibGlua3MiLCJmaW5kIiwibGluayIsInNvY2lhbHMiLCJzb2NpYWwiLCJnZXRQcm9maWxlIiwiZmluZE9uZSIsImUiLCJnZXRMaW5rIiwidXBkYXRlT25lIiwiJGluYyIsImNsaWNrcyIsImNyZWF0ZSIsInByb2ZpbGUiLCJfaWQiLCIkcHVzaCIsIm5ldyIsInVzZUZpbmRBbmRNb2RpZnkiLCJkYXRlIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0UGxhdGZvcm1TdGF0cyIsInZpZXdzIiwidXNlcnMiLCJyZWRpcmVjdCIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[username]/links/[url].js\n");

/***/ }),

/***/ "(api)/./services/profiles/findOneByUsernameBasic.js":
/*!*****************************************************!*\
  !*** ./services/profiles/findOneByUsernameBasic.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findOneByUsername)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nfunction findOneByUsername(username) {\n    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", `${username}.json`);\n    let data = {};\n    try {\n        data = {\n            ...JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\")),\n            username\n        };\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, `failed loading profile username: ${username}`);\n    }\n    return data;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9maW5kT25lQnlVc2VybmFtZUJhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFvQjtBQUNJO0FBRWlCO0FBRTFCLFNBQVNHLGtCQUFrQkMsUUFBUSxFQUFFO0lBQ2xELE1BQU1DLFdBQVdKLGdEQUFTLENBQUNNLFFBQVFDLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRUosU0FBUyxLQUFLLENBQUM7SUFDcEUsSUFBSUssT0FBTyxDQUFDO0lBQ1osSUFBSTtRQUNGQSxPQUFPO1lBQ0wsR0FBR0MsS0FBS0MsS0FBSyxDQUFDWCxzREFBZSxDQUFDSyxVQUFVLFFBQVE7WUFDaEREO1FBQ0Y7SUFDRixFQUFFLE9BQU9TLEdBQUc7UUFDVlgsNERBQVksQ0FBQ1csR0FBRyxDQUFDLGlDQUFpQyxFQUFFVCxTQUFTLENBQUM7SUFDaEU7SUFFQSxPQUFPSztBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3NlcnZpY2VzL3Byb2ZpbGVzL2ZpbmRPbmVCeVVzZXJuYW1lQmFzaWMuanM/ZDJlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgbG9nZ2VyIGZyb20gXCIuLi8uLi9jb25maWcvbG9nZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kT25lQnlVc2VybmFtZSh1c2VybmFtZSkge1xyXG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiZGF0YVwiLCBgJHt1c2VybmFtZX0uanNvbmApO1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgdHJ5IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC4uLkpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIikpLFxyXG4gICAgICB1c2VybmFtZSxcclxuICAgIH07XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIGBmYWlsZWQgbG9hZGluZyBwcm9maWxlIHVzZXJuYW1lOiAke3VzZXJuYW1lfWApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImxvZ2dlciIsImZpbmRPbmVCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsImUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/profiles/findOneByUsernameBasic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[username]/links/[url].js"));
module.exports = __webpack_exports__;

})();