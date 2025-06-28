"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=s(function(w,n){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-assert-is-infinite/dist'),a=require('@stdlib/math-base-special-abs/dist'),q=require('@stdlib/math-base-special-expm1/dist'),o=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-trunc/dist');function c(e,r){var i,u;if(t(e)||t(r))return NaN;if(r===0)return 0;if(e===0)return-1;if(e<0&&r%2===0&&(e=-e),e>0){if((a(r*(e-1))<.5||a(r)<.2)&&(u=o(e)*r,u<.5))return q(u)}else if(N(r)!==r)return NaN;return i=p(e,r)-1,v(i)||t(i)?NaN:i}n.exports=c
});var l=f();module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
