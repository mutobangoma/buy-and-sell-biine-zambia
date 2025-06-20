const CACHE_NAME = 'biine-static-v1';
const OFFLINE_URLS = ['/', '/index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return (
        cachedResponse ||
        fetch(event.request).catch(() =>
          event.request.mode === 'navigate'
            ? caches.match('/index.html')
            : new Response('Offline', { status: 503, statusText: 'Offline' })
        )
      );
    })
  );
});
