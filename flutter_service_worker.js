'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4a7114e78bc4793eee700725c009b35e",
"assets/AssetManifest.bin.json": "761ad56d0114d66d910165dcbd51bc06",
"assets/AssetManifest.json": "1a5e6abdd9889561e3369bb1b48f276c",
"assets/assets/imgs/foodImg.png": "577877d3b09e46c51cb8126cb1bc7a1a",
"assets/assets/imgs/splashImg.png": "38f5f16f3c9ba3243bbdae1ba704e8ad",
"assets/assets/svgs/bellSvg.svg": "b0836b5e16af943bcb358df333fd1275",
"assets/assets/svgs/deleteSvg.svg": "e04c70fb9ab4f89e07b9686855c43557",
"assets/assets/svgs/editSvg.svg": "de82ab721bd1deb60f0157b303c85b9b",
"assets/assets/svgs/homeSvg.svg": "35fccae57f778a38aa878bd239c68799",
"assets/assets/svgs/ordersSvg.svg": "097dd21c13262dc4b7cf52de47975331",
"assets/assets/svgs/productsSvg.svg": "d901d500ee549578747a05e9bd6dae3c",
"assets/assets/svgs/profileSvg.svg": "bda165007e5501f2a6549f376727ec88",
"assets/assets/svgs/saleDownSvg.svg": "50edad291578cd05bba8403f6265cea7",
"assets/assets/svgs/saleUpSvg.svg": "cdd204065c8c5f8b465ffdd373fd3ead",
"assets/assets/svgs/searchFilterSvg.svg": "220743bb9b6f3dce375af0c119d7a883",
"assets/assets/svgs/settingSvg.svg": "43aa67a892f07185a9e5c5b7a81d44c1",
"assets/assets/svgs/statConversionSvg.svg": "ac066ec9e89f9c7dc8a6bc95eeb45d62",
"assets/assets/svgs/statSaleSvg.svg": "f6004fd2a49300b8bb24cec88d917061",
"assets/assets/svgs/statUserSvg.svg": "256a7cec995f3a6d84df88c210261cc0",
"assets/assets/svgs/statWalletSvg.svg": "ad1b0233d5e34eb984d88102dfa8b9d6",
"assets/assets/svgs/usersSvg.svg": "a6d3c4e880a76426a9931ee7068d1b51",
"assets/FontManifest.json": "d1e68418f8e7c6ba38a16baa5c2dc076",
"assets/fonts/EncodeSans-Black.ttf": "c5d6d6bcfc6a87269cc0adbe81103e47",
"assets/fonts/EncodeSans-Bold.ttf": "7ba5dda3a88fbcfda405e74b4e5e502b",
"assets/fonts/EncodeSans-ExtraBold.ttf": "12be66c693224944fbf6b93f7f5e320c",
"assets/fonts/EncodeSans-ExtraLight.ttf": "abd0218fa7f203abc64ab4826e087973",
"assets/fonts/EncodeSans-Light.ttf": "637ffd9c789aa1f1b789bce660440d6c",
"assets/fonts/EncodeSans-Medium.ttf": "6271a1cbb04b090da20e409e4e253458",
"assets/fonts/EncodeSans-Regular.ttf": "d7426df9a3c611e03e2422fbdc206cb7",
"assets/fonts/EncodeSans-SemiBold.ttf": "5249a0f60a2d9d0e10bdce0b230ea5b3",
"assets/fonts/EncodeSans-Thin.ttf": "9bfecbed17b9b49e47cc41f14a056681",
"assets/fonts/MaterialIcons-Regular.otf": "a5808036a05b490bd3bb00da30157fc8",
"assets/NOTICES": "dfef8ced6d07155e2a00d7750de00e81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0383b3e57b8519c7f016594488ba1576",
"/": "0383b3e57b8519c7f016594488ba1576",
"main.dart.js": "e2270cf81c359cd77fdc51b92becd6e4",
"manifest.json": "09ce9e9e3844d30e9cdb5a36f8ed42e2",
"version.json": "b1d418da3717adbfeac2e270e6d46778"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
