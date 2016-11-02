/**
 * Created by Arthur on 11/2/2016.
 */


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('cache_only_v1.0').then(function(cache) {
            return cache.addAll([
                '/offline-web-apps/service_workers/cache_only/',
                '/offline-web-apps/service_workers/cache_only/index.html',
                '/offline-web-apps/service_workers/cache_only/style.css',
                '/offline-web-apps/service_workers/cache_only/about.html'
            ]);
        })
    );
});



this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
    );
});


/*
* caches interface
* https://developer.mozilla.org/en-US/docs/Web/API/Cache
*
*
*
* */