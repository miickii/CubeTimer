if(!self.define){let e,i={};const o=(o,r)=>(o=new URL(o+".js",r).href,i[o]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=i,document.head.appendChild(e)}else e=o,importScripts(o),i()})).then((()=>{let e=i[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let f={};const l=e=>o(e,n),t={module:{uri:n},exports:f,require:l};i[n]=Promise.all(r.map((e=>t[e]||l(e)))).then((e=>(s(...e),f)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BfKh9Jtx.css",revision:null},{url:"assets/index-D3XrL4ay.js",revision:null},{url:"index.html",revision:"cc77218efc09a59f55678f33f05f6b1b"},{url:"logo192.jpg",revision:"27da8f5d146c101a973eeef3f3a0b71c"},{url:"logo256.jpg",revision:"9b67c4a19fea0e681360e4354330fd8a"},{url:"logo384.jpg",revision:"7215700e08020487ff2e6d1855b00f65"},{url:"logo512.jpg",revision:"70e74a8925124e1d265c1ad6a03d53be"},{url:"registerSW.js",revision:"61fa9c9c7f07f40bcce84b0817391367"},{url:"logo192.jpg",revision:"27da8f5d146c101a973eeef3f3a0b71c"},{url:"logo256.jpg",revision:"9b67c4a19fea0e681360e4354330fd8a"},{url:"logo384.jpg",revision:"7215700e08020487ff2e6d1855b00f65"},{url:"logo512.jpg",revision:"70e74a8925124e1d265c1ad6a03d53be"},{url:"manifest.webmanifest",revision:"a8644e939eaf4010a72f1066dced650a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
