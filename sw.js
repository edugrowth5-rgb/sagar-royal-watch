const cacheName = 'sagar-watch-v3.1';
const assets = ['./', './index.html','1000047883-removebg-preview.png'];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(rec => rec || fetch(evt.request)));
});
