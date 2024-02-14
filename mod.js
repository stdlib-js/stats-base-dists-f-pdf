// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function N(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function I(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function m(r,e,n){var t=e-r.length;return t<0?r:r=n?r+I(t):I(t)+r}var A=String.fromCharCode,E=isNaN,_=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,n,t,a,o,c,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=T(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=N(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=m(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,n,t,i;for(n=[],i=0,t=U.exec(r);t;)(e=r.slice(i,U.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=U.lastIndex,t=U.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){return"string"==typeof r}function k(r){var e,n;if(!x(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[V(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return F.apply(null,e)}var G=Object.prototype,j=G.toString,O=G.__defineGetter__,Y=G.__defineSetter__,$=G.__lookupGetter__,H=G.__lookupSetter__;var W=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(r,e)||H.call(r,e)?(t=r.__proto__,r.__proto__=G,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),o&&Y&&Y.call(r,e,n.set),r};function C(r,e,n){W(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function L(r){return r!=r}var P=Number.POSITIVE_INFINITY;function R(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var q="function"==typeof Symbol?Symbol:void 0,z="function"==typeof q?q.toStringTag:"";var B=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[z]=n:delete r[z],t}:function(r){return Z.call(r)},D="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var K,Q="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,n;if("function"!=typeof J)return!1;try{e=new J(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(D&&n instanceof Uint32Array||"[object Uint32Array]"===B(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var tr,ir="function"==typeof Float64Array?Float64Array:void 0;tr=function(){var r,e,n;if("function"!=typeof nr)return!1;try{e=new nr([1,3.14,-3.14,NaN]),n=e,r=(er&&n instanceof Float64Array||"[object Float64Array]"===B(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=tr,or="function"==typeof Uint8Array;var ur="function"==typeof Uint8Array?Uint8Array:null;var fr,cr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,256,257]),n=e,r=(or&&n instanceof Uint8Array||"[object Uint8Array]"===B(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var sr=fr,lr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var vr,yr="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(lr&&n instanceof Uint16Array||"[object Uint16Array]"===B(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr={uint16:vr,uint8:sr};(gr=new dr.uint16(1))[0]=4660;var hr=52===new dr.uint8(gr.buffer)[0],wr=!0===hr?1:0,br=new ar(1),Nr=new rr(br.buffer);function Ir(r){return br[0]=r,Nr[wr]}var mr,Ar,Er=!0===hr?1:0,_r=new ar(1),Tr=new rr(_r.buffer);function Fr(r,e){return _r[0]=r,Tr[Er]=e>>>0,_r[0]}!0===hr?(mr=1,Ar=0):(mr=0,Ar=1);var Ur={HIGH:mr,LOW:Ar},Sr=new ar(1),Vr=new rr(Sr.buffer),xr=Ur.HIGH,kr=Ur.LOW;function Gr(r,e){return Vr[xr]=r,Vr[kr]=e,Sr[0]}var jr=Number,Or=jr.NEGATIVE_INFINITY;var Yr=.6931471803691238,$r=1.9082149292705877e-10;function Hr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(r===P||L(r))return r;if(r===Or)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=38.816242111356935){if(t)return-1;if(f>=709.782712893384)return P}if(o=0|Ir(f),f>.34657359027997264)f<1.0397207708399179?t?(i=r+Yr,a=-$r,v=-1):(i=r-Yr,a=$r,v=1):(v=t?1.4426950408889634*r-.5:1.4426950408889634*r+.5,i=r-(l=v|=0)*Yr,a=l*$r),s=i-(r=i-a)-a;else{if(o<1016070144)return r;v=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===v?r-(r*p-c):(n=Gr(1023+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=Fr(f,i=Ir(f)+(v<<20)|0):f*=n,f-1):(l=1,v<20?f=(l=Fr(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=Fr(l,i=1023-v<<20|0))),f+=1),f*=n))}var Wr=jr.NEGATIVE_INFINITY;var Cr=.6931471803691238,Lr=1.9082149292705877e-10;function Pr(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||L(r))return NaN;if(-1===r)return Wr;if(r===P)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=Ir(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((n=Ir(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=Fr(c,1072693248|n):(s+=1,c=Fr(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Cr+(a+=s*Lr):s*Cr-((f=e*(1-.6666666666666666*i))-(s*Lr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Cr-(e-(o*(e+f)+(s*Lr+a))-i))}var Rr=Math.sqrt;function Mr(r){return Math.abs(r)}var Zr=Math.floor,Xr=Math.ceil;function qr(r){return r<0?Xr(r):Zr(r)}var zr=jr.NEGATIVE_INFINITY,Br=jr.NEGATIVE_INFINITY,Dr=jr.NEGATIVE_INFINITY;function Jr(r){return r===P||r===Dr}var Kr,Qr;!0===hr?(Kr=1,Qr=0):(Kr=0,Qr=1);var re={HIGH:Kr,LOW:Qr},ee=new ar(1),ne=new rr(ee.buffer),te=re.HIGH,ie=re.LOW;function ae(r,e,n,t){return ee[0]=r,e[t]=ne[te],e[t+n]=ne[ie],e}function oe(r){return ae(r,[0,0],1,0)}C(oe,"assign",ae);var ue=[0,0];function fe(r,e){var n,t;return oe.assign(r,ue,1,0),n=ue[0],n&=2147483647,t=Ir(e),Gr(n|=t&=2147483648,ue[1])}function ce(r,e,n,t){return L(r)||Jr(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Mr(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}C((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=[0,0],le=[0,0];function pe(r,e){var n,t;return 0===e||0===r||L(r)||Jr(r)?r:(ce(r,se,1,0),e+=se[1],e+=function(r){var e=Ir(r);return(e=(2146435072&e)>>>20)-1023|0}(r=se[0]),e<-1074?fe(0,r):e>1023?r<0?Br:P:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,oe.assign(r,le,1,0),n=le[0],n&=2148532223,t*Gr(n|=e+1023<<20,le[1])))}function ve(r){var e;return L(r)||r===P?r:r===zr?0:r>709.782712893384?P:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return pe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=qr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function ye(r){return Zr(r)===r}function ge(r){return ye(r/2)}function de(r){return ge(r>0?r-1:r+1)}var he=!0===hr?0:1,we=new ar(1),be=new rr(we.buffer);function Ne(r,e){return we[0]=r,be[he]=e>>>0,we[0]}function Ie(r){return 0|r}var me=jr.NEGATIVE_INFINITY;var Ae=[1,1.5],Ee=[0,.5849624872207642],_e=[0,1.350039202129749e-8];var Te=1e300,Fe=1e-300,Ue=[0,0],Se=[0,0];function Ve(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,y,g;if(L(r)||L(e))return NaN;if(oe.assign(e,Ue,1,0),o=Ue[0],0===Ue[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Rr(r);if(-.5===e)return 1/Rr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Jr(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Mr(r)<1==(e===P)?0:P}(r,e)}if(oe.assign(r,Ue,1,0),a=Ue[0],0===Ue[1]){if(0===a)return function(r,e){return e===me?P:e===P?0:e>0?de(e)?r:0:de(e)?fe(P,r):P}(r,e);if(1===r)return 1;if(-1===r&&de(e))return-1;if(Jr(r))return r===me?Ve(-0,-e):e<0?0:P}if(r<0&&!1===ye(e))return(r-r)/(r-r);if(i=Mr(r),n=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&de(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&Ir(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Te*Te:u*Fe*Fe;if(n>1072693248)return 0===f?u*Te*Te:u*Fe*Fe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Ne(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Se,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,N,I,m,A;return N=0,n<1048576&&(N-=53,n=Ir(e*=9007199254740992)),N+=(n>>20)-1023|0,n=1072693248|(I=1048575&n|0),I<=235662?m=0:I<767610?m=1:(m=0,N+=1,n-=1048576),o=Ne(i=(w=(e=Fr(e,n))-(c=Ae[m]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Fr(0,t+=m<<18),h=(a=i*i)*a*(0===(A=a)?.5999999999999946:.5999999999999946+A*(.4285714285785502+A*(.33333332981837743+A*(.272728123808534+A*(.23066074577556175+.20697501780033842*A))))),f=Ne(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),g=(v=-7.028461650952758e-9*(l=Ne(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+_e[m])-((y=Ne(y=(p=.9617967009544373*l)+v+(s=Ee[m])+(d=N),0))-d-s-p),r[0]=y,r[1]=g,r}(Se,i,n);if(v=(l=(e-(c=Ne(e,0)))*p[0]+e*p[1])+(s=c*p[0]),oe.assign(v,Ue,1,0),y=Ie(Ue[0]),g=Ie(Ue[1]),y>=1083179008){if(0!=(y-1083179008|g))return u*Te*Te;if(l+8008566259537294e-32>v-s)return u*Te*Te}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return u*Fe*Fe;if(l<=v-s)return u*Fe*Fe}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Fr(0,t)),r=Ie(r=Ir(c=1-((c=(o=.6931471824645996*(a=Ne(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?pe(c,s):Fr(c,r)}(y,s,l),u*v}function xe(r,e){return L(r)||L(e)?NaN:r===P||e===P?P:r===e&&0===r?function(r){return 0===r&&1/r===P}(r)?r:e:r>e?r:e}var ke=jr.NEGATIVE_INFINITY;var Ge=jr.NEGATIVE_INFINITY;function je(r,e){return L(r)||L(e)?NaN:r===Ge||e===Ge?Ge:r===e&&0===r?function(r){return 0===r&&1/r===ke}(r)?r:e:r<e?r:e}var Oe=jr.NEGATIVE_INFINITY;var Ye=.6931471803691238,$e=1.9082149292705877e-10;function He(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Oe:L(r)||r<0?NaN:(a=0,(n=Ir(r))<1048576&&(a-=54,n=Ir(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Fr(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*Ye+a*$e:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ye-(o-a*$e-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ye-(e-(s*(e+o)+a*$e)-u)):0===a?u-s*(u-o):a*Ye-(s*(u-o)-a*$e-u))))}function We(r,e,n){var t;return t=function(r,e,n,t,i){var a,o,u,f,c,s,l,p,v,y,g,d,h,w;if(!i)return Ve(n,r)*Ve(t,e);if(f=r+10.900511-.5,c=e+10.900511-.5,s=(h=r+e)+10.900511-.5,a=R(h),a/=R(r)*R(e),a*=Rr(c/2.718281828459045),a*=Rr(f/s),p=(t*r-n*c)/c,je(Mr(l=(n*e-t*f)/f),Mr(p))<.2)if(l*p>0||je(r,e)<1)Mr(l)<.1?a*=ve(r*Pr(l)):a*=Ve(n*s/f,r),Mr(p)<.1?a*=ve(e*Pr(p)):a*=Ve(t*s/c,e);else if(xe(Mr(l),Mr(p))<.5)u=e/r,(o=r<e)&&u*p<.1||!o&&l/u>.1?(v=Hr(u*Pr(p)),a*=ve(v=r*Pr(v=l+v+v*l))):(v=Hr(Pr(l)/u),a*=ve(v=e*Pr(v=p+v+v*p)));else if(Mr(l)<Mr(p))if((w=r*Pr(l)+e*He(t*s/c))<=-708.3964185322641||w>=709.782712893384){if((w+=He(a))>=709.782712893384)return NaN;a=ve(w)}else a*=ve(w);else if((w=e*Pr(p)+r*He(n*s/f))<=-708.3964185322641||w>=709.782712893384){if((w+=He(a))>=709.782712893384)return NaN;a=ve(w)}else a*=ve(w);else if(d=t*s/c,l=r*He(g=n*s/f),p=e*He(d),l>=709.782712893384||l<=-708.3964185322641||p>=709.782712893384||p<=-708.3964185322641)if(r<e)if(y=Ve(d,e/r),(v=r*(He(g)+He(y)))<709.782712893384&&v>-708.3964185322641)a*=Ve(y*g,r);else{if((p+=l+He(a))>=709.782712893384)return NaN;a=ve(p)}else if((v=(He(y=Ve(g,r/e))+He(d))*e)<709.782712893384&&v>-708.3964185322641)a*=Ve(y*d,e);else{if((p+=l+He(a))>=709.782712893384)return NaN;a=ve(p)}else a*=Ve(g,r)*Ve(d,e);return a}(e,n,r,1-r,!0),t/=(1-r)*r}function Ce(r,e,n){var t,i;return L(r)||L(e)||L(n)||e<=0||n<=0?NaN:r<0||r===P?0:0===r?e<2?P:2===e?1:0:(t=e*r)>n?n*e/((n+t)*(n+t))*We(n/(n+t),n/2,e/2):((i=n+t)*e-r*e*e)/(i*i)*We(t/(n+t),e/2,n/2)}function Le(r,e){var n,t,i,a,o;return L(r)||L(e)||r<=0||e<=0?(o=NaN,function(){return o}):(a=r*e,t=r/2,i=e/2,n=0,r<2?n=P:2===r&&(n=1),function(o){var u,f;if(L(o))return NaN;if(o<0||o===P)return 0;if(0===o)return n;if((u=r*o)>e)return a/((e+u)*(e+u))*We(e/(e+u),i,t);return((f=e+u)*r-o*r*r)/(f*f)*We(r*o/(e+u),t,i)})}C(Ce,"factory",Le);export{Ce as default,Le as factory};
//# sourceMappingURL=mod.js.map
