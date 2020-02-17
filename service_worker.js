//BEGIN workbox

importScripts('vendor/workbox-v4.3.1/workbox-sw.js');
workbox.setConfig({modulePathPrefix: '/vendor/workbox-v4.3.1/'});
const precacheManifest = [
  {
    "url": "index.html",
    "revision": "97ecc49f3a6020799e92eefc1f1c5850"
  },
  {
    "url": "mark-it-down.d8943de4.ico",
    "revision": "5b46ca422c5d409520f9b9b0e2682612"
  },
  {
    "url": "bootstrap.min.8cc538fa.css",
    "revision": "8b9e0d01c8d790247151cfa6bde8be7c"
  },
  {
    "url": "mark-it-down.68e8932e.js",
    "revision": "0c82e9cf36b7e320840d768e8ef15f00"
  },
  {
    "url": "Editor.07ae0546.js",
    "revision": "73d8b77d0f5a28bc517aeca1b48ac90a"
  },
  {
    "url": "Preview.1c963e20.js",
    "revision": "c060d04504d5e4b3548909632c33a91a"
  },
  {
    "url": "Preview.66e9638e.css",
    "revision": "163a1ce86f9de5d7c75c14fbb305bb83"
  },
  {
    "url": "markdownParser.80f0ac9e.js",
    "revision": "e6a4a20eee3747bbb593f079d84ff3f5"
  }
];

//END workbox
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SYg9":[function(require,module,exports) {
workbox.precaching.precacheAndRoute(precacheManifest);
},{}]},{},["SYg9"], null)