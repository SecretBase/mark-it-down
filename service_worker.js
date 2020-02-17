//BEGIN workbox

importScripts('vendor/workbox-v4.3.1/workbox-sw.js');
workbox.setConfig({modulePathPrefix: '/vendor/workbox-v4.3.1/'});
const precacheManifest = [
  {
    "url": "index.html",
    "revision": "73f50847b6af315e3fd12b5a1deac9a5"
  },
  {
    "url": "mark-it-down.d8943de4.ico",
    "revision": "5b46ca422c5d409520f9b9b0e2682612"
  },
  {
    "url": "bootstrap.min.933ffbda.css",
    "revision": "f0598336d28e16e045789edd6d615881"
  },
  {
    "url": "mark-it-down.af829551.js",
    "revision": "035e1948e30b65d340b969b820105a23"
  },
  {
    "url": "Editor.0705f02c.js",
    "revision": "90352926f08d32a88112d09c5694fd83"
  },
  {
    "url": "Preview.7f4a97c9.js",
    "revision": "11c355e114b9f74558924e272652f06c"
  },
  {
    "url": "Preview.8c766760.css",
    "revision": "8efd45afc5eaab8327709641ab50c2a5"
  },
  {
    "url": "markdownParser.0b41d210.js",
    "revision": "7fbb28affa931599284c62c212e3f4bf"
  }
];

//END workbox
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SYg9":[function(require,module,exports) {
workbox.precaching.precacheAndRoute(precacheManifest);
},{}]},{},["SYg9"], null)
//# sourceMappingURL=/mark-it-down/service_worker.js.map