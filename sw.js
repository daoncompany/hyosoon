// 최소 서비스 워커: 오프라인 캐싱은 하지 않고, PWA(설치 가능한 웹앱) 요건만 충족시킨다.
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.clients.claim();
});

self.addEventListener('fetch', function (e) {
  e.respondWith(fetch(e.request));
});
