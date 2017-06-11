/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _a = 'TLs#WjMviayhmcgxrVuwltped.G*E-on';
const _b = 'uo.ensVWtLcMGwlr#vjyTE*mpaxg-idh';
const _c = 'vpmue*cgxrEs-#WGnLolywiTdVtMhja.';
const _d = 'estETVrMyuvoxwnGc.Whlagdj*mp-#iL';
const _e = 'Wuh*EwLletxgdmsM#.VpTyci-arvnGjo';
const _f = 'TWhxaV.jw-vdyGnlpmELiruesgtcMo#*';
const _g = 'hGvn*xpt.TLwEyulcoem#Var-igWdjsM';
const _h = 'hmTgjtuxL-yGcav*.eVdMnrEpWol#swi';
const _i = 'tpegLMVuv.nlGE-#xmWcdTi*oryjawhs';
const _j = 'GvrTcwx*eWVds-gtmnha.jiyLolpEuM#';
var inputWindow = $(_e[16] + _g[25] + _b[4] + _d[27] + _c[3] + _b[8])[0][_b[10] + _b[1] + _e[28] + _j[15] + _i[2] + _f[14] + _f[26] + _d[18] + _e[23] + _j[17] + _h[19] + _d[11] + _a[19]];
var outputWindow = $(_b[16] + _f[29] + _j[29] + _g[7] + _c[1] + _a[18] + _f[26])[0][_b[10] + _d[11] + _g[3] + _i[0] + _f[23] + _b[4] + _e[9] + _d[18] + _j[22] + _a[31] + _a[24] + _b[1] + _g[11]];
var $errorOutput = $(_a[3] + _j[8] + _f[21] + _c[9] + _h[26] + _g[23] + _e[24] + _c[18] + _e[1] + _g[7] + _j[27] + _g[14] + _i[0]);
var setOutputReady = void 0;
var outputReady = new Promise(function (resolve, reject) {
    const _a2 = _j;
    const _b2 = _c;
    const _c2 = _b;
    const _d2 = _f;
    const _e2 = _d;
    const _f2 = _g;
    const _g2 = _e;
    const _h2 = _h;
    const _i2 = _i;
    const _j2 = _a;

    setOutputReady = resolve;
});
var demoReady = new Promise(function (resolve, reject) {
    const _a3 = _i;
    const _b3 = _c;
    const _c3 = _e;
    const _d3 = _d;
    const _e3 = _b;
    const _f3 = _g;
    const _g3 = _f;
    const _h3 = _j;
    const _i3 = _h;
    const _j3 = _a;

    $[_a[9] + _f[7] + _e[25] + _e[10]]({
        [_c[3] + _g[23] + _e[7]]: _d[23] + _e[8] + _b[23] + _d[11] + _c[31] + _e[30] + _b[5],
        [_i[0] + _j[23] + _b[24] + _d[0]]: _g[1] + _e[4] + _h[2],
        [_h[19] + _f[4] + _c[26] + _b[25] + _a[0] + _e[21] + _d[27] + _f[23]]: _f[26] + _b[3] + _j[6] + _j[15],
        [_c[11] + _d[9] + _h[12] + _g[16] + _b[3] + _h[29] + _e[14]]: resolve
    });
});
window[_b[25] + _a[24] + _d[23] + _a[28] + _h[14] + _f[23] + _g[3] + _d[2] + _f[19] + _f[20] + _i[31] + _i[0] + _a[23] + _a[31] + _f[23] + _d[6]](_j[16] + _d[0] + _d[1] + _g[30] + _e[25] + _f[25] + _b[3], function (_ref) {
    const _a4 = _j;
    const _b4 = _e;
    const _c4 = _a;
    const _d4 = _f;
    const _e4 = _g;
    const _f4 = _d;
    const _g4 = _c;
    const _h4 = _i;
    const _i4 = _b;
    const _j4 = _h;

    var source = _ref[_i[31] + _i[24] + _i[7] + _a[16] + _g[16] + _e[8]],
        _ref$data = _ref[_c[24] + _h[13] + _d[2] + _d[21]],
        action = _ref$data[_j[19] + _h[12] + _a[21] + _a[8] + _b[1] + _h[21]],
        data = _ref$data[_h[19] + _i[28] + _f[26] + _i[28]];

    switch (action) {
        case _i[25] + _a[23] + _j[19] + _f[11] + _f[12]:
            if (source === outputWindow) {
                setOutputReady();
            } else if (source === inputWindow) {
                demoReady[_e[9] + _b[31] + _d[0] + _g[3]](function (demoCode) {
                    const _a5 = _a;
                    const _b5 = _d;
                    const _c5 = _c;
                    const _d5 = _h;
                    const _e5 = _e;
                    const _f5 = _g;
                    const _g5 = _f;
                    const _h5 = _j;
                    const _i5 = _b;
                    const _j5 = _i;

                    inputWindow[_j[27] + _i[24] + _a[2] + _b[8] + _i[5] + _j[8] + _b[5] + _j[12] + _f[4] + _a[14] + _d[0]]({
                        [_j[19] + _j[4] + _g[7] + _i[22] + _j[25] + _b[4]]: _c[11] + _j[8] + _i[0] + _b[6] + _c[30] + _i[11] + _a[18] + _j[8],
                        [_j[11] + _i[28] + _g[7] + _g[22]]: demoCode
                    }, _d[25]);
                });
            }
            break;
        case _j[4] + _h[0] + _g[22] + _g[3] + _e[11] + _b[3]:
            if (source === inputWindow) {
                var code = void 0;
                $errorOutput[_d[0] + _d[26] + _h[24] + _h[5] + _d[8]]();
                try {
                    code = decentMessUp(data);
                } catch (e) {
                    $errorOutput[_j[15] + _g[18] + _e[10] + _f[26]](e[_h[1] + _a[23] + _b[5] + _g[30] + _c[30] + _g[26] + _f[23]]);
                    outputReady[_h[5] + _a[11] + _d[0] + _e[28]](function () {
                        const _a6 = _h;
                        const _b6 = _i;
                        const _c6 = _e;
                        const _d6 = _c;
                        const _e6 = _j;
                        const _f6 = _a;
                        const _g6 = _d;
                        const _h6 = _b;
                        const _i6 = _g;
                        const _j6 = _f;

                        outputWindow[_e[19] + _g[17] + _i[31] + _b[8] + _f[28] + _i[2] + _b[5] + _e[14] + _e[25] + _d[22] + _i[2]]({
                            [_a[9] + _a[13] + _e[9] + _i[22] + _i[24] + _c[16]]: _c[11] + _a[23] + _e[9] + _g[21] + _f[4] + _b[14] + _a[18] + _j[8],
                            [_b[30] + _h[13] + _d[2] + _h[13]]: ""
                        }, _h[15]);
                    });
                    return;
                }

                outputReady[_h[5] + _h[0] + _d[0] + _b[4]](function () {
                    const _a7 = _h;
                    const _b7 = _e;
                    const _c7 = _c;
                    const _d7 = _i;
                    const _e7 = _g;
                    const _f7 = _d;
                    const _g7 = _j;
                    const _h7 = _a;
                    const _i7 = _b;
                    const _j7 = _f;

                    outputWindow[_g[6] + _b[1] + _j[12] + _i[0] + _a[6] + _g[18] + _g[30] + _e[14] + _e[25] + _g[26] + _d[0]]({
                        [_a[9] + _c[6] + _f[26] + _f[20] + _f[29] + _h[21]]: _b[5] + _g[18] + _b[8] + _d[5] + _j[19] + _c[19] + _e[1] + _i[2],
                        [_g[28] + _b[25] + _f[26] + _c[30]]: code
                    }, _h[15]);
                });
            }
            break;
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);