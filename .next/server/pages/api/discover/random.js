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
exports.id = "pages/api/discover/random";
exports.ids = ["pages/api/discover/random"];
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

/***/ "(api)/./pages/api/discover/random.js":
/*!**************************************!*\
  !*** ./pages/api/discover/random.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/profiles/loadProfiles */ \"(api)/./services/profiles/loadProfiles.js\");\n\n\n\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    let profiles = [];\n    try {\n        profiles = await _models_Profile__WEBPACK_IMPORTED_MODULE_4___default().aggregate([\n            {\n                $sample: {\n                    size: 5\n                }\n            },\n            {\n                $match: {\n                    username: {\n                        $nin: process.env.SHADOWBAN.split(\",\")\n                    }\n                }\n            }\n        ]);\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(e, \"failed to load profiles\");\n    }\n    if (profiles.length === 0) {\n        return res.status(404).json([]);\n    }\n    const fullRandomProfiles = await (0,_services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(profiles);\n    res.status(200).json(fullRandomProfiles);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGlzY292ZXIvcmFuZG9tLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV5QjtBQUNMO0FBQ0U7QUFDcUI7QUFFcEQsZUFBZU0sUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTU4seURBQVlBO0lBRWxCLElBQUlPLFdBQVcsRUFBRTtJQUNqQixJQUFJO1FBQ0ZBLFdBQVcsTUFBTUwsZ0VBQWlCLENBQUM7WUFDakM7Z0JBQUVPLFNBQVM7b0JBQUVDLE1BQU07Z0JBQUU7WUFBRTtZQUN2QjtnQkFBRUMsUUFBUTtvQkFBRUMsVUFBVTt3QkFBRUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLENBQUNDLEtBQUssQ0FBQztvQkFBSztnQkFBRTtZQUFFO1NBQ3BFO0lBQ0gsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZqQiw0REFBWSxDQUFDaUIsR0FBRztJQUNsQjtJQUVBLElBQUlYLFNBQVNhLE1BQU0sS0FBSyxHQUFHO1FBQ3pCLE9BQU9kLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxDQUFDO0lBRUQsTUFBTUMscUJBQXFCLE1BQU1wQiwyRUFBWUEsQ0FBQ0k7SUFFOUNELElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNDO0FBQ3ZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3BhZ2VzL2FwaS9kaXNjb3Zlci9yYW5kb20uanM/Y2IyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvbW9uZ29cIjtcclxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2xvZ2dlclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IGxvYWRQcm9maWxlcyBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHJvZmlsZXMvbG9hZFByb2ZpbGVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgYXdhaXQgY29ubmVjdE1vbmdvKCk7XHJcblxyXG4gIGxldCBwcm9maWxlcyA9IFtdO1xyXG4gIHRyeSB7XHJcbiAgICBwcm9maWxlcyA9IGF3YWl0IFByb2ZpbGUuYWdncmVnYXRlKFtcclxuICAgICAgeyAkc2FtcGxlOiB7IHNpemU6IDUgfSB9LFxyXG4gICAgICB7ICRtYXRjaDogeyB1c2VybmFtZTogeyAkbmluOiBwcm9jZXNzLmVudi5TSEFET1dCQU4uc3BsaXQoXCIsXCIpIH0gfSB9LFxyXG4gICAgXSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgbG9nZ2VyLmVycm9yKGUsIFwiZmFpbGVkIHRvIGxvYWQgcHJvZmlsZXNcIik7XHJcbiAgfVxyXG5cclxuICBpZiAocHJvZmlsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oW10pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZnVsbFJhbmRvbVByb2ZpbGVzID0gYXdhaXQgbG9hZFByb2ZpbGVzKHByb2ZpbGVzKTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZnVsbFJhbmRvbVByb2ZpbGVzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiY29ubmVjdE1vbmdvIiwibG9nZ2VyIiwiUHJvZmlsZSIsImxvYWRQcm9maWxlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9maWxlcyIsImFnZ3JlZ2F0ZSIsIiRzYW1wbGUiLCJzaXplIiwiJG1hdGNoIiwidXNlcm5hbWUiLCIkbmluIiwicHJvY2VzcyIsImVudiIsIlNIQURPV0JBTiIsInNwbGl0IiwiZSIsImVycm9yIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsImZ1bGxSYW5kb21Qcm9maWxlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/discover/random.js\n");

