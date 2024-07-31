// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}function i(r){return Math.abs(r)}var a,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,c="function"==typeof Symbol?Symbol:void 0,s="function"==typeof c?c.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return u.call(r);n=r[s],a=s,e=null!=(i=r)&&f.call(i,a);try{r[s]=void 0}catch(e){return u.call(r)}return t=u.call(r),e?r[s]=n:delete r[s],t}:function(r){return u.call(r)},p="function"==typeof Uint32Array,g="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(p&&n instanceof Uint32Array||"[object Uint32Array]"===l(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var d,h=a,v="function"==typeof Float64Array,w="function"==typeof Float64Array?Float64Array:null,b="function"==typeof Float64Array?Float64Array:void 0;d=function(){var r,e,n;if("function"!=typeof w)return!1;try{e=new w([1,3.14,-3.14,NaN]),n=e,r=(v&&n instanceof Float64Array||"[object Float64Array]"===l(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?b:function(){throw new Error("not implemented")};var m,A=d,_="function"==typeof Uint8Array,E="function"==typeof Uint8Array?Uint8Array:null,U="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,256,257]),n=e,r=(_&&n instanceof Uint8Array||"[object Uint8Array]"===l(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var S,I=m,x="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,n;if("function"!=typeof N)return!1;try{e=new N(e=[1,3.14,-3.14,65536,65537]),n=e,r=(x&&n instanceof Uint16Array||"[object Uint16Array]"===l(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var F,j={uint16:S,uint8:I};(F=new j.uint16(1))[0]=4660;var T=52===new j.uint8(F.buffer)[0],O=!0===T?1:0,V=new A(1),$=new h(V.buffer);function G(r){return V[0]=r,$[O]}var H,W,C=!0===T?1:0,L=new A(1),P=new h(L.buffer);function R(r,e){return L[0]=r,P[C]=e>>>0,L[0]}!0===T?(H=1,W=0):(H=0,W=1);var M={HIGH:H,LOW:W},Z=new A(1),X=new h(Z.buffer),Y=M.HIGH,q=M.LOW;function z(r,e){return X[Y]=r,X[q]=e,Z[0]}var B=1023,D=.34657359027997264,J=709.782712893384,K=.6931471803691238,Q=1.9082149292705877e-10,rr=1.4426950408889634,er=38.816242111356935,nr=1.0397207708399179,tr=.6931471803691238,ir=1.9082149292705877e-10,ar=0x40000000000000,or=.3333333333333333,ur=1048575,fr=2146435072,cr=1048576,sr=1072693248,lr=Math.floor;function pr(r){return lr(r)===r}function gr(r){return pr(r/2)}function yr(r){return gr(r>0?r-1:r+1)}var dr=Math.sqrt,hr="function"==typeof Object.defineProperty?Object.defineProperty:null,vr=Object.defineProperty;function wr(r){return"number"==typeof r}function br(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function mr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+br(i):br(i)+r,t&&(r="-"+r)),r}var Ar=String.prototype.toLowerCase,_r=String.prototype.toUpperCase;function Er(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!wr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=mr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=mr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===_r.call(r.specifier)?_r.call(n):Ar.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var Ur=Math.abs,Sr=String.prototype.toLowerCase,Ir=String.prototype.toUpperCase,xr=String.prototype.replace,Nr=/e\+(\d)$/,kr=/e-(\d)$/,Fr=/^(\d+)$/,jr=/^(\d+)e/,Tr=/\.0$/,Or=/\.0*e/,Vr=/(\..*[^0])0*e/;function $r(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!wr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":Ur(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=xr.call(n,Vr,"$1e"),n=xr.call(n,Or,"e"),n=xr.call(n,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=xr.call(n,Nr,"e+0$1"),n=xr.call(n,kr,"e-0$1"),r.alternate&&(n=xr.call(n,Fr,"$1."),n=xr.call(n,jr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ir.call(r.specifier)?Ir.call(n):Sr.call(n)}function Gr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Hr=String.fromCharCode,Wr=Array.isArray;function Cr(r){return r!=r}function Lr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Pr(r){var e,n,t,i,a,o,u,f,c,s,l,p,g;if(!Wr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Lr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Cr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Cr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=Er(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Cr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Cr(a)?String(t.arg):Hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=$r(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=mr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,g=void 0,(g=l-s.length)<0?s:s=p?s+Gr(g):Gr(g)+s)),o+=t.arg||"",u+=1}return o}var Rr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Mr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Zr(r){var e,n,t,i;for(n=[],i=0,t=Rr.exec(r);t;)(e=r.slice(i,Rr.lastIndex-t[0].length)).length&&n.push(e),n.push(Mr(t)),i=Rr.lastIndex,t=Rr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Xr(r){var e,n;if("string"!=typeof r)throw new TypeError(Xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Zr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Pr.apply(null,e)}var Yr,qr,zr=Object.prototype,Br=zr.toString,Dr=zr.__defineGetter__,Jr=zr.__defineSetter__,Kr=zr.__lookupGetter__,Qr=zr.__lookupSetter__,re=function(){try{return hr({},"x",{}),!0}catch(r){return!1}}()?vr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Br.call(r))throw new TypeError(Xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Br.call(n))throw new TypeError(Xr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Kr.call(r,e)||Qr.call(r,e)?(t=r.__proto__,r.__proto__=zr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Dr&&Dr.call(r,e,n.get),o&&Jr&&Jr.call(r,e,n.set),r};function ee(r,e,n){re(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===T?(Yr=1,qr=0):(Yr=0,qr=1);var ne={HIGH:Yr,LOW:qr},te=new A(1),ie=new h(te.buffer),ae=ne.HIGH,oe=ne.LOW;function ue(r,e,n,t){return te[0]=r,e[t]=ie[ae],e[t+n]=ie[oe],e}function fe(r){return ue(r,[0,0],1,0)}ee(fe,"assign",ue);var ce=!0===T?0:1,se=new A(1),le=new h(se.buffer);function pe(r,e){return se[0]=r,le[ce]=e>>>0,se[0]}function ge(r){return 0|r}var ye=2147483647,de=2147483648,he=[0,0];function ve(r,e){var n,t;return fe.assign(r,he,1,0),n=he[0],n&=ye,t=G(e),z(n|=t&=de,he[1])}var we=1072693247,be=1e300,me=1e-300,Ae=1048575,_e=1048576,Ee=1072693248,Ue=536870912,Se=524288,Ie=20,xe=9007199254740992,Ne=.9617966939259756,ke=.9617967009544373,Fe=-7.028461650952758e-9,je=[1,1.5],Te=[0,.5849624872207642],Oe=[0,1.350039202129749e-8],Ve=1.4426950408889634,$e=1.4426950216293335,Ge=1.9259629911266175e-8,He=1023,We=-1023,Ce=-1074,Le=22250738585072014e-324,Pe=4503599627370496;function Re(e,n,a,o){return r(e)||t(e)?(n[o]=e,n[o+a]=0,n):0!==e&&i(e)<Le?(n[o]=e*Pe,n[o+a]=-52,n):(n[o]=e,n[o+a]=0,n)}ee((function(r){return Re(r,[0,0],1,0)}),"assign",Re);var Me=2146435072,Ze=2220446049250313e-31,Xe=2148532223,Ye=[0,0],qe=[0,0];function ze(i,a){var o,u;return 0===a||0===i||r(i)||t(i)?i:(Re(i,Ye,1,0),i=Ye[0],a+=Ye[1],a+=function(r){var e=G(r);return(e=(e&Me)>>>20)-B|0}(i),a<Ce?ve(0,i):a>He?i<0?n:e:(a<=We?(a+=52,u=Ze):u=1,fe.assign(i,qe,1,0),o=qe[0],o&=Xe,u*z(o|=a+B<<20,qe[1])))}var Be=.6931471805599453,De=1048575,Je=1048576,Ke=1071644672,Qe=20,rn=.6931471824645996,en=-1.904654299957768e-9,nn=1072693247,tn=1105199104,an=1139802112,on=1083179008,un=1072693248,fn=1083231232,cn=3230714880,sn=31,ln=1e300,pn=1e-300,gn=8008566259537294e-32,yn=[0,0],dn=[0,0];function hn(a,o){var u,f,c,s,l,p,g,y,d,h,v,w,b,m;if(r(a)||r(o))return NaN;if(fe.assign(o,yn,1,0),l=yn[0],0===yn[1]){if(0===o)return 1;if(1===o)return a;if(-1===o)return 1/a;if(.5===o)return dr(a);if(-.5===o)return 1/dr(a);if(2===o)return a*a;if(3===o)return a*a*a;if(4===o)return(a*=a)*a;if(t(o))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:i(r)<1==(n===e)?0:e}(a,o)}if(fe.assign(a,yn,1,0),s=yn[0],0===yn[1]){if(0===s)return function(r,t){return t===n?e:t===e?0:t>0?yr(t)?r:0:yr(t)?ve(e,r):e}(a,o);if(1===a)return 1;if(-1===a&&yr(o))return-1;if(t(a))return a===n?hn(-0,-o):o<0?0:e}if(a<0&&!1===pr(o))return(a-a)/(a-a);if(c=i(a),u=s&ye|0,f=l&ye|0,g=l>>>sn|0,p=(p=s>>>sn|0)&&yr(o)?-1:1,f>tn){if(f>an)return function(r,e){return(G(r)&ye)<=we?e<0?be*be:me*me:e>0?be*be:me*me}(a,o);if(u<nn)return 1===g?p*ln*ln:p*pn*pn;if(u>un)return 0===g?p*ln*ln:p*pn*pn;v=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Ge-a*Ve)-((t=pe(t=(o=$e*i)+u,0))-o),r[0]=t,r[1]=n,r}(dn,c)}else v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,g,y,d,h,v,w,b,m,A,_,E;return m=0,n<_e&&(m-=53,n=G(e*=xe)),m+=(n>>Ie)-B|0,n=(A=n&Ae|0)|Ee|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=_e),o=pe(i=(w=(e=R(e,n))-(c=je[_]))*(b=1/(e+c)),0),t=(n>>1|Ue)+Se,f=R(0,t+=_<<18),v=(a=i*i)*a*(0===(E=a)?.5999999999999946:.5999999999999946+E*(.4285714285785502+E*(.33333332981837743+E*(.272728123808534+E*(.23066074577556175+.20697501780033842*E))))),f=pe(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=pe(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0),p=ke*l,d=(g=Fe*l+(b-(l-w))*Ne+Oe[_])-((y=pe(y=p+g+(s=Te[_])+(h=m),0))-h-s-p),r[0]=y,r[1]=d,r}(dn,c,u);if(w=(h=(o-(y=pe(o,0)))*v[0]+o*v[1])+(d=y*v[0]),fe.assign(w,yn,1,0),b=ge(yn[0]),m=ge(yn[1]),b>=on){if(0!=(b-on|m))return p*ln*ln;if(h+gn>w-d)return p*ln*ln}else if((b&ye)>=fn){if(0!=(b-cn|m))return p*pn*pn;if(h<=w-d)return p*pn*pn}return w=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ye|0)>>Qe)-B|0,c=0,s>Ke&&(i=R(0,((c=r+(Je>>l+1)>>>0)&~(De>>(l=((c&ye)>>Qe)-B|0)))>>>0),c=(c&De|Je)>>Qe-l>>>0,r<0&&(c=-c),e-=i),r=ge(r=G(f=1-((f=(a=(i=pe(i=n+e,0))*rn)+(o=(n-(i-e))*Be+i*en))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Qe>>>0)>>Qe<=0?ze(f,c):R(f,r)}(b,d,h),p*w}var vn=Math.ceil;return function(a,o){var u,f;if(r(a)||r(o))return NaN;if(0===o)return 0;if(0===a)return-1;if(a<0&&o%2==0&&(a=-a),a>0){if((i(o*(a-1))<.5||i(o)<.2)&&(f=function(e){var t,i,a,o,u,f,c,s,l,p,g,y;return 0===e?n:r(e)||e<0?NaN:(u=0,(i=G(e))<cr&&(u-=54,i=G(e*=ar)),i>=fr?e+e:(u+=(i>>20)-B|0,u+=(s=614244+(i&=ur)&1048576|0)>>20|0,c=(e=R(e,i|s^sr))-1,(ur&2+i)<3?0===c?0===u?0:u*tr+u*ir:(f=c*c*(.5-or*c),0===u?c-f:u*tr-(f-u*ir-c)):(s=i-398458|0,l=440401-i|0,o=(g=(y=(p=c/(2+c))*p)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(g),a=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(g),f=a+o,(s|=l)>0?(t=.5*c*c,0===u?c-(t-p*(t+f)):u*tr-(t-(p*(t+f)+u*ir)-c)):0===u?c-p*(c-f):u*tr-(p*(c-f)-u*ir-c))))}(a)*o)<.5)return function(t){var i,a,o,u,f,c,s,l,p,g,y,d,h;if(t===e||r(t))return t;if(t===n)return-1;if(0===t)return t;if(t<0?(o=!0,l=-t):(o=!1,l=t),l>=er){if(o)return-1;if(l>=J)return e}if(c=0|G(l),l>D)l<nr?o?(u=t+K,f=-Q,h=-1):(u=t-K,f=Q,h=1):(h=o?rr*t-.5:rr*t+.5,u=t-(y=h|=0)*K,f=y*Q),g=u-(t=u-f)-f;else{if(c<1016070144)return t;h=0}return s=1+(p=t*(i=.5*t))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(p),d=p*((s-(y=3-s*i))/(6-t*y)),0===h?t-(t*d-p):(a=z(B+h<<20,0),d=t*(d-g)-g,d-=p,-1===h?.5*(t-d)-.5:1===h?t<-.25?-2*(d-(t+.5)):1+2*(t-d):h<=-2||h>56?(l=1-(d-t),1024===h?l=R(l,u=G(l)+(h<<20)|0):l*=a,l-1):(y=1,h<20?l=(y=R(y,u=1072693248-(2097152>>h)|0))-(d-t):(l=t-(d+(y=R(y,u=B-h<<20|0))),l+=1),l*=a))}(f)}else if(function(r){return r<0?vn(r):lr(r)}(o)!==o)return NaN;return t(u=hn(a,o)-1)||r(u)?NaN:u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).powm1=e();
//# sourceMappingURL=index.js.map