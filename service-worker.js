if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return n[e]||(c=new Promise(async c=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=c}else importScripts(e),c()})),c.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},c=(c,n)=>{Promise.all(c.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(c)};self.define=(c,i,a)=>{n[c]||(n[c]=Promise.resolve().then(()=>{let n={};const f={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return n;case"module":return f;default:return e(c)}})).then(e=>{const c=a(...e);return n.default||(n.default=c),n})}))}}define("./service-worker.js",["./workbox-56b7c574"],(function(e){"use strict";e.setCacheNameDetails({prefix:"y"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.a8588a91.css",revision:"e57ceb79dc636aa1e15c0bbbfb621e9c"},{url:"css/app.fffe4568.css",revision:"1cfd6346e6aba1ac0950edcd186b4772"},{url:"css/vendor.844253e1.css",revision:"0102268d703fd5d31395e946e6846bef"},{url:"favicon.ico",revision:"4caca6a5d67e08c74a5725dad777fdcb"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.8c7a828f.woff",revision:"d560f924f97c39f3c71be0a30f89b2a8"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4ecd8e78.woff2",revision:"ad0c1bf1395151a1112d4fc419a6c852"},{url:"icons/apple-icon-120x120.png",revision:"ad3c94076a1fea069e764da5a9ddf380"},{url:"icons/apple-icon-152x152.png",revision:"ce8ae37a140535c7080969eec50efa27"},{url:"icons/apple-icon-167x167.png",revision:"37aa5b3aaf2c6257064a378d29d18cc5"},{url:"icons/apple-icon-180x180.png",revision:"aeec6dc45f9ec5a80bcdf1e2ca83d0e8"},{url:"icons/apple-launch-1125x2436.png",revision:"19b236ab4b550baf5a2f5fa9bbc20d39"},{url:"icons/apple-launch-1242x2208.png",revision:"f5eed12ea2ccbc7edf093cd555fc8192"},{url:"icons/apple-launch-1242x2688.png",revision:"a244c00c675096c953afae517b24c318"},{url:"icons/apple-launch-1536x2048.png",revision:"cb4a428f2655790f3c98a55afa9d81b3"},{url:"icons/apple-launch-1668x2224.png",revision:"2ebaba5b1e4232f9246ff9eb5ab1ad59"},{url:"icons/apple-launch-1668x2388.png",revision:"4a4c72707748f19371ba27758528e2bf"},{url:"icons/apple-launch-2048x2732.png",revision:"e98954e94b98bbbf707830e79f81853a"},{url:"icons/apple-launch-640x1136.png",revision:"083967a3bb3b45ed8a4692c9c27c6b32"},{url:"icons/apple-launch-750x1334.png",revision:"3ea3adcd43018f69524505352a4ca3f1"},{url:"icons/apple-launch-828x1792.png",revision:"1ecdd88b09e0d40e3ce4ac1def975a17"},{url:"icons/favicon-128x128.png",revision:"c4a921c7cfc99e8ce625324d4fce0686"},{url:"icons/favicon-16x16.png",revision:"eeb5b0d084d06d9ee1b8577e91fb3854"},{url:"icons/favicon-32x32.png",revision:"4833df4eaf0776fe60303f0530ee7c9f"},{url:"icons/favicon-96x96.png",revision:"1fb6d91bd53a141004b968d09892b83b"},{url:"icons/icon-128x128.png",revision:"c4a921c7cfc99e8ce625324d4fce0686"},{url:"icons/icon-192x192.png",revision:"33eb754318b9074be19fbae064ca60c3"},{url:"icons/icon-256x256.png",revision:"3766ba3186f89fbe677294b412a6566b"},{url:"icons/icon-384x384.png",revision:"1926b795d01ffe9d0ca0731fadabb608"},{url:"icons/icon-512x512.png",revision:"4ffe66e51ffbb3d6f57bb4c994d322d9"},{url:"icons/ms-icon-144x144.png",revision:"2b072f2bfc98f5ed95657baf7722ca99"},{url:"icons/safari-pinned-tab.svg",revision:"7274d8bab15db61dba1d420482367cec"},{url:"img/sentry.abd5701f.png",revision:"4dd611fceecc6f2c2b75f3e5b924636f"},{url:"index.html",revision:"30332924912d3ca933022849709a5f92"},{url:"js/2.c327a0bf.js",revision:"2cc8a5f7d1383934174a8165a47b984f"},{url:"js/3.00f628bf.js",revision:"3231070ab74ab9b38d37450392e0b422"},{url:"js/app.534b4827.js",revision:"91057e36b0e69bd190d38094abb09af8"},{url:"js/vendor.161e44b9.js",revision:"ddc9195e00586f93d0081e2032d94955"},{url:"manifest.json",revision:"30900fd74e5c8df9d4053c7b96c13d01"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
