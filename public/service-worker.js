const CACHE_NAME = 'powerking-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/logo512.png', 
    '*'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                .then(() => self.skipWaiting());
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', (event) => {
    if(navigator.onLine){
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest).then(
            function (response) {
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                var responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache)
                });
                return response;
            }
        )
    } else {
        event.respondWith(
            caches.match(event.request).then(response => {
                if(response) {
                    return response;
                }
            })
        )
    }
});