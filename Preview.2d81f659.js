parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Vstc":[function(require,module,exports) {

},{}],"zxCA":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.expose=c,exports.proxy=v,exports.transfer=h,exports.windowEndpoint=x,exports.wrap=l,exports.transferHandlers=exports.releaseProxy=exports.proxyMarker=exports.createEndpoint=void 0;const e=Symbol("Comlink.proxy");exports.proxyMarker=e;const t=Symbol("Comlink.endpoint");exports.createEndpoint=t;const n=Symbol("Comlink.releaseProxy");exports.releaseProxy=n;const r=Symbol("Comlink.thrown"),a=e=>"object"==typeof e&&null!==e||"function"==typeof e,s={canHandle:t=>a(t)&&t[e],serialize(e){const{port1:t,port2:n}=new MessageChannel;return c(e,t),[n,[n]]},deserialize:e=>(e.start(),l(e))},o={canHandle:e=>a(e)&&r in e,serialize({value:e}){let t;return[t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}},i=new Map([["proxy",s],["throw",o]]);function c(e,t=self){t.addEventListener("message",function n(a){if(!a||!a.data)return;const{id:s,type:o,path:i}=Object.assign({path:[]},a.data),p=(a.data.argumentList||[]).map(w);let l;try{const t=i.slice(0,-1).reduce((e,t)=>e[t],e),n=i.reduce((e,t)=>e[t],e);switch(o){case 0:l=n;break;case 1:t[i.slice(-1)[0]]=w(a.data.value),l=!0;break;case 2:l=n.apply(t,p);break;case 3:l=v(new n(...p));break;case 4:{const{port1:t,port2:n}=new MessageChannel;c(e,n),l=h(t,[t])}break;case 5:l=void 0}}catch(d){l={value:d,[r]:0}}Promise.resolve(l).catch(e=>({value:e,[r]:0})).then(e=>{const[r,a]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:s}),a),5===o&&(t.removeEventListener("message",n),u(t))})}),t.start&&t.start()}function p(e){return"MessagePort"===e.constructor.name}function u(e){p(e)&&e.close()}function l(e,t){return f(e,[],t)}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e,r=[],a=function(){}){let s=!1;const o=new Proxy(a,{get(t,a){if(d(s),a===n)return()=>E(e,{type:5,path:r.map(e=>e.toString())}).then(()=>{u(e),s=!0});if("then"===a){if(0===r.length)return{then:()=>o};const t=E(e,{type:0,path:r.map(e=>e.toString())}).then(w);return t.then.bind(t)}return f(e,[...r,a])},set(t,n,a){d(s);const[o,i]=b(a);return E(e,{type:1,path:[...r,n].map(e=>e.toString()),value:o},i).then(w)},apply(n,a,o){d(s);const i=r[r.length-1];if(i===t)return E(e,{type:4}).then(w);if("bind"===i)return f(e,r.slice(0,-1));const[c,p]=g(o);return E(e,{type:2,path:r.map(e=>e.toString()),argumentList:c},p).then(w)},construct(t,n){d(s);const[a,o]=g(n);return E(e,{type:3,path:r.map(e=>e.toString()),argumentList:a},o).then(w)}});return o}function m(e){return Array.prototype.concat.apply([],e)}function g(e){const t=e.map(b);return[t.map(e=>e[0]),m(t.map(e=>e[1]))]}exports.transferHandlers=i;const y=new WeakMap;function h(e,t){return y.set(e,t),e}function v(t){return Object.assign(t,{[e]:!0})}function x(e,t=self,n="*"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of i)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:3,name:t,value:r},a]}return[{type:0,value:e},y.get(e)||[]]}function w(e){switch(e.type){case 3:return i.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise(r=>{const a=M();e.addEventListener("message",function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)})}function M(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}
},{}],"WIFH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("highlight.js/styles/github.css");var e=o(require("react")),t=require("comlink"),r=require("react-bootstrap");function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,t&&t.set(e,r),r}var a=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function u(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(i,u)}c((n=n.apply(e,t||[])).next())})};const{useState:i,useEffect:u,memo:c}=e,s=new Worker("/mark-it-down/markdownParser.0b2bfa91.js"),l=(0,t.wrap)(s),f=e=>{const[t,r]=i(""),[n,o]=i(!0);return u(()=>{(()=>a(void 0,void 0,void 0,function*(){const t=yield l.parse(e);r(t),o(!1)}))()},[e]),{html:t,isLoading:n}},d=({markdown:t})=>{const{html:n,isLoading:o}=f(t);return o?e.createElement(r.Spinner,{animation:"border",role:"status"},e.createElement("span",{className:"sr-only"},"Loading...")):e.createElement("div",{dangerouslySetInnerHTML:{__html:n}})};var p=c(d);exports.default=p;
},{"highlight.js/styles/github.css":"Vstc","react":"HdMw","comlink":"zxCA","react-bootstrap":"KcLN","./markdownParser.ts":[["markdownParser.0b2bfa91.js","NHQ8"],"NHQ8"]}],"Bh1I":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"z1Am":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Bh1I"}],"Ijyk":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("js",require("Ijyk"));b.load([]).then(function(){require("WIFH");});
},{}]},{},[0], null)