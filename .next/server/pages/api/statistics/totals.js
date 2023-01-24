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
exports.id = "pages/api/statistics/totals";
exports.ids = ["pages/api/statistics/totals"];
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

/***/ "(api)/./pages/api/statistics/totals.js":
/*!****************************************!*\
  !*** ./pages/api/statistics/totals.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/Stats */ \"(api)/./models/Stats.js\");\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_models_Stats__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let dailyStats = [];\n    try {\n        dailyStats = await _models_Stats__WEBPACK_IMPORTED_MODULE_5___default().find({});\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(e, \"failed to load stats\");\n    }\n    let views = 0;\n    let clicks = 0;\n    dailyStats.forEach((stat)=>{\n        views += stat.views;\n        clicks += stat.clicks;\n    });\n    let activeProfiles = 0;\n    try {\n        activeProfiles = await _models_Profile__WEBPACK_IMPORTED_MODULE_4___default().find({}).estimatedDocumentCount();\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(e, \"failed to load profile statistics\");\n    }\n    const directoryPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    let totalProfiles = [];\n    try {\n        totalProfiles = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(directoryPath).filter((item)=>item.includes(\"json\"));\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(e, \"failed to load profile list\");\n    }\n    const data = {\n        views,\n        clicks,\n        users: totalProfiles.length || 0,\n        active: activeProfiles || 0\n    };\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdGlzdGljcy90b3RhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV5QjtBQUNMO0FBQ0U7QUFDSjtBQUUzQixlQUFlTSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNTix5REFBWUE7SUFFbEIsSUFBSU8sYUFBYSxFQUFFO0lBQ25CLElBQUk7UUFDRkEsYUFBYSxNQUFNSix5REFBVSxDQUFDLENBQUM7SUFDakMsRUFBRSxPQUFPTSxHQUFHO1FBQ1ZSLDREQUFZLENBQUNRLEdBQUc7SUFDbEI7SUFFQSxJQUFJRSxRQUFRO0lBQ1osSUFBSUMsU0FBUztJQUNiTCxXQUFXTSxPQUFPLENBQUMsQ0FBQ0MsT0FBUztRQUMzQkgsU0FBU0csS0FBS0gsS0FBSztRQUNuQkMsVUFBVUUsS0FBS0YsTUFBTTtJQUN2QjtJQUVBLElBQUlHLGlCQUFpQjtJQUNyQixJQUFJO1FBQ0ZBLGlCQUFpQixNQUFNYiwyREFBWSxDQUFDLENBQUMsR0FBR2Msc0JBQXNCO0lBQ2hFLEVBQUUsT0FBT1AsR0FBRztRQUNWUiw0REFBWSxDQUFDUSxHQUFHO0lBQ2xCO0lBRUEsTUFBTVEsZ0JBQWdCbEIsZ0RBQVMsQ0FBQ29CLFFBQVFDLEdBQUcsSUFBSTtJQUMvQyxJQUFJQyxnQkFBZ0IsRUFBRTtJQUN0QixJQUFJO1FBQ0ZBLGdCQUFnQnZCLHFEQUNGLENBQUNtQixlQUNaTSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsUUFBUSxDQUFDO0lBQ3BDLEVBQUUsT0FBT2hCLEdBQUc7UUFDVlIsNERBQVksQ0FBQ1EsR0FBRztJQUNsQjtJQUVBLE1BQU1pQixPQUFPO1FBQ1hmO1FBQ0FDO1FBQ0FlLE9BQU9OLGNBQWNPLE1BQU0sSUFBSTtRQUMvQkMsUUFBUWQsa0JBQWtCO0lBQzVCO0lBRUFULElBQUl3QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTDtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9wYWdlcy9hcGkvc3RhdGlzdGljcy90b3RhbHMuanM/NWI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvbW9uZ29cIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2xvZ2dlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IFN0YXRzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvU3RhdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcclxuXHJcbiAgbGV0IGRhaWx5U3RhdHMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgZGFpbHlTdGF0cyA9IGF3YWl0IFN0YXRzLmZpbmQoe30pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGxvZ2dlci5lcnJvcihlLCBcImZhaWxlZCB0byBsb2FkIHN0YXRzXCIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHZpZXdzID0gMDtcclxuICBsZXQgY2xpY2tzID0gMDtcclxuICBkYWlseVN0YXRzLmZvckVhY2goKHN0YXQpID0+IHtcclxuICAgIHZpZXdzICs9IHN0YXQudmlld3M7XHJcbiAgICBjbGlja3MgKz0gc3RhdC5jbGlja3M7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBhY3RpdmVQcm9maWxlcyA9IDA7XHJcbiAgdHJ5IHtcclxuICAgIGFjdGl2ZVByb2ZpbGVzID0gYXdhaXQgUHJvZmlsZS5maW5kKHt9KS5lc3RpbWF0ZWREb2N1bWVudENvdW50KCk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIFwiZmFpbGVkIHRvIGxvYWQgcHJvZmlsZSBzdGF0aXN0aWNzXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIik7XHJcbiAgbGV0IHRvdGFsUHJvZmlsZXMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgdG90YWxQcm9maWxlcyA9IGZzXHJcbiAgICAgIC5yZWFkZGlyU3luYyhkaXJlY3RvcnlQYXRoKVxyXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluY2x1ZGVzKFwianNvblwiKSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIFwiZmFpbGVkIHRvIGxvYWQgcHJvZmlsZSBsaXN0XCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0YSA9IHtcclxuICAgIHZpZXdzLFxyXG4gICAgY2xpY2tzLFxyXG4gICAgdXNlcnM6IHRvdGFsUHJvZmlsZXMubGVuZ3RoIHx8IDAsXHJcbiAgICBhY3RpdmU6IGFjdGl2ZVByb2ZpbGVzIHx8IDAsXHJcbiAgfTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImNvbm5lY3RNb25nbyIsImxvZ2dlciIsIlByb2ZpbGUiLCJTdGF0cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYWlseVN0YXRzIiwiZmluZCIsImUiLCJlcnJvciIsInZpZXdzIiwiY2xpY2tzIiwiZm9yRWFjaCIsInN0YXQiLCJhY3RpdmVQcm9maWxlcyIsImVzdGltYXRlZERvY3VtZW50Q291bnQiLCJkaXJlY3RvcnlQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJ0b3RhbFByb2ZpbGVzIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJkYXRhIiwidXNlcnMiLCJsZW5ndGgiLCJhY3RpdmUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/statistics/totals.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/statistics/totals.js"));
module.exports = __webpack_exports__;

})();