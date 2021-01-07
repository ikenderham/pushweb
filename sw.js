// on install - the application shell cached
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('sw-cache').then(function(cache){
            //static files that make up the application shell are cached
            return cache.add('index.html');
            // please add here as well to be cached! we havnt added as we have a simple app
            //but your website uses them.
        })
    );
});

// on install - the application shell cached
self.addEventListener('push', () =>{
    self.registration.sendNotification('Test besked', {})
});

//with request network
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //return it if there is a response, or else fetch again
        })
    );
});