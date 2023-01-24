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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_profiles_findAllBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/profiles/findAllBasic */ \"(api)/./services/profiles/findAllBasic.js\");\n/* harmony import */ var _services_profiles_hydrateWithStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/profiles/hydrateWithStats */ \"(api)/./services/profiles/hydrateWithStats.js\");\n\n\nasync function handler(req, res) {\n    const profiles = (0,_services_profiles_findAllBasic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const profilesWithStats = await (0,_services_profiles_hydrateWithStats__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(profiles);\n    res.status(200).json(profilesWithStats);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1FO0FBQ1E7QUFFNUQsZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsV0FBV0wsMkVBQVlBO0lBQzdCLE1BQU1NLG9CQUFvQixNQUFNTCwrRUFBZ0JBLENBQUNJO0lBRWpERCxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/MWQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZEFsbEJhc2ljIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wcm9maWxlcy9maW5kQWxsQmFzaWNcIjtcclxuaW1wb3J0IGh5ZHJhdGVXaXRoU3RhdHMgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3Byb2ZpbGVzL2h5ZHJhdGVXaXRoU3RhdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCBwcm9maWxlcyA9IGZpbmRBbGxCYXNpYygpO1xyXG4gIGNvbnN0IHByb2ZpbGVzV2l0aFN0YXRzID0gYXdhaXQgaHlkcmF0ZVdpdGhTdGF0cyhwcm9maWxlcyk7XHJcblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2ZpbGVzV2l0aFN0YXRzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZmluZEFsbEJhc2ljIiwiaHlkcmF0ZVdpdGhTdGF0cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9maWxlcyIsInByb2ZpbGVzV2l0aFN0YXRzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ }),

