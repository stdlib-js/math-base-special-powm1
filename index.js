// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}function e(r){return Math.abs(r)}var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,f;if(null==r)return i.call(r);n=r[u],f=u,e=null!=(o=r)&&a.call(o,f);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},c="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,y=n,g="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),n=e,r=(g&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?h:function(){throw new Error("not implemented")};var v,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;v=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===f(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,E=v,U="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,S="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,e,n;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),n=e,r=(U&&n instanceof Uint16Array||"[object Uint16Array]"===f(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,N={uint16:_,uint8:E};(x=new N.uint16(1))[0]=4660;var k=52===new N.uint8(x.buffer)[0],F=!0===k?1:0,j=new w(1),T=new y(j.buffer);function O(r){return j[0]=r,T[F]}var V,$,G=!0===k?1:0,H=new w(1),W=new y(H.buffer);function C(r,e){return H[0]=r,W[G]=e>>>0,H[0]}!0===k?(V=1,$=0):(V=0,$=1);var L={HIGH:V,LOW:$},P=new w(1),R=new y(P.buffer),M=L.HIGH,Z=L.LOW;function X(r,e){return R[M]=r,R[Z]=e,P[0]}var Y=Number.POSITIVE_INFINITY,q=Number.NEGATIVE_INFINITY,z=1023,B=.6931471803691238,D=1.9082149292705877e-10,J=1.4426950408889634,K=.6931471803691238,Q=1.9082149292705877e-10,rr=1048575,er=Math.floor;function nr(r){return er(r)===r}function tr(r){return nr(r/2)}function ir(r){return tr(r>0?r-1:r+1)}function ar(r){return r===Y||r===q}var or=Math.sqrt,ur="function"==typeof Object.defineProperty?Object.defineProperty:null,fr=Object.defineProperty;function cr(r){return"number"==typeof r}function sr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function lr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+sr(i):sr(i)+r,t&&(r="-"+r)),r}var pr=String.prototype.toLowerCase,yr=String.prototype.toUpperCase;function gr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!cr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=lr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=lr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===yr.call(r.specifier)?yr.call(n):pr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function dr(r){return"string"==typeof r}var hr=Math.abs,vr=String.prototype.toLowerCase,wr=String.prototype.toUpperCase,br=String.prototype.replace,mr=/e\+(\d)$/,Ar=/e-(\d)$/,_r=/^(\d+)$/,Er=/^(\d+)e/,Ur=/\.0$/,Ir=/\.0*e/,Sr=/(\..*[^0])0*e/;function xr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!cr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":hr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=br.call(n,Sr,"$1e"),n=br.call(n,Ir,"e"),n=br.call(n,Ur,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=br.call(n,mr,"e+0$1"),n=br.call(n,Ar,"e-0$1"),r.alternate&&(n=br.call(n,_r,"$1."),n=br.call(n,Er,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===wr.call(r.specifier)?wr.call(n):vr.call(n)}function Nr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function kr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+Nr(t):Nr(t)+r}var Fr=String.fromCharCode,jr=isNaN,Tr=Array.isArray;function Or(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Vr(r){var e,n,t,i,a,o,u,f,c;if(!Tr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(dr(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Or(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,jr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,jr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=gr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!jr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=jr(a)?String(t.arg):Fr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=xr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=lr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=kr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var $r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Gr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Hr(r){var e,n,t,i;for(n=[],i=0,t=$r.exec(r);t;)(e=r.slice(i,$r.lastIndex-t[0].length)).length&&n.push(e),n.push(Gr(t)),i=$r.lastIndex,t=$r.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Wr(r){return"string"==typeof r}function Cr(r){var e,n,t;if(!Wr(r))throw new TypeError(Cr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Hr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Vr.apply(null,n)}var Lr,Pr,Rr=Object.prototype,Mr=Rr.toString,Zr=Rr.__defineGetter__,Xr=Rr.__defineSetter__,Yr=Rr.__lookupGetter__,qr=Rr.__lookupSetter__,zr=function(){try{return ur({},"x",{}),!0}catch(r){return!1}}()?fr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Mr.call(r))throw new TypeError(Cr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Mr.call(n))throw new TypeError(Cr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Yr.call(r,e)||qr.call(r,e)?(t=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Zr&&Zr.call(r,e,n.get),o&&Xr&&Xr.call(r,e,n.set),r};function Br(r,e,n){zr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===k?(Lr=1,Pr=0):(Lr=0,Pr=1);var Dr={HIGH:Lr,LOW:Pr},Jr=new w(1),Kr=new y(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}Br(ne,"assign",ee);var te=!0===k?0:1,ie=new w(1),ae=new y(ie.buffer);function oe(r,e){return ie[0]=r,ae[te]=e>>>0,ie[0]}function ue(r){return 0|r}var fe=2147483647,ce=[0,0];function se(r,e){var n,t;return ne.assign(r,ce,1,0),n=ce[0],n&=fe,t=O(e),X(n|=t&=2147483648,ce[1])}var le=1048576,pe=[1,1.5],ye=[0,.5849624872207642],ge=[0,1.350039202129749e-8];function de(n,t,i,a){return r(n)||ar(n)?(t[a]=n,t[a+i]=0,t):0!==n&&e(n)<22250738585072014e-324?(t[a]=4503599627370496*n,t[a+i]=-52,t):(t[a]=n,t[a+i]=0,t)}Br((function(r){return de(r,[0,0],1,0)}),"assign",de);var he=[0,0],ve=[0,0];function we(e,n){var t,i;return 0===n||0===e||r(e)||ar(e)?e:(de(e,he,1,0),n+=he[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-z|0}(e=he[0]),n<-1074?se(0,e):n>1023?e<0?q:Y:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,ne.assign(e,ve,1,0),t=ve[0],t&=2148532223,i*X(t|=n+z<<20,ve[1])))}var be=1048575,me=1048576,Ae=1083179008,_e=1e300,Ee=1e-300,Ue=[0,0],Ie=[0,0];function Se(n,t){var i,a,o,u,f,c,s,l,p,y,g,d,h,v;if(r(n)||r(t))return NaN;if(ne.assign(t,Ue,1,0),f=Ue[0],0===Ue[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return or(n);if(-.5===t)return 1/or(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(ar(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:e(r)<1==(n===Y)?0:Y}(n,t)}if(ne.assign(n,Ue,1,0),u=Ue[0],0===Ue[1]){if(0===u)return function(r,e){return e===q?Y:e===Y?0:e>0?ir(e)?r:0:ir(e)?se(Y,r):Y}(n,t);if(1===n)return 1;if(-1===n&&ir(t))return-1;if(ar(n))return n===q?Se(-0,-t):t<0?0:Y}if(n<0&&!1===nr(t))return(n-n)/(n-n);if(o=e(n),i=u&fe|0,a=f&fe|0,s=f>>>31|0,c=(c=u>>>31|0)&&ir(t)?-1:1,a>1105199104){if(a>1139802112)return function(r,e){return(O(r)&fe)<=1072693247?e<0?1/0:0:e>0?1/0:0}(n,t);if(i<1072693247)return 1===s?c*_e*_e:c*Ee*Ee;if(i>1072693248)return 0===s?c*_e*_e:c*Ee*Ee;g=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=oe(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ie,o)}else g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h,v,w,b,m,A,_,E;return m=0,n<le&&(m-=53,n=O(e*=9007199254740992)),m+=(n>>20)-z|0,n=1072693248|(A=1048575&n|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=le),o=oe(i=(w=(e=C(e,n))-(c=pe[_]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=C(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=oe(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=oe(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+ge[_])-((g=oe(g=(p=.9617967009544373*l)+y+(s=ye[_])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ie,o,i);if(d=(y=(t-(l=oe(t,0)))*g[0]+t*g[1])+(p=l*g[0]),ne.assign(d,Ue,1,0),h=ue(Ue[0]),v=ue(Ue[1]),h>=Ae){if(0!=(h-Ae|v))return c*_e*_e;if(y+8008566259537294e-32>d-p)return c*_e*_e}else if((h&fe)>=1083231232){if(0!=(h-3230714880|v))return c*Ee*Ee;if(y<=d-p)return c*Ee*Ee}return d=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&fe|0)>>20)-z|0,c=0,s>1071644672&&(i=C(0,((c=r+(me>>l+1)>>>0)&~(be>>(l=((c&fe)>>20)-z|0)))>>>0),c=(c&be|me)>>20-l>>>0,r<0&&(c=-c),e-=i),r=ue(r=O(f=1-((f=(a=.6931471824645996*(i=oe(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?we(f,c):C(f,r)}(h,p,y),c*d}var xe=Math.ceil;return function(n,t){var i;if(r(n)||r(t))return NaN;if(0===t)return 0;if(0===n)return-1;if(n<0&&t%2==0&&(n=-n),n>0){if((e(t*(n-1))<.5||e(t)<.2)&&(i=function(e){var n,t,i,a,o,u,f,c,s,l,p,y;return 0===e?q:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-z|0,o+=(c=614244+(t&=rr)&1048576|0)>>20|0,f=(e=C(e,t|1072693248^c))-1,(rr&2+t)<3?0===f?0===o?0:o*K+o*Q:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*K-(u-o*Q-f)):(c=t-398458|0,s=440401-t|0,a=(p=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*K-(n-(l*(n+u)+o*Q)-f)):0===o?f-l*(f-u):o*K-(l*(f-u)-o*Q-f))))}(n)*t,i<.5))return function(e){var n,t,i,a,o,u,f,c,s,l,p,y,g;if(e===Y||r(e))return e;if(e===q)return-1;if(0===e)return e;if(e<0?(i=!0,c=-e):(i=!1,c=e),c>=38.816242111356935){if(i)return-1;if(c>=709.782712893384)return Y}if(u=0|O(c),c>.34657359027997264)c<1.0397207708399179?i?(a=e+B,o=-D,g=-1):(a=e-B,o=D,g=1):(g=i?J*e-.5:J*e+.5,a=e-(p=g|=0)*B,o=p*D),l=a-(e=a-o)-o;else{if(u<1016070144)return e;g=0}return f=1+(s=e*(n=.5*e))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(s),y=s*((f-(p=3-f*n))/(6-e*p)),0===g?e-(e*y-s):(t=X(z+g<<20,0),y=e*(y-l)-l,y-=s,-1===g?.5*(e-y)-.5:1===g?e<-.25?-2*(y-(e+.5)):1+2*(e-y):g<=-2||g>56?(c=1-(y-e),1024===g?c=C(c,a=O(c)+(g<<20)|0):c*=t,c-1):(p=1,g<20?c=(p=C(p,a=1072693248-(2097152>>g)|0))-(y-e):(c=e-(y+(p=C(p,a=z-g<<20|0))),c+=1),c*=t))}(i)}else if(function(r){return r<0?xe(r):er(r)}(t)!==t)return NaN;return Se(n,t)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).powm1=e();
//# sourceMappingURL=index.js.map