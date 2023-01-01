// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,u=t.__defineSetter__,f=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY;function v(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var p,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,d=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",N=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,u;if(null==r)return b.call(r);t=r[w],u=w,n=null!=(i=r)&&d.call(i,u);try{r[w]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[w]=t:delete r[w],e}:function(r){return b.call(r)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===N(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var g,h=p,U="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===N(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=g,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===N(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,x="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===N(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,V={uint16:H,uint8:G};(M=new V.uint16(1))[0]=4660;var W=52===new V.uint8(M.buffer)[0],k=!0===W?1:0,Y=new S(1),q=new h(Y.buffer);function C(r){return Y[0]=r,q[k]}var z=!0===W?1:0,B=new S(1),D=new h(B.buffer);function J(r,n){return B[0]=r,D[z]=n>>>0,B[0]}var K=Number.NEGATIVE_INFINITY,Q=1023,R=.6931471803691238,X=1.9082149292705877e-10,Z=1.4426950408889634;function $(r){var n,t,e,i,u,f,o,a,c,v,p,s;if(r===y||l(r))return r;if(r===K)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return y}if(u=0|C(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+R,i=-X,s=-1):(e=r-R,i=X,s=1):(s=t?Z*r-.5:Z*r+.5,e=r-(v=s|=0)*R,i=v*X),c=e-(r=e-i)-i;else{if(u<1016070144)return r;s=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((f-(v=3-f*n))/(6-r*v)),0===s?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===s?.5*(r-p)-.5:1===s?r<-.25?-2*(p-(r+.5)):1+2*(r-p):s<=-2||s>56?(o=J(o=1-(p-r),e=C(o)+(s<<20)|0))-1:(v=1,s<20?o=(v=J(v,e=1072693248-(2097152>>s)|0))-(p-r):(o=r-(p+(v=J(v,e=Q-s<<20|0))),o+=1),J(o,e=C(o)+(s<<20)|0)))}var rr=.6931471803691238,nr=1.9082149292705877e-10;function tr(r){var n,t,e,i,u,f,o,a,c,v;if(r<-1||l(r))return NaN;if(-1===r)return K;if(r===y)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,i=r,t=1)}return 0!==v&&(e<9007199254740992?(u=(v=((t=C(c=1+r))>>20)-Q)>0?1-(c-r):r-(c-1),u/=c):(v=((t=C(c=r))>>20)-Q,u=0),(t&=1048575)<434334?c=J(c,1072693248|t):(v+=1,c=J(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?v*rr+(u+=v*nr):v*rr-((a=n*(1-.6666666666666666*i))-(v*nr+u)-i):(a=(o=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===v?i-(n-f*(n+a)):v*rr-(n-(f*(n+a)+(v*nr+u))-i))}var er=Math.sqrt;function ir(r){return Math.abs(r)}var ur=Math.floor,fr=Math.ceil;function or(r){return r<0?fr(r):ur(r)}function ar(r){return r===y||r===K}var cr,lr,yr=2147483647;!0===W?(cr=1,lr=0):(cr=0,lr=1);var vr,pr,sr={HIGH:cr,LOW:lr},br=new S(1),dr=new h(br.buffer),wr=sr.HIGH,Nr=sr.LOW;function Ar(r,n,t,e){return br[0]=r,n[e]=dr[wr],n[e+t]=dr[Nr],n}function _r(r){return Ar(r,[0,0],1,0)}c(_r,"assign",Ar),!0===W?(vr=1,pr=0):(vr=0,pr=1);var mr={HIGH:vr,LOW:pr},gr=new S(1),hr=new h(gr.buffer),Ur=mr.HIGH,jr=mr.LOW;function Ir(r,n){return hr[Ur]=r,hr[jr]=n,gr[0]}var Or=[0,0];function Sr(r,n){var t,e;return _r.assign(r,Or,1,0),t=Or[0],t&=yr,e=C(n),Ir(t|=e&=2147483648,Or[1])}function Er(r,n,t,e){return l(r)||ar(r)?(n[e]=r,n[e+t]=0,n):0!==r&&ir(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Er(r,[0,0],1,0)}),"assign",Er);var Fr=[0,0],Tr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||l(r)||ar(r)?r:(Er(r,Fr,1,0),n+=Fr[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-Q|0}(r=Fr[0]),n<-1074?Sr(0,r):n>1023?r<0?K:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,_r.assign(r,Tr,1,0),t=Tr[0],t&=2148532223,e*Ir(t|=n+Q<<20,Tr[1])))}var Gr=1.4426950408889634,Pr=1/(1<<28);function xr(r){var n;return l(r)||r===y?r:r===K?0:r>709.782712893384?y:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Pr?1+r:function(r,n,t){var e,i,u,f;return Hr(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(f=i)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=or(r<0?Gr*r-.5:Gr*r+.5)),1.9082149292705877e-10*n,n)}function Lr(r){return ur(r)===r}function Mr(r){return Lr(r/2)}function Vr(r){return Mr(r>0?r-1:r+1)}var Wr=!0===W?0:1,kr=new S(1),Yr=new h(kr.buffer);function qr(r,n){return kr[0]=r,Yr[Wr]=n>>>0,kr[0]}function Cr(r){return 0|r}var zr=1048576,Br=[1,1.5],Dr=[0,.5849624872207642],Jr=[0,1.350039202129749e-8],Kr=1048575,Qr=1048576,Rr=1083179008,Xr=1e300,Zr=1e-300,$r=[0,0],rn=[0,0];function nn(r,n){var t,e,i,u,f,o,a,c,v,p,s,b,d,w;if(l(r)||l(n))return NaN;if(_r.assign(n,$r,1,0),f=$r[0],0===$r[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return er(r);if(-.5===n)return 1/er(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(ar(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:ir(r)<1==(n===y)?0:y}(r,n)}if(_r.assign(r,$r,1,0),u=$r[0],0===$r[1]){if(0===u)return function(r,n){return n===K?y:n===y?0:n>0?Vr(n)?r:0:Vr(n)?Sr(y,r):y}(r,n);if(1===r)return 1;if(-1===r&&Vr(n))return-1;if(ar(r))return r===K?nn(-0,-n):n<0?0:y}if(r<0&&!1===Lr(n))return(r-r)/(r-r);if(i=ir(r),t=u&yr|0,e=f&yr|0,a=f>>>31|0,o=(o=u>>>31|0)&&Vr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(C(r)&yr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Xr*Xr:o*Zr*Zr;if(t>1072693248)return 0===a?o*Xr*Xr:o*Zr*Zr;s=function(r,n){var t,e,i,u,f,o;return t=(f=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=qr(e=(u=1.4426950216293335*i)+f,0))-u),r[0]=e,r[1]=t,r}(rn,i)}else s=function(r,n,t){var e,i,u,f,o,a,c,l,y,v,p,s,b,d,w,N,A,_,m,g,h;return _=0,t<zr&&(_-=53,t=C(n*=9007199254740992)),_+=(t>>20)-Q|0,t=1072693248|(m=1048575&t|0),m<=235662?g=0:m<767610?g=1:(g=0,_+=1,t-=zr),f=qr(i=(N=(n=J(n,t))-(c=Br[g]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=J(0,e+=g<<18),w=(u=i*i)*u*(0===(h=u)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),a=qr(a=3+(u=f*f)+(w+=(o=A*(N-f*a-f*(n-(a-c))))*(f+i)),0),b=(p=-7.028461650952758e-9*(y=qr(y=(N=f*a)+(A=o*a+(w-(a-3-u))*i),0))+.9617966939259756*(A-(y-N))+Jr[g])-((s=qr(s=(v=.9617967009544373*y)+p+(l=Dr[g])+(d=_),0))-d-l-v),r[0]=s,r[1]=b,r}(rn,i,t);if(b=(p=(n-(c=qr(n,0)))*s[0]+n*s[1])+(v=c*s[0]),_r.assign(b,$r,1,0),d=Cr($r[0]),w=Cr($r[1]),d>=Rr){if(0!=(d-Rr|w))return o*Xr*Xr;if(p+8008566259537294e-32>b-v)return o*Xr*Xr}else if((d&yr)>=1083231232){if(0!=(d-3230714880|w))return o*Zr*Zr;if(p<=b-v)return o*Zr*Zr}return b=function(r,n,t){var e,i,u,f,o,a,c,l,y,v;return y=((l=r&yr|0)>>20)-Q|0,c=0,l>1071644672&&(i=J(0,((c=r+(Qr>>y+1)>>>0)&~(Kr>>(y=((c&yr)>>20)-Q|0)))>>>0),c=(c&Kr|Qr)>>20-y>>>0,r<0&&(c=-c),n-=i),r=Cr(r=C(a=1-((a=(u=.6931471824645996*(i=qr(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Hr(a,c):J(a,r)}(d,v,p),o*b}function tn(r){return 0===r&&1/r===y}function en(r){return 0===r&&1/r===K}function un(r,n){var t,e,i,u;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===K||n===K?K:r===n&&0===r?en(r)?r:n:r<n?r:n;for(e=y,u=0;u<t;u++){if(l(i=arguments[u])||i===K)return i;(i<e||i===e&&0===i&&en(i))&&(e=i)}return e}var fn=.6931471803691238,on=1.9082149292705877e-10,an=1048575;function cn(r){var n,t,e,i,u,f,o,a,c,y,v,p;return 0===r?K:l(r)||r<0?NaN:(u=0,(t=C(r))<1048576&&(u-=54,t=C(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Q|0,u+=(a=614244+(t&=an)&1048576|0)>>20|0,o=(r=J(r,t|1072693248^a))-1,(an&2+t)<3?0===o?0===u?0:u*fn+u*on:(f=o*o*(.5-.3333333333333333*o),0===u?o-f:u*fn-(f-u*on-o)):(a=t-398458|0,c=440401-t|0,i=(v=(p=(y=o/(2+o))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+i,(a|=c)>0?(n=.5*o*o,0===u?o-(n-y*(n+f)):u*fn-(n-(y*(n+f)+u*on)-o)):0===u?o-y*(o-f):u*fn-(y*(o-f)-u*on-o))))}var ln=709.782712893384,yn=-708.3964185322641,vn=10.900511;function pn(r,n,t,e,i){var u,f,o,a,c,p,s,b,d,w,N,A,_,m;if(!i)return nn(t,r)*nn(e,n);if(a=r+vn-.5,c=n+vn-.5,p=(_=r+n)+vn-.5,u=v(_),u/=v(r)*v(n),u*=er(c/2.718281828459045),u*=er(a/p),b=(e*r-t*c)/c,un(ir(s=(t*n-e*a)/a),ir(b))<.2)if(s*b>0||un(r,n)<1)ir(s)<.1?u*=xr(r*tr(s)):u*=nn(t*p/a,r),ir(b)<.1?u*=xr(n*tr(b)):u*=nn(e*p/c,n);else if(function(r,n){var t,e,i,u;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===y||n===y?y:r===n&&0===r?tn(r)?r:n:r>n?r:n;for(e=K,u=0;u<t;u++){if(l(i=arguments[u])||i===y)return i;(i>e||i===e&&0===i&&tn(i))&&(e=i)}return e}(ir(s),ir(b))<.5)o=n/r,(f=r<n)&&o*b<.1||!f&&s/o>.1?(d=$(o*tr(b)),u*=xr(d=r*tr(d=s+d+d*s))):(d=$(tr(s)/o),u*=xr(d=n*tr(d=b+d+d*b)));else if(ir(s)<ir(b))if((m=r*tr(s)+n*cn(e*p/c))<=yn||m>=ln){if((m+=cn(u))>=ln)return NaN;u=xr(m)}else u*=xr(m);else if((m=n*tr(b)+r*cn(t*p/a))<=yn||m>=ln){if((m+=cn(u))>=ln)return NaN;u=xr(m)}else u*=xr(m);else if(A=e*p/c,s=r*cn(N=t*p/a),b=n*cn(A),s>=ln||s<=yn||b>=ln||b<=yn)if(r<n)if(w=nn(A,n/r),(d=r*(cn(N)+cn(w)))<ln&&d>yn)u*=nn(w*N,r);else{if((b+=s+cn(u))>=ln)return NaN;u=xr(b)}else if((d=(cn(w=nn(N,r/n))+cn(A))*n)<ln&&d>yn)u*=nn(w*A,n);else{if((b+=s+cn(u))>=ln)return NaN;u=xr(b)}else u*=nn(N,r)*nn(A,n);return u}function sn(r,n,t){var e;return e=pn(n,t,r,1-r,!0),e/=(1-r)*r}function bn(r,n,t){var e,i;return l(r)||l(n)||l(t)||n<=0||t<=0?NaN:r<0||r===y?0:0===r?n<2?y:2===n?1:0:(e=n*r)>t?t*n/((t+e)*(t+e))*sn(t/(t+e),t/2,n/2):((i=t+e)*n-r*n*n)/(i*i)*sn(e/(t+e),n/2,t/2)}return c(bn,"factory",(function(r,n){var t,e,i,u,f;return l(r)||l(n)||r<=0||n<=0?(f=NaN,function(){return f}):(u=r*n,e=r/2,i=n/2,t=0,r<2?t=y:2===r&&(t=1),function(f){var o,a;return l(f)?NaN:f<0||f===y?0:0===f?t:(o=r*f)>n?u/((n+o)*(n+o))*sn(n/(n+o),i,e):((a=n+o)*r-f*r*r)/(a*a)*sn(r*f/(n+o),e,i)})})),bn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=n();
//# sourceMappingURL=index.js.map
