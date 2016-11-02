/**
 * Created by Arthur on 11/2/2016.
 */


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache_first_v1.0').then(function(cache) {
            return cache.addAll([
                '/offline-web-apps/service_workers/cache_first/',
                '/offline-web-apps/service_workers/cache_first/index.html',
                '/offline-web-apps/service_workers/cache_first/style.css',
                '/offline-web-apps/service_workers/cache_first/about.html'
            ]);
        })
    );
});



self.addEventListener('fetch', function(event) {
    event.respondWith(
        
        caches.match(event.request)
            .then(function(response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});