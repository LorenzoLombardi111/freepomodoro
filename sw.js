const CACHE_NAME = 'pomodoro-v1';
const ASSETS = [
    '/', '/index.html', '/manifest.json', '/og-image.svg', '/favicon.svg', '/favicon.png',
    '/pages/vs-pomofocus.html', '/pages/vs-forest-app.html',
    '/pages/pomodoro-timer-for-students.html', '/pages/how-to-use-pomodoro-technique.html',
    '/pages/best-free-pomodoro-timer-2026.html'
];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(c => c || fetch(e.request))));
