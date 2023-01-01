// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNativeFunction=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),y&&c&&c.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var g="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var e,r,n,o,i;if(null==t)return d.call(t);r=t[g],i=g,e=null!=(o=t)&&v.call(o,i);try{t[g]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[g]=r:delete t[g],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var j=b();function m(t){return"object"==typeof t&&(t instanceof Boolean||(j?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function h(t){return y(t)||m(t)}function S(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",m);var E="object"==typeof self?self:null,O="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof A?A:null;var T=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(O)return O;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,F=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var G=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",G);var R=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function V(t){return null!==t&&"object"==typeof t}function $(t){var e,r,n,o;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=G.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!R(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var k="function"==typeof t||"object"==typeof F||"function"==typeof B?function(t){return $(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?$(t).toLowerCase():e};function C(){var t="";return t="^"+(t=(t=(t+=Function.prototype.toString.call(Function)).replace(/([.*+?^=!:$(){}|[\]\/\\])/g,"\\$1")).replace(/Function|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?"))+"$",new RegExp(t)}var L=C();p(C,"REGEXP",L);var X=Function.prototype.toString;return function(t){return function(t){return"function"===k(t)}(t)&&C.REGEXP.test((e=t,X.call(e)));var e}}));
//# sourceMappingURL=browser.js.map