/***/ "(api)/./services/profiles/findAllBasic.js":
/*!*******************************************!*\
  !*** ./services/profiles/findAllBasic.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findAllBasic)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nfunction findAllBasic() {\n    const directoryPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    let files = [];\n    try {\n        files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(directoryPath).filter((item)=>item.includes(\"json\"));\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, \"failed to list profiles\");\n    }\n    const users = files.flatMap((file)=>{\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(directoryPath, file);\n        try {\n            const json = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\"));\n            return {\n                name: json.name,\n                bio: json.bio,\n                displayStatsPublic: json.displayStatsPublic,\n                avatar: json.avatar,\n                tags: json.tags,\n                username: file.split(\".\")[0]\n            };\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, `failed loading profile in: ${filePath}`);\n            return [];\n        }\n    });\n    return users;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9maW5kQWxsQmFzaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFaUI7QUFFMUIsU0FBU0csZUFBZTtJQUNyQyxNQUFNQyxnQkFBZ0JILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSTtJQUUvQyxJQUFJQyxRQUFRLEVBQUU7SUFDZCxJQUFJO1FBQ0ZBLFFBQVFSLHFEQUNNLENBQUNJLGVBQ1pNLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLENBQUM7SUFDcEMsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZYLDREQUFZLENBQUNXLEdBQUc7SUFDbEI7SUFFQSxNQUFNRSxRQUFRUCxNQUFNUSxPQUFPLENBQUMsQ0FBQ0MsT0FBUztRQUNwQyxNQUFNQyxXQUFXakIsZ0RBQVMsQ0FBQ0csZUFBZWE7UUFDMUMsSUFBSTtZQUNGLE1BQU1FLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ3JCLHNEQUFlLENBQUNrQixVQUFVO1lBQ2xELE9BQU87Z0JBQ0xLLE1BQU1KLEtBQUtJLElBQUk7Z0JBQ2ZDLEtBQUtMLEtBQUtLLEdBQUc7Z0JBQ2JDLG9CQUFvQk4sS0FBS00sa0JBQWtCO2dCQUMzQ0MsUUFBUVAsS0FBS08sTUFBTTtnQkFDbkJDLE1BQU1SLEtBQUtRLElBQUk7Z0JBQ2ZDLFVBQVVYLEtBQUtZLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QjtRQUNGLEVBQUUsT0FBT2hCLEdBQUc7WUFDVlgsNERBQVksQ0FBQ1csR0FBRyxDQUFDLDJCQUEyQixFQUFFSyxTQUFTLENBQUM7WUFDeEQsT0FBTyxFQUFFO1FBQ1g7SUFDRjtJQUVBLE9BQU9IO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vc2VydmljZXMvcHJvZmlsZXMvZmluZEFsbEJhc2ljLmpzPzc0OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vY29uZmlnL2xvZ2dlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEFsbEJhc2ljKCkge1xyXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIpO1xyXG5cclxuICBsZXQgZmlsZXMgPSBbXTtcclxuICB0cnkge1xyXG4gICAgZmlsZXMgPSBmc1xyXG4gICAgICAucmVhZGRpclN5bmMoZGlyZWN0b3J5UGF0aClcclxuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmNsdWRlcyhcImpzb25cIikpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGxvZ2dlci5lcnJvcihlLCBcImZhaWxlZCB0byBsaXN0IHByb2ZpbGVzXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlcnMgPSBmaWxlcy5mbGF0TWFwKChmaWxlKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBuYW1lOiBqc29uLm5hbWUsXHJcbiAgICAgICAgYmlvOiBqc29uLmJpbyxcclxuICAgICAgICBkaXNwbGF5U3RhdHNQdWJsaWM6IGpzb24uZGlzcGxheVN0YXRzUHVibGljLFxyXG4gICAgICAgIGF2YXRhcjoganNvbi5hdmF0YXIsXHJcbiAgICAgICAgdGFnczoganNvbi50YWdzLFxyXG4gICAgICAgIHVzZXJuYW1lOiBmaWxlLnNwbGl0KFwiLlwiKVswXSxcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgbG9nZ2VyLmVycm9yKGUsIGBmYWlsZWQgbG9hZGluZyBwcm9maWxlIGluOiAke2ZpbGVQYXRofWApO1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB1c2VycztcclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibG9nZ2VyIiwiZmluZEFsbEJhc2ljIiwiZGlyZWN0b3J5UGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInVzZXJzIiwiZmxhdE1hcCIsImZpbGUiLCJmaWxlUGF0aCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuYW1lIiwiYmlvIiwiZGlzcGxheVN0YXRzUHVibGljIiwiYXZhdGFyIiwidGFncyIsInVzZXJuYW1lIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/profiles/findAllBasic.js\n");

/***/ }),

