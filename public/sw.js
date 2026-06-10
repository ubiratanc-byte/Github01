// Service Worker - optimized cache strategy
const CACHE_NAME = 'jato-alpha-v3';

// Install - skip waiting immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate - clean old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - stale-while-revalidate for static assets, network-first for HTML
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  if (request.method !== 'GET') return;
  
  // Skip analytics/tracking
  const url = request.url;
  if (url.includes('gtag') || url.includes('hotjar') || url.includes('utmify') || 
      url.includes('googletagmanager') || url.includes('clarity.ms') || url.includes('pxa.')) {
    return;
  }
  
  const isStaticAsset = url.match(/\.(png|jpg|jpeg|webp|gif|svg|css|js|woff|woff2)(\?|$)/);
  
  if (isStaticAsset) {
    // Stale-while-revalidate for static assets
    event.respondWith(
      caches.match(request).then((cached) => {
        const fetchPromise = fetch(request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        }).catch(() => cached);
        
        return cached || fetchPromise;
      })
    );
  }
});
