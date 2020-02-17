//BEGIN workbox

importScripts('vendor/workbox-v4.3.1/workbox-sw.js');
workbox.setConfig({modulePathPrefix: '/vendor/workbox-v4.3.1/'});
const precacheManifest = [
  {
    "url": "index.html",
    "revision": "5da192de545c0755e1e62c3209226ce7"
  },
  {
    "url": "mark-it-down.d8943de4.ico",
    "revision": "5b46ca422c5d409520f9b9b0e2682612"
  },
  {
    "url": "bootstrap.min.933ffbda.css",
    "revision": "c4212a0fe05c5cafc018dabbcffaaa7a"
  },
  {
    "url": "mark-it-down.ed886836.js",
    "revision": "45fc651c74045013b02ca0ef7ae11b76"
  },
  {
    "url": "Editor.0705f02c.js",
    "revision": "aab6893413c8d216a83f39d7c0d7d9a9"
  },
  {
    "url": "Preview.a1363403.js",
    "revision": "36465229411d7e4fff21eca73c022ae4"
  },
  {
    "url": "Preview.8c766760.css",
    "revision": "664873b6384b9a1715667c24313b7fee"
  },
  {
    "url": "markdownParser.0b41d210.js",
    "revision": "883ec7f64d3dacd65705104171ddb2c4"
  }
];

//END workbox
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SYg9":[function(require,module,exports) {
workbox.precaching.precacheAndRoute(precacheManifest);
},{}]},{},["SYg9"], null)
//# sourceMappingURL=/service_worker.js.map