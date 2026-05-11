const CACHE_NAME = 'toolbox-v1';
const STATIC_ASSETS = [
    './',
    './index.html',
    './assets/css/style.css',
    './assets/js/app.js',
    './manifest.json'
];

// 安装
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
            .then(() => self.skipWaiting())
    );
});

// 激活
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        }).then(() => self.clients.claim())
    );
});

// 请求拦截
self.addEventListener('fetch', event => {
    const { request } = event;
    
    // 跳过非 GET 请求
    if (request.method !== 'GET') return;
    
    // 跳过外部请求（广告、统计等）
    if (!request.url.startsWith(self.location.origin)) return;
    
    event.respondWith(
        caches.match(request).then(cached => {
            // 有缓存直接返回
            if (cached) {
                // 后台更新缓存
                fetch(request).then(response => {
                    if (response.ok) {
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(request, response);
                        });
                    }
                }).catch(() => {});
                return cached;
            }
            
            // 无缓存则请求网络
            return fetch(request).then(response => {
                if (!response.ok) return response;
                
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, clone);
                });
                
                return response;
            }).catch(() => {
                // 离线回退
                if (request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
