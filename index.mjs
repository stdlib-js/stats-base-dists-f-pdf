// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";function u(s,t,e){var b;return b=function(s,t,e,b,u){var x,g,N,y,z,q,w,k,A,B,C,D,E,F;if(!u)return a(e,s)*a(b,t);if(y=s+c-.5,z=t+c-.5,q=(E=s+t)+c-.5,x=i(E),x/=i(s)*i(t),x*=m(z/v),x*=m(y/q),k=(b*s-e*z)/z,p(d(w=(e*t-b*y)/y),d(k))<.2)if(w*k>0||p(s,t)<1)d(w)<.1?x*=l(s*r(w)):x*=a(e*q/y,s),d(k)<.1?x*=l(t*r(k)):x*=a(b*q/z,t);else if(o(d(w),d(k))<.5)N=t/s,(g=s<t)&&N*k<.1||!g&&w/N>.1?(A=n(N*r(k)),A=s*r(A=w+A+A*w),x*=l(A)):(A=n(r(w)/N),A=t*r(A=k+A+A*k),x*=l(A));else if(d(w)<d(k))if((F=s*r(w)+t*j(b*q/z))<=h||F>=f){if((F+=j(x))>=f)return NaN;x=l(F)}else x*=l(F);else if((F=t*r(k)+s*j(e*q/y))<=h||F>=f){if((F+=j(x))>=f)return NaN;x=l(F)}else x*=l(F);else if(D=b*q/z,w=s*j(C=e*q/y),k=t*j(D),w>=f||w<=h||k>=f||k<=h)if(s<t)if(B=a(D,t/s),(A=s*(j(C)+j(B)))<f&&A>h)x*=a(B*C,s);else{if((k+=w+j(x))>=f)return NaN;x=l(k)}else if(B=a(C,s/t),(A=(j(B)+j(D))*t)<f&&A>h)x*=a(B*D,t);else{if((k+=w+j(x))>=f)return NaN;x=l(k)}else x*=a(C,s)*a(D,t);return x}(t,e,s,1-s,!0),b/=(1-s)*s}function x(s,i,n){var r,m;return t(s)||t(i)||t(n)||i<=0||n<=0?NaN:s<0||s===e?0:0===s?i<2?e:2===i?1:0:(r=i*s)>n?n*i/((n+r)*(n+r))*u(n/(n+r),n/2,i/2):((m=n+r)*i-s*i*i)/(m*m)*u(r/(n+r),i/2,n/2)}function g(s,i){var n,r,m,d;return t(s)||t(i)||s<=0||i<=0?b(NaN):(d=s*i,r=s/2,m=i/2,n=0,s<2?n=e:2===s&&(n=1),function(l){var a,o;if(t(l))return NaN;if(l<0||l===e)return 0;if(0===l)return n;if((a=s*l)>i)return d/((i+a)*(i+a))*u(i/(i+a),m,r);return((o=i+a)*s-l*s*s)/(o*o)*u(s*l/(i+a),r,m)})}s(x,"factory",g);export{x as default,g as factory};
//# sourceMappingURL=index.mjs.map
