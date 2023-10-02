// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,y,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,v,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function I(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=I(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=x.exec(r);t;)(e=r.slice(i,x.lastIndex-t[0].length)).length&&n.push(e),n.push(k(t)),i=x.lastIndex,t=x.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return S.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Number.POSITIVE_INFINITY;function M(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var Z,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),Y=Object.prototype.toString,q=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Y.call(r);n=r[B],a=B,e=null!=(i=r)&&q.call(i,a);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},J="function"==typeof Uint32Array,K="function"==typeof Uint32Array?Uint32Array:null,Q="function"==typeof Uint32Array?Uint32Array:void 0;Z=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=Z,nr="function"==typeof Float64Array,tr="function"==typeof Float64Array?Float64Array:null,ir="function"==typeof Float64Array?Float64Array:void 0;rr=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),n=e,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,ur="function"==typeof Uint8Array,fr="function"==typeof Uint8Array?Uint8Array:null,cr="function"==typeof Uint8Array?Uint8Array:void 0;ar=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),n=e,r=(ur&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr,lr=ar,pr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,gr="function"==typeof Uint16Array?Uint16Array:void 0;sr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(pr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var dr,vr={uint16:sr,uint8:lr};(dr=new vr.uint16(1))[0]=4660;var hr=52===new vr.uint8(dr.buffer)[0],wr=!0===hr?1:0,br=new or(1),mr=new er(br.buffer);function Ar(r){return br[0]=r,mr[wr]}var Nr,_r,Er=!0===hr?1:0,Ur=new or(1),Ir=new er(Ur.buffer);function Sr(r,e){return Ur[0]=r,Ir[Er]=e>>>0,Ur[0]}!0===hr?(Nr=1,_r=0):(Nr=0,_r=1);var xr={HIGH:Nr,LOW:_r},kr=new or(1),Fr=new er(kr.buffer),jr=xr.HIGH,Tr=xr.LOW;function Or(r,e){return Fr[jr]=r,Fr[Tr]=e,kr[0]}var Vr=Number.NEGATIVE_INFINITY,$r=1023,Gr=.6931471803691238,Hr=1.9082149292705877e-10,Wr=1.4426950408889634;function Cr(r){var e,n,t,i,a,o,u,f,c,s,l,p,y;if(r===R||P(r))return r;if(r===Vr)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return R}if(o=0|Ar(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+Gr,a=-Hr,y=-1):(i=r-Gr,a=Hr,y=1):(y=t?Wr*r-.5:Wr*r+.5,i=r-(l=y|=0)*Gr,a=l*Hr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;y=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===y?r-(r*p-c):(n=Or($r+y<<20,0),p=r*(p-s)-s,p-=c,-1===y?.5*(r-p)-.5:1===y?r<-.25?-2*(p-(r+.5)):1+2*(r-p):y<=-2||y>56?(f=1-(p-r),1024===y?f=Sr(f,i=Ar(f)+(y<<20)|0):f*=n,f-1):(l=1,y<20?f=(l=Sr(l,i=1072693248-(2097152>>y)|0))-(p-r):(f=r-(p+(l=Sr(l,i=$r-y<<20|0))),f+=1),f*=n))}var Lr=.6931471803691238,Pr=1.9082149292705877e-10;function Rr(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return Vr;if(r===R)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=Ar(c=1+r))>>20)-$r)>0?1-(c-r):r-(c-1),a/=c):(s=((n=Ar(c=r))>>20)-$r,a=0),(n&=1048575)<434334?c=Sr(c,1072693248|n):(s+=1,c=Sr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Lr+(a+=s*Pr):s*Lr-((f=e*(1-.6666666666666666*i))-(s*Pr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Lr-(e-(o*(e+f)+(s*Pr+a))-i))}var Mr=Math.sqrt;function Zr(r){return Math.abs(r)}var Xr=Math.floor,Yr=Math.ceil;function qr(r){return r<0?Yr(r):Xr(r)}function zr(r){return r===R||r===Vr}var Br,Dr,Jr=2147483647;!0===hr?(Br=1,Dr=0):(Br=0,Dr=1);var Kr={HIGH:Br,LOW:Dr},Qr=new or(1),re=new er(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e,n,t){return Qr[0]=r,e[t]=re[ee],e[t+n]=re[ne],e}function ie(r){return te(r,[0,0],1,0)}L(ie,"assign",te);var ae=[0,0];function oe(r,e){var n,t;return ie.assign(r,ae,1,0),n=ae[0],n&=Jr,t=Ar(e),Or(n|=t&=2147483648,ae[1])}function ue(r,e,n,t){return P(r)||zr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Zr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var fe=[0,0],ce=[0,0];function se(r,e){var n,t;return 0===e||0===r||P(r)||zr(r)?r:(ue(r,fe,1,0),e+=fe[1],e+=function(r){var e=Ar(r);return(e=(2146435072&e)>>>20)-$r|0}(r=fe[0]),e<-1074?oe(0,r):e>1023?r<0?Vr:R:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ie.assign(r,ce,1,0),n=ce[0],n&=2148532223,t*Or(n|=e+$r<<20,ce[1])))}var le=1.4426950408889634,pe=1/(1<<28);function ye(r){var e;return P(r)||r===R?r:r===Vr?0:r>709.782712893384?R:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<pe?1+r:function(r,e,n){var t,i,a,o;return se(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=qr(r<0?le*r-.5:le*r+.5)),1.9082149292705877e-10*e,e)}function ge(r){return Xr(r)===r}function de(r){return ge(r/2)}function ve(r){return de(r>0?r-1:r+1)}var he=!0===hr?0:1,we=new or(1),be=new er(we.buffer);function me(r,e){return we[0]=r,be[he]=e>>>0,we[0]}function Ae(r){return 0|r}var Ne=1048576,_e=[1,1.5],Ee=[0,.5849624872207642],Ue=[0,1.350039202129749e-8],Ie=1048575,Se=1048576,xe=1083179008,ke=1e300,Fe=1e-300,je=[0,0],Te=[0,0];function Oe(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(P(r)||P(e))return NaN;if(ie.assign(e,je,1,0),o=je[0],0===je[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Mr(r);if(-.5===e)return 1/Mr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(zr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Zr(r)<1==(e===R)?0:R}(r,e)}if(ie.assign(r,je,1,0),a=je[0],0===je[1]){if(0===a)return function(r,e){return e===Vr?R:e===R?0:e>0?ve(e)?r:0:ve(e)?oe(R,r):R}(r,e);if(1===r)return 1;if(-1===r&&ve(e))return-1;if(zr(r))return r===Vr?Oe(-0,-e):e<0?0:R}if(r<0&&!1===ge(e))return(r-r)/(r-r);if(i=Zr(r),n=a&Jr|0,t=o&Jr|0,f=o>>>31|0,u=(u=a>>>31|0)&&ve(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(Ar(r)&Jr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*ke*ke:u*Fe*Fe;if(n>1072693248)return 0===f?u*ke*ke:u*Fe*Fe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=me(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Te,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,N,_;return m=0,n<Ne&&(m-=53,n=Ar(e*=9007199254740992)),m+=(n>>20)-$r|0,n=1072693248|(A=1048575&n|0),A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=Ne),o=me(i=(w=(e=Sr(e,n))-(c=_e[N]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Sr(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=me(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=me(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Ue[N])-((g=me(g=(p=.9617967009544373*l)+y+(s=Ee[N])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(Te,i,n);if(y=(l=(e-(c=me(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ie.assign(y,je,1,0),g=Ae(je[0]),d=Ae(je[1]),g>=xe){if(0!=(g-xe|d))return u*ke*ke;if(l+8008566259537294e-32>y-s)return u*ke*ke}else if((g&Jr)>=1083231232){if(0!=(g-3230714880|d))return u*Fe*Fe;if(l<=y-s)return u*Fe*Fe}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Jr|0)>>20)-$r|0,c=0,s>1071644672&&(i=Sr(0,((c=r+(Se>>l+1)>>>0)&~(Ie>>(l=((c&Jr)>>20)-$r|0)))>>>0),c=(c&Ie|Se)>>20-l>>>0,r<0&&(c=-c),e-=i),r=Ae(r=Ar(f=1-((f=(a=.6931471824645996*(i=me(i=n+e,0)))+(o=.6931471805599453*(n-(i-e))+-1.904654299957768e-9*i))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?se(f,c):Sr(f,r)}(g,s,l),u*y}function Ve(r,e){return P(r)||P(e)?NaN:r===R||e===R?R:r===e&&0===r?function(r){return 0===r&&1/r===R}(r)?r:e:r>e?r:e}function $e(r,e){return P(r)||P(e)?NaN:r===Vr||e===Vr?Vr:r===e&&0===r?function(r){return 0===r&&1/r===Vr}(r)?r:e:r<e?r:e}var Ge=.6931471803691238,He=1.9082149292705877e-10,We=1048575;function Ce(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Vr:P(r)||r<0?NaN:(a=0,(n=Ar(r))<1048576&&(a-=54,n=Ar(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-$r|0,a+=(f=614244+(n&=We)&1048576|0)>>20|0,u=(r=Sr(r,n|1072693248^f))-1,(We&2+n)<3?0===u?0===a?0:a*Ge+a*He:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ge-(o-a*He-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ge-(e-(s*(e+o)+a*He)-u)):0===a?u-s*(u-o):a*Ge-(s*(u-o)-a*He-u))))}var Le=709.782712893384,Pe=-708.3964185322641,Re=10.900511;function Me(r,e,n){var t;return t=function(r,e,n,t,i){var a,o,u,f,c,s,l,p,y,g,d,v,h,w;if(!i)return Oe(n,r)*Oe(t,e);if(f=r+Re-.5,c=e+Re-.5,s=(h=r+e)+Re-.5,a=M(h),a/=M(r)*M(e),a*=Mr(c/2.718281828459045),a*=Mr(f/s),p=(t*r-n*c)/c,$e(Zr(l=(n*e-t*f)/f),Zr(p))<.2)if(l*p>0||$e(r,e)<1)Zr(l)<.1?a*=ye(r*Rr(l)):a*=Oe(n*s/f,r),Zr(p)<.1?a*=ye(e*Rr(p)):a*=Oe(t*s/c,e);else if(Ve(Zr(l),Zr(p))<.5)u=e/r,(o=r<e)&&u*p<.1||!o&&l/u>.1?(y=Cr(u*Rr(p)),a*=ye(y=r*Rr(y=l+y+y*l))):(y=Cr(Rr(l)/u),a*=ye(y=e*Rr(y=p+y+y*p)));else if(Zr(l)<Zr(p))if((w=r*Rr(l)+e*Ce(t*s/c))<=Pe||w>=Le){if((w+=Ce(a))>=Le)return NaN;a=ye(w)}else a*=ye(w);else if((w=e*Rr(p)+r*Ce(n*s/f))<=Pe||w>=Le){if((w+=Ce(a))>=Le)return NaN;a=ye(w)}else a*=ye(w);else if(v=t*s/c,l=r*Ce(d=n*s/f),p=e*Ce(v),l>=Le||l<=Pe||p>=Le||p<=Pe)if(r<e)if(g=Oe(v,e/r),(y=r*(Ce(d)+Ce(g)))<Le&&y>Pe)a*=Oe(g*d,r);else{if((p+=l+Ce(a))>=Le)return NaN;a=ye(p)}else if((y=(Ce(g=Oe(d,r/e))+Ce(v))*e)<Le&&y>Pe)a*=Oe(g*v,e);else{if((p+=l+Ce(a))>=Le)return NaN;a=ye(p)}else a*=Oe(d,r)*Oe(v,e);return a}(e,n,r,1-r,!0),t/=(1-r)*r}function Ze(r,e,n){var t,i;return P(r)||P(e)||P(n)||e<=0||n<=0?NaN:r<0||r===R?0:0===r?e<2?R:2===e?1:0:(t=e*r)>n?n*e/((n+t)*(n+t))*Me(n/(n+t),n/2,e/2):((i=n+t)*e-r*e*e)/(i*i)*Me(t/(n+t),e/2,n/2)}return L(Ze,"factory",(function(r,e){var n,t,i,a,o;return P(r)||P(e)||r<=0||e<=0?(o=NaN,function(){return o}):(a=r*e,t=r/2,i=e/2,n=0,r<2?n=R:2===r&&(n=1),function(o){var u,f;return P(o)?NaN:o<0||o===R?0:0===o?n:(u=r*o)>e?a/((e+u)*(e+u))*Me(e/(e+u),i,t):((f=e+u)*r-o*r*r)/(f*f)*Me(r*o/(e+u),t,i)})})),Ze},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=e();
//# sourceMappingURL=index.js.map
