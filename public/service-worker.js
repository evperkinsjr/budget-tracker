const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css",
    "/index.js",
    "/db.js",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

// install
self.addEventListener("install", function (event) {
    
    // pre-cache transaction data
    event.waitUntil(
        caches.open(DATA_CACHE_NAME).then((cache) => cache.add("/api/transaction"))
    );

    // pre-cache all static assets
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
    );

    // activate service worker once it finished installing
    self.skipWaiting();
});

// activate

// fetch

// if the request is not for the API, serve static assets using "offline-first" approach