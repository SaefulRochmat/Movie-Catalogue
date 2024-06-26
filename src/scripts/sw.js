import 'regenerator-runtime';
import CacheHelper from "./utils/cache-helper";

const assetsToCache = [
    './',
    './android-chrome-192x192.png',
    './android-chrome-192x192.png',
    './aple-touch-icon.png',
    './favicon-16x16.png',
    './favicon-32x32.png',
    './index.html',
    './favicon.png',
    './app.bundle.js',
    './app.webmanifest',
    './sw.bundle.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));

    // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
    event.waitUntil(CacheHelper.deleteOldCache());

    // TODO: Delete old caches
});

self.addEventListener('fetch', (event) => {
    event.respondWith(CacheHelper.revalidateCache(event.request));
    // TODO: Add/get fetch request to/from caches
});