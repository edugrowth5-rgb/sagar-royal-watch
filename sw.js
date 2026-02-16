const cacheName = 'sagar-watch-v3';
const assets = ['./', './index.html'];

self.addEventListener('install', evt => {
  evt.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', evt => {
  evt.respondWith(caches.match(evt.request).then(rec => rec || fetch(evt.request)));
});
