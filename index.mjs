// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-trunc@v0.2.2-esm/index.mjs";function a(a,d){var l,p;if(s(a)||s(d))return NaN;if(0===d)return 0;if(0===a)return-1;if(a<0&&d%2==0&&(a=-a),a>0){if((e(d*(a-1))<.5||e(d)<.2)&&(p=r(a)*d)<.5)return i(p)}else if(n(d)!==d)return NaN;return l=m(a,d)-1,t(l)||s(l)?NaN:l}export{a as default};
//# sourceMappingURL=index.mjs.map