/***/ }),

/***/ "(api)/./services/profiles/loadProfiles.js":
/*!*******************************************!*\
  !*** ./services/profiles/loadProfiles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadProfiles)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nfunction loadProfiles(profiles) {\n    const directoryPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    const users = profiles.flatMap((profile)=>{\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(directoryPath, `${profile.username}.json`);\n        try {\n            const json = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\"));\n            return {\n                ...profile,\n                name: json.name,\n                bio: json.bio,\n                displayStatsPublic: json.displayStatsPublic,\n                avatar: json.avatar,\n                tags: json.tags\n            };\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, `failed loading profile in: ${filePath}`);\n            return [];\n        }\n    });\n    return users;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9sb2FkUHJvZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFaUI7QUFFMUIsU0FBU0csYUFBYUMsUUFBUSxFQUFFO0lBQzdDLE1BQU1DLGdCQUFnQkosZ0RBQVMsQ0FBQ00sUUFBUUMsR0FBRyxJQUFJO0lBRS9DLE1BQU1DLFFBQVFMLFNBQVNNLE9BQU8sQ0FBQyxDQUFDQyxVQUFZO1FBQzFDLE1BQU1DLFdBQVdYLGdEQUFTLENBQUNJLGVBQWUsQ0FBQyxFQUFFTSxRQUFRRSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BFLElBQUk7WUFDRixNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNoQixzREFBZSxDQUFDWSxVQUFVO1lBQ2xELE9BQU87Z0JBQ0wsR0FBR0QsT0FBTztnQkFDVk8sTUFBTUosS0FBS0ksSUFBSTtnQkFDZkMsS0FBS0wsS0FBS0ssR0FBRztnQkFDYkMsb0JBQW9CTixLQUFLTSxrQkFBa0I7Z0JBQzNDQyxRQUFRUCxLQUFLTyxNQUFNO2dCQUNuQkMsTUFBTVIsS0FBS1EsSUFBSTtZQUNqQjtRQUNGLEVBQUUsT0FBT0MsR0FBRztZQUNWckIsNERBQVksQ0FBQ3FCLEdBQUcsQ0FBQywyQkFBMkIsRUFBRVgsU0FBUyxDQUFDO1lBQ3hELE9BQU8sRUFBRTtRQUNYO0lBQ0Y7SUFFQSxPQUFPSDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3NlcnZpY2VzL3Byb2ZpbGVzL2xvYWRQcm9maWxlcy5qcz8wOGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uL2NvbmZpZy9sb2dnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9maWxlcyhwcm9maWxlcykge1xyXG4gIGNvbnN0IGRpcmVjdG9yeVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIpO1xyXG5cclxuICBjb25zdCB1c2VycyA9IHByb2ZpbGVzLmZsYXRNYXAoKHByb2ZpbGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKGRpcmVjdG9yeVBhdGgsIGAke3Byb2ZpbGUudXNlcm5hbWV9Lmpzb25gKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcm9maWxlLFxyXG4gICAgICAgIG5hbWU6IGpzb24ubmFtZSxcclxuICAgICAgICBiaW86IGpzb24uYmlvLFxyXG4gICAgICAgIGRpc3BsYXlTdGF0c1B1YmxpYzoganNvbi5kaXNwbGF5U3RhdHNQdWJsaWMsXHJcbiAgICAgICAgYXZhdGFyOiBqc29uLmF2YXRhcixcclxuICAgICAgICB0YWdzOiBqc29uLnRhZ3MsXHJcbiAgICAgIH07XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGxvZ2dlci5lcnJvcihlLCBgZmFpbGVkIGxvYWRpbmcgcHJvZmlsZSBpbjogJHtmaWxlUGF0aH1gKTtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdXNlcnM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImxvZ2dlciIsImxvYWRQcm9maWxlcyIsInByb2ZpbGVzIiwiZGlyZWN0b3J5UGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwidXNlcnMiLCJmbGF0TWFwIiwicHJvZmlsZSIsImZpbGVQYXRoIiwidXNlcm5hbWUiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwibmFtZSIsImJpbyIsImRpc3BsYXlTdGF0c1B1YmxpYyIsImF2YXRhciIsInRhZ3MiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/profiles/loadProfiles.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/discover/random.js"));
module.exports = __webpack_exports__;

})();