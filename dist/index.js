"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=f(function(m,a){
var u=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-abs/dist'),s=require('@stdlib/math-base-special-expm1/dist'),v=require('@stdlib/math-base-special-ln/dist'),q=require('@stdlib/math-base-special-pow/dist'),o=require('@stdlib/math-base-special-trunc/dist');function p(e,r){var i;if(u(e)||u(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((t(r*(e-1))<.5||t(r)<.2)&&(i=v(e)*r,i<.5))return s(i)}else if(o(r)!==r)return NaN;return q(e,r)-1}a.exports=p
});var c=n();module.exports=c;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
