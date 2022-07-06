// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,o=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),v&&o&&o.call(r,n,t.set),r};var l=n;function y(r){return r!=r}var v=Number.POSITIVE_INFINITY;function p(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var b,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,w=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"";b=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,i;if(null==r)return d.call(r);t=r[N],i=N,n=null!=(u=r)&&w.call(u,i);try{r[N]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[N]=t:delete r[N],e}:function(r){return d.call(r)};var _,A=b,m="function"==typeof Uint32Array,h="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;_=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=_,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=g,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x=E,M="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(M&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,k={uint16:P,uint8:x};(W=new k.uint16(1))[0]=4660;var Y=52===new k.uint8(W.buffer)[0],q=!0===Y?1:0,C=new F(1),z=new j(C.buffer);function B(r){return C[0]=r,z[q]}var D=!0===Y?1:0,J=new F(1),K=new j(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}var R=Number.NEGATIVE_INFINITY,X=1023,Z=.6931471803691238,$=1.9082149292705877e-10,rr=1.4426950408889634;function nr(r){var n,t,e,u,i,f,o,a,c,l,p,b;if(r===v||y(r))return r;if(r===R)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return v}if(i=0|B(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+Z,u=-$,b=-1):(e=r-Z,u=$,b=1):(b=t?rr*r-.5:rr*r+.5,e=r-(l=b|=0)*Z,u=l*$),c=e-(r=e-u)-u;else{if(i<1016070144)return r;b=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),p=a*((f-(l=3-f*n))/(6-r*l)),0===b?r-(r*p-a):(p=r*(p-c)-c,p-=a,-1===b?.5*(r-p)-.5:1===b?r<-.25?-2*(p-(r+.5)):1+2*(r-p):b<=-2||b>56?(o=Q(o=1-(p-r),e=B(o)+(b<<20)|0))-1:(l=1,b<20?o=(l=Q(l,e=1072693248-(2097152>>b)|0))-(p-r):(o=r-(p+(l=Q(l,e=X-b<<20|0))),o+=1),Q(o,e=B(o)+(b<<20)|0)))}var tr=.6931471803691238,er=1.9082149292705877e-10;function ur(r){var n,t,e,u,i,f,o,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return R;if(r===v)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(i=(l=((t=B(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),i/=c):(l=((t=B(c=r))>>20)-X,i=0),(t&=1048575)<434334?c=Q(c,1072693248|t):(l+=1,c=Q(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*tr+(i+=l*er):l*tr-((a=n*(1-.6666666666666666*u))-(l*er+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-f*(n+a)):l*tr-(n-(f*(n+a)+(l*er+i))-u))}var ir=Math.sqrt;function fr(r){return Math.abs(r)}var or,ar,cr=Math.floor,lr=Math.ceil;function yr(r){return r<0?lr(r):cr(r)}function vr(r){return r===v||r===R}!0===Y?(or=1,ar=0):(or=0,ar=1);var pr,br,sr={HIGH:or,LOW:ar},dr=new F(1),wr=new j(dr.buffer),Nr=sr.HIGH,_r=sr.LOW;function Ar(r,n){return dr[0]=n,r[0]=wr[Nr],r[1]=wr[_r],r}function mr(r,n){return 1===arguments.length?Ar([0,0],r):Ar(r,n)}!0===Y?(pr=1,br=0):(pr=0,br=1);var hr={HIGH:pr,LOW:br},Ur=new F(1),gr=new j(Ur.buffer),jr=hr.HIGH,Ir=hr.LOW;function Or(r,n){return gr[jr]=r,gr[Ir]=n,Ur[0]}var Sr=[0,0];function Er(r,n){var t,e;return mr(Sr,r),t=Sr[0],t&=2147483647,e=B(n),Or(t|=e&=2147483648,Sr[1])}function Fr(r,n){return y(n)||vr(n)?(r[0]=n,r[1]=0,r):0!==n&&fr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||y(r)||vr(r)?r:(function(r,n){1===arguments.length?Fr([0,0],r):Fr(r,n)}(Tr,r),n+=Tr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-X|0}(r=Tr[0]),n<-1074?Er(0,r):n>1023?r<0?R:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr(Hr,r),t=Hr[0],t&=2148532223,e*Or(t|=n+X<<20,Hr[1])))}var Pr=1.4426950408889634,xr=1/(1<<28);function Mr(r){var n;return y(r)||r===v?r:r===R?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xr?1+r:function(r,n,t){var e,u,i,f;return Gr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=yr(r<0?Pr*r-.5:Pr*r+.5)),1.9082149292705877e-10*n,n)}function Lr(r){return cr(r)===r}function Vr(r){return Lr(r/2)}function Wr(r){return Vr(r>0?r-1:r+1)}var kr=!0===Y?0:1,Yr=new F(1),qr=new j(Yr.buffer);function Cr(r,n){return Yr[0]=r,qr[kr]=n>>>0,Yr[0]}function zr(r){return 0|r}var Br=1048576,Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8],Qr=2147483647,Rr=1048575,Xr=1048576,Zr=2147483647,$r=1083179008,rn=1e300,nn=1e-300,tn=[0,0],en=[0,0];function un(r,n){var t,e,u,i,f,o,a,c,l,p,b,s,d,w;if(y(r)||y(n))return NaN;if(mr(tn,n),f=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ir(r);if(-.5===n)return 1/ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(vr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:fr(r)<1==(n===v)?0:v}(r,n)}if(mr(tn,r),i=tn[0],0===tn[1]){if(0===i)return function(r,n){return n===R?v:n===v?0:n>0?Wr(n)?r:0:Wr(n)?Er(v,r):v}(r,n);if(1===r)return 1;if(-1===r&&Wr(n))return-1;if(vr(r))return r===R?un(-0,-n):n<0?0:v}if(r<0&&!1===Lr(n))return(r-r)/(r-r);if(u=fr(r),t=i&Zr|0,e=f&Zr|0,a=f>>>31|0,o=(o=i>>>31|0)&&Wr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&B(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*rn*rn:o*nn*nn;if(t>1072693248)return 0===a?o*rn*rn:o*nn*nn;b=function(r,n){var t,e,u,i,f,o;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r}(en,u)}else b=function(r,n,t){var e,u,i,f,o,a,c,l,y,v,p,b,s,d,w,N,_,A,m,h,U;return A=0,t<Br&&(A-=53,t=B(n*=9007199254740992)),A+=(t>>20)-X|0,t=1072693248|(m=1048575&t|0),m<=235662?h=0:m<767610?h=1:(h=0,A+=1,t-=Br),f=Cr(u=(N=(n=Q(n,t))-(c=Dr[h]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Q(0,e+=h<<18),w=(i=u*u)*i*(0===(U=i)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Cr(a=3+(i=f*f)+(w+=(o=_*(N-f*a-f*(n-(a-c))))*(f+u)),0),s=(p=-7.028461650952758e-9*(y=Cr(y=(N=f*a)+(_=o*a+(w-(a-3-i))*u),0))+.9617966939259756*(_-(y-N))+Kr[h])-((b=Cr(b=(v=.9617967009544373*y)+p+(l=Jr[h])+(d=A),0))-d-l-v),r[0]=b,r[1]=s,r}(en,u,t);if(p=(n-(c=Cr(n,0)))*b[0]+n*b[1],l=c*b[0],mr(tn,s=p+l),d=zr(tn[0]),w=zr(tn[1]),d>=$r){if(0!=(d-$r|w))return o*rn*rn;if(p+8008566259537294e-32>s-l)return o*rn*rn}else if((d&Zr)>=1083231232){if(0!=(d-3230714880|w))return o*nn*nn;if(p<=s-l)return o*nn*nn}return s=function(r,n,t){var e,u,i,f,o,a,c,l,y,v;return y=((l=r&Qr|0)>>20)-X|0,c=0,l>1071644672&&(u=Q(0,((c=r+(Xr>>y+1)>>>0)&~(Rr>>(y=((c&Qr)>>20)-X|0)))>>>0),c=(c&Rr|Xr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=zr(r=B(a=1-((a=(i=.6931471824645996*(u=Cr(u=t+n,0)))+(f=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-i))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):Q(a,r)}(d,l,p),o*s}function fn(r){return 0===r&&1/r===v}function on(r){return 0===r&&1/r===R}function an(r,n){var t,e,u,i;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===R||n===R?R:r===n&&0===r?on(r)?r:n:r<n?r:n;for(e=v,i=0;i<t;i++){if(y(u=arguments[i])||u===R)return u;(u<e||u===e&&0===u&&on(u))&&(e=u)}return e}var cn=.6931471803691238,ln=1.9082149292705877e-10,yn=1048575;function vn(r){var n,t,e,u,i,f,o,a,c,l,v,p;return 0===r?R:y(r)||r<0?NaN:(i=0,(t=B(r))<1048576&&(i-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-X|0,i+=(a=614244+(t&=yn)&1048576|0)>>20|0,o=(r=Q(r,t|1072693248^a))-1,(yn&2+t)<3?0===o?0===i?0:i*cn+i*ln:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*cn-(f-i*ln-o)):(a=t-398458|0,c=440401-t|0,u=(v=(p=(l=o/(2+o))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-l*(n+f)):i*cn-(n-(l*(n+f)+i*ln)-o)):0===i?o-l*(o-f):i*cn-(l*(o-f)-i*ln-o))))}var pn=709.782712893384,bn=-708.3964185322641,sn=10.900511;function dn(r,n,t,e,u){var i,f,o,a,c,l,b,s,d,w,N,_,A,m;if(!u)return un(t,r)*un(e,n);if(a=r+sn-.5,c=n+sn-.5,l=(A=r+n)+sn-.5,i=p(A),i/=p(r)*p(n),i*=ir(c/2.718281828459045),i*=ir(a/l),s=(e*r-t*c)/c,an(fr(b=(t*n-e*a)/a),fr(s))<.2)if(b*s>0||an(r,n)<1)fr(b)<.1?i*=Mr(r*ur(b)):i*=un(t*l/a,r),fr(s)<.1?i*=Mr(n*ur(s)):i*=un(e*l/c,n);else if(function(r,n){var t,e,u,i;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===v||n===v?v:r===n&&0===r?fn(r)?r:n:r>n?r:n;for(e=R,i=0;i<t;i++){if(y(u=arguments[i])||u===v)return u;(u>e||u===e&&0===u&&fn(u))&&(e=u)}return e}(fr(b),fr(s))<.5)o=n/r,(f=r<n)&&o*s<.1||!f&&b/o>.1?(d=nr(o*ur(s)),i*=Mr(d=r*ur(d=b+d+d*b))):(d=nr(ur(b)/o),i*=Mr(d=n*ur(d=s+d+d*s)));else if(fr(b)<fr(s))if((m=r*ur(b)+n*vn(e*l/c))<=bn||m>=pn){if((m+=vn(i))>=pn)return NaN;i=Mr(m)}else i*=Mr(m);else if((m=n*ur(s)+r*vn(t*l/a))<=bn||m>=pn){if((m+=vn(i))>=pn)return NaN;i=Mr(m)}else i*=Mr(m);else if(_=e*l/c,b=r*vn(N=t*l/a),s=n*vn(_),b>=pn||b<=bn||s>=pn||s<=bn)if(r<n)if(w=un(_,n/r),(d=r*(vn(N)+vn(w)))<pn&&d>bn)i*=un(w*N,r);else{if((s+=b+vn(i))>=pn)return NaN;i=Mr(s)}else if((d=(vn(w=un(N,r/n))+vn(_))*n)<pn&&d>bn)i*=un(w*_,n);else{if((s+=b+vn(i))>=pn)return NaN;i=Mr(s)}else i*=un(N,r)*un(_,n);return i}function wn(r,n,t){var e;return e=dn(n,t,r,1-r,!0),e/=(1-r)*r}function Nn(r,n,t){var e,u;return y(r)||y(n)||y(t)||n<=0||t<=0?NaN:r<0||r===v?0:0===r?n<2?v:2===n?1:0:(e=n*r)>t?t*n/((t+e)*(t+e))*wn(t/(t+e),t/2,n/2):((u=t+e)*n-r*n*n)/(u*u)*wn(e/(t+e),n/2,t/2)}function _n(r,n){var t,e,u,i,f;return y(r)||y(n)||r<=0||n<=0?(f=NaN,function(){return f}):(i=r*n,e=r/2,u=n/2,t=0,r<2?t=v:2===r&&(t=1),function(f){var o,a;return y(f)?NaN:f<0||f===v?0:0===f?t:(o=r*f)>n?i/((n+o)*(n+o))*wn(n/(n+o),u,e):((a=n+o)*r-f*r*r)/(a*a)*wn(r*f/(n+o),e,u)})}l(Nn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:_n}),r.default=Nn,r.factory=_n,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=index.js.map
