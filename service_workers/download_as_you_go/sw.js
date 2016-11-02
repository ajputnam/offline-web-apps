/**
 * Created by Arthur on 11/2/2016.
 */


this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('download_as_you_go_v1.0').then(function(cache) {
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
            .then(function(resp) {
            return resp || fetch(event.request)
                    .then(function(response) {
                    return caches.open('download_as_you_go_v1.0')
                        .then(function(cache) {
                        cache.put(event.request, response.clone()); // response is a stream which is why you must clone it.
                        return response;
                    });
                });
        })
    );
});
