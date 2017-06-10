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


const _a = 'uowl#-*jGgrvLtVpy.adWcMmETensxhi';
const _b = 'imdyv#.lxtMu-jVsWerEocwh*aGgnTpL';
const _c = 'Vjs-g.LuoEGraMpmxvewty#cTWl*ndhi';
const _d = 'TyvjdrnwWEGVoxcMuagit-p.#*mhelsL';
const _e = 'e.M-xEjn#usWgw*mpoVyGdrvcTLliaht';
const _f = 'cVxsGM.nreilWjwphv*TaogLtym-#dEu';
const _g = 'jr*.x#yTmiEuVclhLgGavptedM-snwWo';
const _h = 'LhdugVtMjws#rmGoe.-EyWvi*xcnlTap';
const _i = 'gVumaTowiv.-rLMyxnel#hEGdpctsj*W';
const _j = 'ynmeLxol*MTEdpawGr#ch-iWgtjVvus.';
var inputWindow = $(_g[5] + _b[0] + _g[28] + _f[15] + _b[11] + _j[25])[0][_g[13] + _a[1] + _f[7] + _b[9] + _i[18] + _h[27] + _f[24] + _j[23] + _j[22] + _a[27] + _f[29] + _a[1] + _f[14]];
var outputWindow = $(_e[8] + _i[6] + _j[29] + _c[20] + _i[25] + _f[31] + _i[27])[0][_a[21] + _j[6] + _e[7] + _a[13] + _j[3] + _f[7] + _d[20] + _h[21] + _f[10] + _j[1] + _i[24] + _c[8] + _a[2]];
var $errorOutput = $(_c[22] + _e[0] + _e[22] + _d[5] + _b[20] + _c[11] + _j[21] + _d[12] + _j[29] + _h[6] + _j[13] + _a[0] + _j[25]);
var setOutputReady = void 0;
var outputReady = new Promise(function (resolve, reject) {
    const _a2 = _f;
    const _b2 = _h;
    const _c2 = _j;
    const _d2 = _d;
    const _e2 = _i;
    const _f2 = _c;
    const _g2 = _a;
    const _h2 = _e;
    const _i2 = _b;
    const _j2 = _g;

    setOutputReady = resolve;
});
var demoReady = new Promise(function (resolve, reject) {
    const _a3 = _a;
    const _b3 = _j;
    const _c3 = _d;
    const _d3 = _i;
    const _e3 = _h;
    const _f3 = _e;
    const _g3 = _c;
    const _h3 = _b;
    const _i3 = _f;
    const _j3 = _g;

    $[_g[19] + _j[26] + _a[18] + _f[2]]({
        [_j[29] + _e[22] + _j[7]]: _i[24] + _h[16] + _i[3] + _g[31] + _j[31] + _d[3] + _e[10],
        [_b[9] + _d[1] + _j[13] + _b[17]]: _g[18] + _a[24] + _a[25],
        [_g[24] + _e[29] + _i[27] + _b[25] + _c[24] + _h[20] + _c[14] + _d[28]]: _i[27] + _a[26] + _j[5] + _g[22],
        [_d[30] + _g[11] + _g[13] + _c[23] + _a[26] + _h[10] + _b[15]]: resolve
    });
});
window[_e[29] + _e[21] + _b[2] + _j[11] + _b[4] + _h[16] + _a[27] + _g[22] + _b[31] + _e[28] + _d[30] + _d[20] + _j[3] + _h[27] + _g[23] + _h[12]](_g[8] + _d[28] + _f[3] + _j[30] + _e[29] + _f[22] + _j[3], function (_ref) {
    const _a4 = _h;
    const _b4 = _g;
    const _c4 = _j;
    const _d4 = _c;
    const _e4 = _b;
    const _f4 = _i;
    const _g4 = _a;
    const _h4 = _f;
    const _i4 = _e;
    const _j4 = _d;

    var source = _ref[_e[10] + _e[17] + _a[0] + _g[1] + _i[26] + _f[9]],
        _ref$data = _ref[_b[2] + _c[12] + _j[25] + _h[30]],
        action = _ref$data[_e[29] + _i[26] + _d[20] + _e[28] + _e[17] + _c[28]],
        data = _ref$data[_h[2] + _d[17] + _j[25] + _h[30]];

    switch (action) {
        case _c[11] + _h[16] + _a[18] + _e[21] + _h[20]:
            if (source === outputWindow) {
                setOutputReady();
            } else if (source === inputWindow) {
                demoReady[_h[6] + _d[27] + _j[3] + _f[7]](function (demoCode) {
                    const _a5 = _d;
                    const _b5 = _i;
                    const _c5 = _j;
                    const _d5 = _e;
                    const _e5 = _c;
                    const _f5 = _h;
                    const _g5 = _g;
                    const _h5 = _b;
                    const _i5 = _f;
                    const _j5 = _a;

                    inputWindow[_i[25] + _h[15] + _j[30] + _e[31] + _h[7] + _f[9] + _a[28] + _a[28] + _i[4] + _h[4] + _a[26]]({
                        [_e[29] + _j[19] + _b[9] + _a[31] + _c[8] + _i[17]]: _h[10] + _j[3] + _b[9] + _i[1] + _h[30] + _e[27] + _h[3] + _e[0],
                        [_c[29] + _c[12] + _i[27] + _h[30]]: demoCode
                    }, _g[2]);
                });
            }
            break;
        case _d[14] + _g[15] + _f[20] + _i[17] + _c[4] + _j[3]:
            if (source === inputWindow) {
                var code = void 0;
                $errorOutput[_d[28] + _a[23] + _f[15] + _e[31] + _g[6]]();
                try {
                    code = decentMessUp(data);
                } catch (e) {
                    $errorOutput[_g[22] + _e[0] + _d[13] + _g[22]](e[_h[13] + _h[16] + _i[28] + _c[2] + _e[29] + _b[27] + _b[17]]);
                    outputReady[_c[20] + _c[30] + _e[0] + _g[28]](function () {
                        const _a6 = _d;
                        const _b6 = _h;
                        const _c6 = _c;
                        const _d6 = _g;
                        const _e6 = _f;
                        const _f6 = _b;
                        const _g6 = _a;
                        const _h6 = _j;
                        const _i6 = _e;
                        const _j6 = _i;

                        outputWindow[_i[25] + _g[31] + _i[28] + _i[27] + _b[10] + _h[16] + _c[2] + _d[30] + _b[25] + _e[12] + _j[3]]({
                            [_j[14] + _i[26] + _j[25] + _d[19] + _h[15] + _a[27]]: _f[3] + _j[3] + _b[9] + _j[27] + _i[4] + _f[11] + _g[11] + _e[0],
                            [_c[29] + _i[4] + _c[20] + _e[29]]: ""
                        }, _f[18]);
                    });
                    return;
                }

                outputReady[_g[22] + _c[30] + _f[9] + _i[17]](function () {
                    const _a7 = _i;
                    const _b7 = _b;
                    const _c7 = _j;
                    const _d7 = _c;
                    const _e7 = _a;
                    const _f7 = _d;
                    const _g7 = _h;
                    const _h7 = _g;
                    const _i7 = _e;
                    const _j7 = _f;

                    outputWindow[_d[22] + _h[15] + _g[27] + _a[13] + _f[5] + _f[9] + _b[15] + _h[10] + _j[14] + _d[18] + _d[28]]({
                        [_g[19] + _c[23] + _g[22] + _e[28] + _a[1] + _h[27]]: _j[30] + _i[18] + _j[25] + _h[5] + _h[30] + _g[14] + _g[11] + _d[28],
                        [_h[2] + _j[14] + _j[25] + _a[18]]: code
                    }, _c[27]);
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