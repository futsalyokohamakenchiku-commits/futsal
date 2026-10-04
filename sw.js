const V='futsal-v6',A=['./','index.html','config.js','manifest.webmanifest','icons/icon-192.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url),same=u.origin==location.origin;if(e.request.method!='GET'||(!same&&!u.host.includes('gstatic.com')))return;
 e.respondWith(caches.open(V).then(async c=>{const m=await c.match(e.request);if(!same&&m)return m;
  try{const r=await fetch(e.request,same?{cache:'no-cache'}:undefined);if(r.ok)c.put(e.request,r.clone());return r}catch(x){return m||Response.error()}}))});
