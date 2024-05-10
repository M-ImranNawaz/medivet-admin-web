'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "dc10d9f04637c589ada30238db6a324b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3637ef5ab3ca37a4331c20d6d3ba5336",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6393e368c4f27ec3414e9ed279c2e051",
".git/logs/refs/heads/main": "dc32ecdb206906150eb808109bb5a339",
".git/logs/refs/remotes/origin/main": "21ae9587087e338fc83ddac6157c20cb",
".git/objects/01/cc0ff2c86ecb3cfeeac6a6c7edad586f3d5ae6": "f92d3b981bcc5e3f104f7bc86e03c478",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0c/d661dbad38123cf73398fdba814e3024323030": "cfcc7718cf1f8980e41e0acab0939b02",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/7a513e8c2719d3113619c034cdc4c743796b0d": "d99c781b6af66b40a47b2de2a06ee469",
".git/objects/0e/b56da737ab1b2f6aac12c70d8e1fbacbf1f182": "658cb562355203627c2dd912cda2e42f",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/16/c03c21d7339f88cdd383e637da6092f38ad994": "bb921fc842b530909c8ec294ec314782",
".git/objects/17/1354abff06df4664560d3cd117205c9d3ddb66": "355cc2144986ebf83d2d97d7d95f36f1",
".git/objects/1d/795c1e03452d06012c801d9d246595687a5e13": "b5492be7331d0b9c22d0bbb49b315e55",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/4545ac52233016ef61f535802d60dc6339a688": "85bfdc2e11bb91cfa2610626f4e9ed38",
".git/objects/31/dfbe45fbfcd26ce595bd57943ca5ee4945c608": "ef677cf6925a57a417602e64f197e283",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/39/cf671bdf73a02cbdb4cf7548d2f5acf0a536eb": "c20a99bf3d1a748537416649121ddbc1",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/28f9a79867971189b129f5061abd75037173cc": "b38579723e7239eb42ba3d7b2fe60ab2",
".git/objects/4f/f4e2f0d2baf47e4650983350a2b05a336ffb48": "fc0b8ae96daf712a5530f4437205cef2",
".git/objects/59/31819a7e47fed257dbe7fcff19920c58671b8f": "ad166f6f563a3be82d9c15329af6828c",
".git/objects/5a/134d5bec3dfbdd550790de40ba1df68f5a8cd8": "e410077634a79748bfec512ca57470a6",
".git/objects/5b/fc2e294b00b7385ae62c7e5e96f0550315d9ff": "5f4b3b41e509876ceecefd62ae1629b7",
".git/objects/5f/1241654f76f4b7b9ec7e16aecb9eb7a3ebc35c": "366ebb3026b12252e95290c6fc924a3a",
".git/objects/64/6fc4307f2de9055950b8e620d33c218f2203d9": "c25059fdd8a33afd23d7d8400e02f7f4",
".git/objects/65/7620b783e41f55d2715e0bc5ad9485c2e366da": "8e3f44156cda4398e4b2c9fb4b67cead",
".git/objects/71/0e53f9d37410d0dc9b680fea89a903c26bf5cb": "2006ffca6e099d58a5a422f1eca39e92",
".git/objects/78/0d4d709174d89ab1af50bcf4d4e6d907e18fa0": "d0267718d4dafec47626c70ff51ad4fe",
".git/objects/7e/bfe9327a3cd657969b7b8cb05b43e6d2fc3104": "d4c212a9d90221ded36629f72033e03f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8a991d08d338e71e0db164e51722971bd5e140": "53d6dc924a05a7810b225cd48638178c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/196a21607e186f190cc8a82c64b5615886db64": "832cf9bf5e78755c20426b6c6b700dc7",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/1d8bb9068eec4b7a8e3d06b3a18b68dacb692a": "d8b8b6da34f660b745405d5c6b86931e",
".git/objects/9b/81625b390ff66095beac48eb7927f572afb8af": "21e19ecfcf46c52b6038fe66db05db9c",
".git/objects/9d/a5796e0d60a61f4c6c85bddc52383f288c4434": "2c9492f5f1476cf0c83911c32dc4f6c0",
".git/objects/a1/42e375be8ab8e06d33c05eaba7e4e91e904ca7": "9062c7f6d9a7dbee27be52aeb807bbae",
".git/objects/a2/fbaa4e686d14461bef3311d4bd7a225ec3d400": "bdef3544bc72af91b333ced2b5e68c66",
".git/objects/ad/f2b5c563524150acb94061352c532705cdce8d": "8436413bd1834e109b78b36edef884ff",
".git/objects/ae/54f2bdcd5090c795b2a75987ec675175b09eb2": "492e34caf799318a523ef55bae8eeb9d",
".git/objects/b4/7da2d744fb65a88fbad11751f79572dbdf4b7b": "9474c6c6415ebae026917c2850115924",
".git/objects/b5/69ef14870b97bc0719ff246588c5dd2027d220": "fe8e4c964781988c2600ba8890af18f5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/a7d368a2df3d876c26a2111f43bb45ae5b0a7e": "27b21940eb9c8182b8ed24d241ed09b8",
".git/objects/c5/abbd6f0dce06776a83c28904f2806cd66026b6": "7bea607abd4f333334205187dd5758d0",
".git/objects/ce/ebe01cf2784f0a1f2708af525d3401cb81a8cf": "3ff52f88dc22f7eea84dbd40ed1850d1",
".git/objects/cf/be8d680fcc66cb4053a61fafb0eb289054726d": "6fbd40a559e7e7262251a90e19d54e01",
".git/objects/d0/c7ee34d61df09adf95211a3cff61cefe35732c": "ec01cde49a8701f9b911550d99ba36c8",
".git/objects/d5/1c0f9ef7b384d409c5919ff73fe8fdab4049ce": "099b8fa632fbeff712e57e1deee2c623",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/edc5c408e07dc022d9372becf3961db637e5dc": "e5b23c749e739bdc8f5024ed487b1d73",
".git/objects/e0/6c5dcd2b65310ffbd958ceac926a28a92482d2": "21f1a745fb52ad5f4f60485168f64412",
".git/objects/e3/f3152beec068a5a589f9db48b93f75fae6e740": "2ac031feb16cac961da80d9b5f58d469",
".git/objects/e6/5e32553ada01ceeaab98e150f390b23e1d310e": "a06323a8ea5724b93afb4be196ee0afc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/848b2020f45961ea184d264e5690ae7613da14": "ba102ae3e1ab0be2d1838f155a96a3c9",
".git/objects/f5/17e915a47760875c38c5ce0c63d0b8c252b914": "f3abd452893c6d0ca1543ad56ea0fbe8",
".git/objects/f8/c08f8d47d1c9ea9d73a0248d593254b39d9398": "8493adf49c01d381f3d38ffa6eff9a18",
".git/refs/heads/main": "823d0ba25b7a6f5dd7afc7fb7d65769a",
".git/refs/remotes/origin/main": "823d0ba25b7a6f5dd7afc7fb7d65769a",
"assets/AssetManifest.bin": "4a7114e78bc4793eee700725c009b35e",
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
"index.html": "ade864c5f021a050648d6be919958bb3",
"/": "ade864c5f021a050648d6be919958bb3",
"main.dart.js": "908419a2dda63c7f146cf3dcd3a856ea",
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
