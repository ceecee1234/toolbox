const CACHE_NAME = 'toolbox-v3';
const STATIC_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './js/tools-data.js',
    './js/toolbox-core.js',
    './tools/fangdai.html',
    './tools/geshui.html',
    './tools/json.html',
    './tools/base64.html',
    './tools/timestamp.html',
    './tools/qrcode.html',
    './tools/password.html',
    './tools/uuid.html',
    './tools/url-encode.html',
    './tools/md5.html',
    './tools/color.html',
    './tools/regex.html',
    './tools/diff.html',
    './tools/dev-cron.html',
    './tools/image-compress.html',
    './tools/xiaohongshu-generator.html',
    './tools/markdown-editor.html',
    './tools/wordcount.html',
    './tools/case-convert.html',
    './tools/text-dedup.html',
    './tools/batch-replace.html',
    './tools/lorem.html',
    './tools/pinyin.html',
    './tools/seo-title-gen.html',
    './tools/meta-gen.html',
    './tools/keyword-density.html',
    './tools/robots-gen.html',
    './tools/sitemap-gen.html',
    './tools/http-status.html',
    './tools/open-graph.html',
    './tools/structured-data.html',
    './tools/backlink.html',
    './tools/page-speed.html',
    './tools/length.html',
    './tools/weight.html',
    './tools/area.html',
    './tools/temperature.html',
    './tools/data-size.html',
    './tools/speed.html',
    './tools/fuli.html',
    './tools/cunkuan.html',
    './tools/nianzhong.html',
    './tools/gongjijin.html',
    './tools/chedai.html',
    './tools/tihuan.html',
    './tools/age.html',
    './tools/datediff.html',
    './tools/countdown.html',
    './tools/workday.html',
    './tools/calendar.html',
    './tools/pomodoro.html',
    './tools/note.html',
    './tools/todo.html',
    './tools/habits.html',
    './tools/budget.html',
    './tools/meeting-cost.html',
    './tools/img-crop.html',
    './tools/img-resize.html',
    './tools/img-watermark.html',
    './tools/img-format.html',
    './tools/img-base64.html',
    './tools/img-color-picker.html',
    './tools/ico-gen.html',
    './tools/svg-editor.html',
    './tools/css-gradient.html',
    './tools/border-radius.html',
    './tools/box-shadow.html',
    './tools/flexbox.html',
    './tools/grid-gen.html',
    './tools/ai-nav.html',
    './tools/chatgpt-guide.html',
    './tools/midjourney-guide.html',
    './tools/prompt-lib.html',
    './tools/copywriting.html',
    './tools/freelance.html',
    './tools/side-hustle.html',
    './tools/affiliate.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return Promise.allSettled(
                    STATIC_ASSETS.map(url => cache.add(url).catch(() => {}))
                );
            })
            .then(() => self.skipWaiting())
    );
});

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

self.addEventListener('fetch', event => {
    const { request } = event;

    if (request.method !== 'GET') return;
    if (!request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(request).then(cached => {
            if (cached) {
                fetch(request).then(response => {
                    if (response.ok) {
                        caches.open(CACHE_NAME).then(cache => cache.put(request, response));
                    }
                }).catch(() => {});
                return cached;
            }

            return fetch(request).then(response => {
                if (!response.ok) return response;
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
                return response;
            }).catch(() => {
                if (request.headers.get('accept') && request.headers.get('accept').includes('text/html')) {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
