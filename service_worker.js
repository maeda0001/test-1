var urlsToCache = [
    "index.html",
    "offline.html"
];


// キャッシュ名 なんでもいい
var CACHE_NAME  = "pwa-test-cache";
const CACHE_KEYS = [
  CACHE_NAME
];

// インストール時の処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
          .then(
          function(cache){
              return cache.addAll(urlsToCache);
          })
    );
});




// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});