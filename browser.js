// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}function n(r){return Math.abs(r)}var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,o=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol.toStringTag:"",f=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,f,a;if(null==r)return i.call(r);t=r[u],a=u,n=null!=(f=r)&&o.call(f,a);try{r[u]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[u]=t:delete r[u],e}:function(r){return i.call(r)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var y,p=t,v="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(v&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w,d=y,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,256,257]),t=n,r=(A&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var g,h=w,U="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,N="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var I,O={uint16:g,uint8:h};(I=new O.uint16(1))[0]=4660;var S=52===new O.uint8(I.buffer)[0],E=!0===S?1:0,F=new d(1),T=new p(F.buffer);function H(r){return F[0]=r,T[E]}var G=!0===S?1:0,P=new d(1),x=new p(P.buffer);function L(r,n){return P[0]=r,x[G]=n>>>0,P[0]}var M=Number.POSITIVE_INFINITY,V=Number.NEGATIVE_INFINITY,W=1023,k=.6931471803691238,Y=1.9082149292705877e-10,q=1.4426950408889634,C=.6931471803691238,z=1.9082149292705877e-10,B=1048575,D=Math.floor;function J(r){return D(r)===r}function K(r){return J(r/2)}function Q(r){return K(r>0?r-1:r+1)}function R(r){return r===M||r===V}var X,Z,$=Math.sqrt,rr="function"==typeof Object.defineProperty?Object.defineProperty:null,nr=Object.defineProperty,tr=Object.prototype,er=tr.toString,ir=tr.__defineGetter__,or=tr.__defineSetter__,ur=tr.__lookupGetter__,fr=tr.__lookupSetter__,ar=function(){try{return rr({},"x",{}),!0}catch(r){return!1}}()?nr:function(r,n,t){var e,i,o,u;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(ur.call(r,n)||fr.call(r,n)?(e=r.__proto__,r.__proto__=tr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,u="set"in t,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&ir&&ir.call(r,n,t.get),u&&or&&or.call(r,n,t.set),r};function cr(r,n,t){ar(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===S?(X=1,Z=0):(X=0,Z=1);var lr={HIGH:X,LOW:Z},yr=new d(1),pr=new p(yr.buffer),vr=lr.HIGH,sr=lr.LOW;function br(r,n,t,e){return yr[0]=r,n[e]=pr[vr],n[e+t]=pr[sr],n}function wr(r){return br(r,[0,0],1,0)}cr(wr,"assign",br);var dr=!0===S?0:1,Ar=new d(1),_r=new p(Ar.buffer);function mr(r,n){return Ar[0]=r,_r[dr]=n>>>0,Ar[0]}function gr(r){return 0|r}var hr,Ur,jr=2147483647;!0===S?(hr=1,Ur=0):(hr=0,Ur=1);var Nr={HIGH:hr,LOW:Ur},Ir=new d(1),Or=new p(Ir.buffer),Sr=Nr.HIGH,Er=Nr.LOW;function Fr(r,n){return Or[Sr]=r,Or[Er]=n,Ir[0]}var Tr=[0,0];function Hr(r,n){var t,e;return wr.assign(r,Tr,1,0),t=Tr[0],t&=jr,e=H(n),Fr(t|=e&=2147483648,Tr[1])}var Gr=1048576,Pr=[1,1.5],xr=[0,.5849624872207642],Lr=[0,1.350039202129749e-8];function Mr(t,e,i,o){return r(t)||R(t)?(e[o]=t,e[o+i]=0,e):0!==t&&n(t)<22250738585072014e-324?(e[o]=4503599627370496*t,e[o+i]=-52,e):(e[o]=t,e[o+i]=0,e)}cr((function(r){return Mr(r,[0,0],1,0)}),"assign",Mr);var Vr=[0,0],Wr=[0,0];function kr(n,t){var e,i;return 0===t||0===n||r(n)||R(n)?n:(Mr(n,Vr,1,0),t+=Vr[1],t+=function(r){var n=H(r);return(n=(2146435072&n)>>>20)-W|0}(n=Vr[0]),t<-1074?Hr(0,n):t>1023?n<0?V:M:(t<=-1023?(t+=52,i=2220446049250313e-31):i=1,wr.assign(n,Wr,1,0),e=Wr[0],e&=2148532223,i*Fr(e|=t+W<<20,Wr[1])))}var Yr=1048575,qr=1048576,Cr=1083179008,zr=1e300,Br=1e-300,Dr=[0,0],Jr=[0,0];function Kr(t,e){var i,o,u,f,a,c,l,y,p,v,s,b,w,d;if(r(t)||r(e))return NaN;if(wr.assign(e,Dr,1,0),a=Dr[0],0===Dr[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return $(t);if(-.5===e)return 1/$(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(R(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:n(r)<1==(t===M)?0:M}(t,e)}if(wr.assign(t,Dr,1,0),f=Dr[0],0===Dr[1]){if(0===f)return function(r,n){return n===V?M:n===M?0:n>0?Q(n)?r:0:Q(n)?Hr(M,r):M}(t,e);if(1===t)return 1;if(-1===t&&Q(e))return-1;if(R(t))return t===V?Kr(-0,-e):e<0?0:M}if(t<0&&!1===J(e))return(t-t)/(t-t);if(u=n(t),i=f&jr|0,o=a&jr|0,l=a>>>31|0,c=(c=f>>>31|0)&&Q(e)?-1:1,o>1105199104){if(o>1139802112)return function(r,n){return(H(r)&jr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(t,e);if(i<1072693247)return 1===l?c*zr*zr:c*Br*Br;if(i>1072693248)return 0===l?c*zr*zr:c*Br*Br;s=function(r,n){var t,e,i,o,u,f;return t=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mr(e=(o=1.4426950216293335*i)+u,0))-o),r[0]=e,r[1]=t,r}(Jr,u)}else s=function(r,n,t){var e,i,o,u,f,a,c,l,y,p,v,s,b,w,d,A,_,m,g,h,U;return m=0,t<Gr&&(m-=53,t=H(n*=9007199254740992)),m+=(t>>20)-W|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,m+=1,t-=Gr),u=mr(i=(A=(n=L(n,t))-(c=Pr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=L(0,e+=h<<18),d=(o=i*i)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=mr(a=3+(o=u*u)+(d+=(f=_*(A-u*a-u*(n-(a-c))))*(u+i)),0),b=(v=-7.028461650952758e-9*(y=mr(y=(A=u*a)+(_=f*a+(d-(a-3-o))*i),0))+.9617966939259756*(_-(y-A))+Lr[h])-((s=mr(s=(p=.9617967009544373*y)+v+(l=xr[h])+(w=m),0))-w-l-p),r[0]=s,r[1]=b,r}(Jr,u,i);if(b=(v=(e-(y=mr(e,0)))*s[0]+e*s[1])+(p=y*s[0]),wr.assign(b,Dr,1,0),w=gr(Dr[0]),d=gr(Dr[1]),w>=Cr){if(0!=(w-Cr|d))return c*zr*zr;if(v+8008566259537294e-32>b-p)return c*zr*zr}else if((w&jr)>=1083231232){if(0!=(w-3230714880|d))return c*Br*Br;if(v<=b-p)return c*Br*Br}return b=function(r,n,t){var e,i,o,u,f,a,c,l,y,p;return y=((l=r&jr|0)>>20)-W|0,c=0,l>1071644672&&(i=L(0,((c=r+(qr>>y+1)>>>0)&~(Yr>>(y=((c&jr)>>20)-W|0)))>>>0),c=(c&Yr|qr)>>20-y>>>0,r<0&&(c=-c),n-=i),r=gr(r=H(a=1-((a=(o=.6931471824645996*(i=mr(i=t+n,0)))+(u=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=u-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?kr(a,c):L(a,r)}(w,p,v),c*b}var Qr=Math.ceil;return function(t,e){var i;if(r(t)||r(e))return NaN;if(0===e)return 0;if(0===t)return-1;if(t<0&&e%2==0&&(t=-t),t>0){if((n(e*(t-1))<.5||n(e)<.2)&&(i=function(n){var t,e,i,o,u,f,a,c,l,y,p,v;return 0===n?V:r(n)||n<0?NaN:(u=0,(e=H(n))<1048576&&(u-=54,e=H(n*=0x40000000000000)),e>=2146435072?n+n:(u+=(e>>20)-W|0,u+=(c=614244+(e&=B)&1048576|0)>>20|0,a=(n=L(n,e|1072693248^c))-1,(B&2+e)<3?0===a?0===u?0:u*C+u*z:(f=a*a*(.5-.3333333333333333*a),0===u?a-f:u*C-(f-u*z-a)):(c=e-398458|0,l=440401-e|0,o=(p=(v=(y=a/(2+a))*y)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=i+o,(c|=l)>0?(t=.5*a*a,0===u?a-(t-y*(t+f)):u*C-(t-(y*(t+f)+u*z)-a)):0===u?a-y*(a-f):u*C-(y*(a-f)-u*z-a))))}(t)*e,i<.5))return function(n){var t,e,i,o,u,f,a,c,l,y,p,v;if(n===M||r(n))return n;if(n===V)return-1;if(0===n)return n;if(n<0?(e=!0,a=-n):(e=!1,a=n),a>=38.816242111356935){if(e)return-1;if(a>=709.782712893384)return M}if(u=0|H(a),a>.34657359027997264)a<1.0397207708399179?e?(i=n+k,o=-Y,v=-1):(i=n-k,o=Y,v=1):(v=e?q*n-.5:q*n+.5,i=n-(y=v|=0)*k,o=y*Y),l=i-(n=i-o)-o;else{if(u<1016070144)return n;v=0}return f=1+(c=n*(t=.5*n))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((f-(y=3-f*t))/(6-n*y)),0===v?n-(n*p-c):(p=n*(p-l)-l,p-=c,-1===v?.5*(n-p)-.5:1===v?n<-.25?-2*(p-(n+.5)):1+2*(n-p):v<=-2||v>56?(a=L(a=1-(p-n),i=H(a)+(v<<20)|0))-1:(y=1,v<20?a=(y=L(y,i=1072693248-(2097152>>v)|0))-(p-n):(a=n-(p+(y=L(y,i=W-v<<20|0))),a+=1),L(a,i=H(a)+(v<<20)|0)))}(i)}else if(function(r){return r<0?Qr(r):D(r)}(e)!==e)return NaN;return Kr(t,e)-1}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).powm1=n();
//# sourceMappingURL=browser.js.map