/***/ "(api)/./services/profiles/hydrateWithStats.js":
/*!***********************************************!*\
  !*** ./services/profiles/hydrateWithStats.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hydrateWithStats)\n/* harmony export */ });\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function hydrateWithStats(users) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let getStats = [];\n    try {\n        getStats = await _models_Profile__WEBPACK_IMPORTED_MODULE_2___default().find({\n            username: {\n                $in: users.map((user)=>user.username)\n            }\n        });\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, \"failed loading profile stats\");\n        return users;\n    }\n    // merge profiles with their profile views if set to public\n    const profiles = users.map((user)=>{\n        const stats = getStats.find((stat)=>stat.username === user.username);\n        if (stats && user.displayStatsPublic) {\n            return {\n                ...user,\n                views: stats._doc.views\n            };\n        }\n        return user;\n    });\n    _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].info(`${profiles.length} profiles merges with their stats`);\n    return profiles;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9oeWRyYXRlV2l0aFN0YXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ0w7QUFDRTtBQUU1QixlQUFlRyxpQkFBaUJDLEtBQUssRUFBRTtJQUNwRCxNQUFNSix5REFBWUE7SUFFbEIsSUFBSUssV0FBVyxFQUFFO0lBQ2pCLElBQUk7UUFDRkEsV0FBVyxNQUFNSCwyREFBWSxDQUFDO1lBQzVCSyxVQUFVO2dCQUFFQyxLQUFLSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0gsUUFBUTtZQUFFO1FBQ3REO0lBQ0YsRUFBRSxPQUFPSSxHQUFHO1FBQ1ZWLDREQUFZLENBQUNVLEdBQUc7UUFDaEIsT0FBT1A7SUFDVDtJQUVBLDJEQUEyRDtJQUMzRCxNQUFNUyxXQUFXVCxNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsT0FBUztRQUNuQyxNQUFNSSxRQUFRVCxTQUFTQyxJQUFJLENBQUMsQ0FBQ1MsT0FBU0EsS0FBS1IsUUFBUSxLQUFLRyxLQUFLSCxRQUFRO1FBQ3JFLElBQUlPLFNBQVNKLEtBQUtNLGtCQUFrQixFQUFFO1lBQ3BDLE9BQU87Z0JBQ0wsR0FBR04sSUFBSTtnQkFDUE8sT0FBT0gsTUFBTUksSUFBSSxDQUFDRCxLQUFLO1lBQ3pCO1FBQ0YsQ0FBQztRQUVELE9BQU9QO0lBQ1Q7SUFFQVQsMkRBQVcsQ0FBQyxDQUFDLEVBQUVZLFNBQVNPLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztJQUVqRSxPQUFPUDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3NlcnZpY2VzL3Byb2ZpbGVzL2h5ZHJhdGVXaXRoU3RhdHMuanM/ODQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi9jb25maWcvbW9uZ29cIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vY29uZmlnL2xvZ2dlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Byb2ZpbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGh5ZHJhdGVXaXRoU3RhdHModXNlcnMpIHtcclxuICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcclxuXHJcbiAgbGV0IGdldFN0YXRzID0gW107XHJcbiAgdHJ5IHtcclxuICAgIGdldFN0YXRzID0gYXdhaXQgUHJvZmlsZS5maW5kKHtcclxuICAgICAgdXNlcm5hbWU6IHsgJGluOiB1c2Vycy5tYXAoKHVzZXIpID0+IHVzZXIudXNlcm5hbWUpIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBsb2dnZXIuZXJyb3IoZSwgXCJmYWlsZWQgbG9hZGluZyBwcm9maWxlIHN0YXRzXCIpO1xyXG4gICAgcmV0dXJuIHVzZXJzO1xyXG4gIH1cclxuXHJcbiAgLy8gbWVyZ2UgcHJvZmlsZXMgd2l0aCB0aGVpciBwcm9maWxlIHZpZXdzIGlmIHNldCB0byBwdWJsaWNcclxuICBjb25zdCBwcm9maWxlcyA9IHVzZXJzLm1hcCgodXNlcikgPT4ge1xyXG4gICAgY29uc3Qgc3RhdHMgPSBnZXRTdGF0cy5maW5kKChzdGF0KSA9PiBzdGF0LnVzZXJuYW1lID09PSB1c2VyLnVzZXJuYW1lKTtcclxuICAgIGlmIChzdGF0cyAmJiB1c2VyLmRpc3BsYXlTdGF0c1B1YmxpYykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnVzZXIsXHJcbiAgICAgICAgdmlld3M6IHN0YXRzLl9kb2Mudmlld3MsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVzZXI7XHJcbiAgfSk7XHJcblxyXG4gIGxvZ2dlci5pbmZvKGAke3Byb2ZpbGVzLmxlbmd0aH0gcHJvZmlsZXMgbWVyZ2VzIHdpdGggdGhlaXIgc3RhdHNgKTtcclxuXHJcbiAgcmV0dXJuIHByb2ZpbGVzO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJsb2dnZXIiLCJQcm9maWxlIiwiaHlkcmF0ZVdpdGhTdGF0cyIsInVzZXJzIiwiZ2V0U3RhdHMiLCJmaW5kIiwidXNlcm5hbWUiLCIkaW4iLCJtYXAiLCJ1c2VyIiwiZSIsImVycm9yIiwicHJvZmlsZXMiLCJzdGF0cyIsInN0YXQiLCJkaXNwbGF5U3RhdHNQdWJsaWMiLCJ2aWV3cyIsIl9kb2MiLCJpbmZvIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/profiles/hydrateWithStats.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();