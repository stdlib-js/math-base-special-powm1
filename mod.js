// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}function e(r){return Math.abs(r)}var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(u=r)&&i.call(u,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,g="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var v,d="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,e,n;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=v,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,A="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=m,E="function"==typeof Uint16Array;var U="function"==typeof Uint16Array?Uint16Array:null;var I,S="function"==typeof Uint16Array?Uint16Array:void 0;I=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,N={uint16:I,uint8:_};(x=new N.uint16(1))[0]=4660;var k=52===new N.uint8(x.buffer)[0],F=!0===k?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V,$,G=!0===k?1:0,H=new h(1),W=new p(H.buffer);function C(r,e){return H[0]=r,W[G]=e>>>0,H[0]}!0===k?(V=1,$=0):(V=0,$=1);var L={HIGH:V,LOW:$},P=new h(1),R=new p(P.buffer),M=L.HIGH,Z=L.LOW;function X(r,e){return R[M]=r,R[Z]=e,P[0]}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY;var z=.6931471803691238,B=1.9082149292705877e-10;var D=.6931471803691238,J=1.9082149292705877e-10;var K=Math.floor;function Q(r){return K(r)===r}function rr(r){return Q(r/2)}function er(r){return rr(r>0?r-1:r+1)}function nr(r){return r===Y||r===q}var tr=Math.sqrt,ir="function"==typeof Object.defineProperty?Object.defineProperty:null;var ar=Object.defineProperty;function or(r){return"number"==typeof r}function ur(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function fr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+ur(i):ur(i)+r,t&&(r="-"+r)),r}var cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase;function lr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!or(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=fr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=fr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):cr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function pr(r){return"string"==typeof r}var gr=Math.abs,yr=String.prototype.toLowerCase,vr=String.prototype.toUpperCase,dr=String.prototype.replace,hr=/e\+(\d)$/,wr=/e-(\d)$/,br=/^(\d+)$/,mr=/^(\d+)e/,Ar=/\.0$/,_r=/\.0*e/,Er=/(\..*[^0])0*e/;function Ur(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!or(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":gr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=dr.call(n,Er,"$1e"),n=dr.call(n,_r,"e"),n=dr.call(n,Ar,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=dr.call(n,hr,"e+0$1"),n=dr.call(n,wr,"e-0$1"),r.alternate&&(n=dr.call(n,br,"$1."),n=dr.call(n,mr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===vr.call(r.specifier)?vr.call(n):yr.call(n)}function Ir(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Sr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Ir(t):Ir(t)+r}var xr=String.fromCharCode,Nr=isNaN,kr=Array.isArray;function Fr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function jr(r){var e,n,t,i,a,o,u,f,c;if(!kr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(pr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Fr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Nr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Nr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=lr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Nr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Nr(a)?String(t.arg):xr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Ur(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=fr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Sr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Or(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Vr(r){var e,n,t,i;for(n=[],i=0,t=Tr.exec(r);t;)(e=r.slice(i,Tr.lastIndex-t[0].length)).length&&n.push(e),n.push(Or(t)),i=Tr.lastIndex,t=Tr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function $r(r){return"string"==typeof r}function Gr(r){var e,n,t;if(!$r(r))throw new TypeError(Gr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Vr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return jr.apply(null,n)}var Hr=Object.prototype,Wr=Hr.toString,Cr=Hr.__defineGetter__,Lr=Hr.__defineSetter__,Pr=Hr.__lookupGetter__,Rr=Hr.__lookupSetter__;var Mr,Zr,Xr=function(){try{return ir({},"x",{}),!0}catch(r){return!1}}()?ar:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Wr.call(r))throw new TypeError(Gr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Wr.call(n))throw new TypeError(Gr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Pr.call(r,e)||Rr.call(r,e)?(t=r.__proto__,r.__proto__=Hr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Cr&&Cr.call(r,e,n.get),o&&Lr&&Lr.call(r,e,n.set),r};function Yr(r,e,n){Xr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Mr=1,Zr=0):(Mr=0,Zr=1);var qr={HIGH:Mr,LOW:Zr},zr=new h(1),Br=new p(zr.buffer),Dr=qr.HIGH,Jr=qr.LOW;function Kr(r,e,n,t){return zr[0]=r,e[t]=Br[Dr],e[t+n]=Br[Jr],e}function Qr(r){return Kr(r,[0,0],1,0)}Yr(Qr,"assign",Kr);var re=!0===k?0:1,ee=new h(1),ne=new p(ee.buffer);function te(r,e){return ee[0]=r,ne[re]=e>>>0,ee[0]}function ie(r){return 0|r}var ae=[0,0];function oe(r,e){var n,t;return Qr.assign(r,ae,1,0),n=ae[0],n&=2147483647,t=O(e),X(n|=t&=2147483648,ae[1])}var ue=[1,1.5],fe=[0,.5849624872207642],ce=[0,1.350039202129749e-8];function se(n,t,i,a){return r(n)||nr(n)?(t[a]=n,t[a+i]=0,t):0!==n&&e(n)<22250738585072014e-324?(t[a]=4503599627370496*n,t[a+i]=-52,t):(t[a]=n,t[a+i]=0,t)}Yr((function(r){return se(r,[0,0],1,0)}),"assign",se);var le=[0,0],pe=[0,0];function ge(e,n){var t,i;return 0===n||0===e||r(e)||nr(e)?e:(se(e,le,1,0),n+=le[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-1023|0}(e=le[0]),n<-1074?oe(0,e):n>1023?e<0?q:Y:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,Qr.assign(e,pe,1,0),t=pe[0],t&=2148532223,i*X(t|=n+1023<<20,pe[1])))}var ye=1e300,ve=1e-300,de=[0,0],he=[0,0];function we(n,t){var i,a,o,u,f,c,s,l,p,g,y,v,d,h;if(r(n)||r(t))return NaN;if(Qr.assign(t,de,1,0),f=de[0],0===de[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return tr(n);if(-.5===t)return 1/tr(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(nr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:e(r)<1==(n===Y)?0:Y}(n,t)}if(Qr.assign(n,de,1,0),u=de[0],0===de[1]){if(0===u)return function(r,e){return e===q?Y:e===Y?0:e>0?er(e)?r:0:er(e)?oe(Y,r):Y}(n,t);if(1===n)return 1;if(-1===n&&er(t))return-1;if(nr(n))return n===q?we(-0,-t):t<0?0:Y}if(n<0&&!1===Q(t))return(n-n)/(n-n);if(o=e(n),i=2147483647&u|0,a=2147483647&f|0,s=f>>>31|0,c=(c=u>>>31|0)&&er(t)?-1:1,a>1105199104){if(a>1139802112)return function(r,e){return(2147483647&O(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(n,t);if(i<1072693247)return 1===s?c*ye*ye:c*ve*ve;if(i>1072693248)return 0===s?c*ye*ye:c*ve*ve;y=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=te(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(he,o)}else y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,g,y,v,d,h,w,b,m,A,_,E;return m=0,n<1048576&&(m-=53,n=O(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=1048576),o=te(i=(w=(e=C(e,n))-(c=ue[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=C(0,t+=_<<18),h=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=te(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),v=(g=-7.028461650952758e-9*(l=te(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+ce[_])-((y=te(y=(p=.9617967009544373*l)+g+(s=fe[_])+(d=m),0))-d-s-p),r[0]=y,r[1]=v,r}(he,o,i);if(v=(g=(t-(l=te(t,0)))*y[0]+t*y[1])+(p=l*y[0]),Qr.assign(v,de,1,0),d=ie(de[0]),h=ie(de[1]),d>=1083179008){if(0!=(d-1083179008|h))return c*ye*ye;if(g+8008566259537294e-32>v-p)return c*ye*ye}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|h))return c*ve*ve;if(g<=v-p)return c*ve*ve}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,g;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=C(0,t)),r=ie(r=O(c=1-((c=(o=.6931471824645996*(a=te(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(g=a)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?ge(c,s):C(c,r)}(d,p,g),c*v}var be=Math.ceil;function me(n,t){var i;if(r(n)||r(t))return NaN;if(0===t)return 0;if(0===n)return-1;if(n<0&&t%2==0&&(n=-n),n>0){if((e(t*(n-1))<.5||e(t)<.2)&&(i=function(e){var n,t,i,a,o,u,f,c,s,l,p,g;return 0===e?q:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(c=614244+(t&=1048575)&1048576|0)>>20|0,f=(e=C(e,t|1072693248^c))-1,(1048575&2+t)<3?0===f?0===o?0:o*D+o*J:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*D-(u-o*J-f)):(c=t-398458|0,s=440401-t|0,a=(p=(g=(l=f/(2+f))*l)*g)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=g*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*D-(n-(l*(n+u)+o*J)-f)):0===o?f-l*(f-u):o*D-(l*(f-u)-o*J-f))))}(n)*t,i<.5))return function(e){var n,t,i,a,o,u,f,c,s,l,p,g,y;if(e===Y||r(e))return e;if(e===q)return-1;if(0===e)return e;if(e<0?(i=!0,c=-e):(i=!1,c=e),c>=38.816242111356935){if(i)return-1;if(c>=709.782712893384)return Y}if(u=0|O(c),c>.34657359027997264)c<1.0397207708399179?i?(a=e+z,o=-B,y=-1):(a=e-z,o=B,y=1):(y=i?1.4426950408889634*e-.5:1.4426950408889634*e+.5,a=e-(p=y|=0)*z,o=p*B),l=a-(e=a-o)-o;else{if(u<1016070144)return e;y=0}return f=1+(s=e*(n=.5*e))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(s),g=s*((f-(p=3-f*n))/(6-e*p)),0===y?e-(e*g-s):(t=X(1023+y<<20,0),g=e*(g-l)-l,g-=s,-1===y?.5*(e-g)-.5:1===y?e<-.25?-2*(g-(e+.5)):1+2*(e-g):y<=-2||y>56?(c=1-(g-e),1024===y?c=C(c,a=O(c)+(y<<20)|0):c*=t,c-1):(p=1,y<20?c=(p=C(p,a=1072693248-(2097152>>y)|0))-(g-e):(c=e-(g+(p=C(p,a=1023-y<<20|0))),c+=1),c*=t))}(i)}else if(function(r){return r<0?be(r):K(r)}(t)!==t)return NaN;return we(n,t)-1}export{me as default};
//# sourceMappingURL=mod.js.map