if(!self.define){let e,o={};const i=(i,r)=>(i=new URL(i+".js",r).href,o[i]||new Promise((o=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=o,document.head.appendChild(e)}else e=i,importScripts(i),o()})).then((()=>{let e=o[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(o[s])return;let d={};const l=e=>i(e,s),c={module:{uri:s},exports:d,require:l};o[s]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(n(...e),d)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-DKVMhnbY.css",revision:null},{url:"assets/index-DuMkA3Lm.js",revision:null},{url:"index.html",revision:"be3e1324a5f6e3569c63a971eb8be39d"},{url:"logo192.jpg",revision:"27da8f5d146c101a973eeef3f3a0b71c"},{url:"logo192.png",revision:"d4b259245b407cd57d0482af5d8409c2"},{url:"logo256.jpg",revision:"9b67c4a19fea0e681360e4354330fd8a"},{url:"logo256.png",revision:"9c2e893f544c9f22a642bf248a75dbd6"},{url:"logo384.jpg",revision:"7215700e08020487ff2e6d1855b00f65"},{url:"logo384.png",revision:"13a23c642b81ddde2dd1956e8b31ed99"},{url:"logo512.jpg",revision:"70e74a8925124e1d265c1ad6a03d53be"},{url:"logo512.png",revision:"64aac30102f7f7a4587c9a095ad09e06"},{url:"registerSW.js",revision:"61fa9c9c7f07f40bcce84b0817391367"},{url:"logo192.png",revision:"d4b259245b407cd57d0482af5d8409c2"},{url:"logo256.png",revision:"9c2e893f544c9f22a642bf248a75dbd6"},{url:"logo384.png",revision:"13a23c642b81ddde2dd1956e8b31ed99"},{url:"logo512.png",revision:"64aac30102f7f7a4587c9a095ad09e06"},{url:"manifest.webmanifest",revision:"d63406f9ebbbe5c2600fcd945f12d61b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
