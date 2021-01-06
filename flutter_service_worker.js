'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2bc8a638ea7ba010565647ccf53d8097",
"index.html": "a9e7094d69ba1564010cd09cedf77eb7",
"/": "a9e7094d69ba1564010cd09cedf77eb7",
"main.dart.js": "d2c2d818a32e476e8d7efa7f340cf7f2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "95e03bfab09d021c7b5cc3b65d8667b9",
"assets/images/yt_logo_rgb_dark.png": "2041e4dc148e8f833f13497fe4d43214",
"assets/images/instagram.jpg": "6136279ff672eb97dbb2503acfc3685c",
"assets/images/livro.png": "37cea20f55d852ebdbace07fcdffc2b8",
"assets/images/digital.png": "4b14b61e457037d27ec29d255634329b",
"assets/images/Screen%2520Shot%25202019-11-11%2520at%252019.12.50.png": "22faa2e6ba23f427971fd4c8ac27cf49",
"assets/images/livro2Dig.jpg": "eb257b25a435c74f60b93bf8dc7f6ad7",
"assets/images/Screen%2520Shot%25202019-09-27%2520at%252019.40.59.png": "a8177940b961eb70883320800121d65b",
"assets/images/insta4.png": "a472723e9482a6e85c0a49dc2c5265af",
"assets/images/Mockups/livro.png": "c6decd15a8411b6f9c4e159bf72ec7c4",
"assets/images/Mockups/capa_low.jpg": "f295e5b08c05665faa6cd6f1141d1699",
"assets/images/Mockups/alemdomar1%2520copy.png": "326471b9a146cefe52f8cf1d2531b05d",
"assets/images/Mockups/Aberto_singapura.jpg": "253f2442dbef316f6be19d458bdcd4af",
"assets/images/Mockups/Aberto_New%2520Zealand.jpg": "140a28db85a11987a225585c8a06d225",
"assets/images/Mockups/alemdomar1.png": "11dc609076cf3e60b0ea775c4014381f",
"assets/images/Mockups/Aberto_seoul.jpg": "598c7c29941d2d28c00e932e046bc6e9",
"assets/images/Mockups/alem.jpg": "049a199a419f5e24681643520726a3ef",
"assets/images/Mockups/Capa%2520copy.jpg": "c03d2c582058628e3394355c3fce6221",
"assets/images/Mockups/Aberto_bayofislands.jpg": "cf7b6db8e68d160a20b44e5ba28fc565",
"assets/images/Mockups/Capa.jpg": "d474e24b07da263e65672af0ef1152e9",
"assets/images/insta3.png": "d16d1ab4476e80641b844bcd02c49c21",
"assets/images/insta.png": "729f7798561be2cb67f39e916a22eb6a",
"assets/images/MentorMe/Hammock1.zip": "4a6a243472848dd3fdfae41221152479",
"assets/images/MentorMe/MentorsIcons.png": "d48f5d9f807ca5970ef1f0c239de890a",
"assets/images/MentorMe/american.png": "245b8a337d1a201e0d1688b7a80e11ce",
"assets/images/MentorMe/Screen%2520Shot%25202021-01-04%2520at%252008.30.01.png": "2ec93a9d4ad9a245fa81812446c06140",
"assets/images/MentorMe/Mentores.png": "b374ae85aadfeb481e04b900477fb176",
"assets/images/MentorMe/diners.png": "26aba02c99a120f6cf342bebaa7a82bc",
"assets/images/MentorMe/Visa.png": "5504171cb70ffd16590e5014fff7e2f1",
"assets/images/MentorMe/hipercard.png": "504c96c13a1f39c9d5a126f82b8df93b",
"assets/images/MentorMe/elo.png": "cce8127aca1a146cb2208b6fc8e98e68",
"assets/images/MentorMe/Mentors.svg": "2d3b364ee7e8cc34000dd7ba15fdf4bb",
"assets/images/MentorMe/noun_new_3472203.svg": "7d0b37e1f282b8489d7ccf20a69ecc95",
"assets/images/MentorMe/DSC_0407.ai": "9f52e2136561131d75150f9dae83ffee",
"assets/images/MentorMe/Redepng.png": "1368cdaaca0fc00fc17e8c1d0a7e6baa",
"assets/images/MentorMe/Screen%2520Shot%25202021-01-04%2520at%252007.56.31.png": "9b7aef267765d432df7625c20c2ecdeb",
"assets/images/MentorMe/mercadolivre.png": "8f11c94a3be869c9774ceff4d5fc34e1",
"assets/images/MentorMe/Screen%2520Shot%25202021-01-04%2520at%252007.56.43.png": "1ca4de788af780d9d4dd1f13dc281295",
"assets/images/MentorMe/vagas.png": "c9584edc37bed75e45f2ec1f5f555794",
"assets/images/MentorMe/noun_win_2877953.svg": "3c65d98f5eaec45f7364db8fbeabb863",
"assets/images/MentorMe/Mastercard.png": "025ecafc03522aa61ad3e9a486da7234",
"assets/images/MentorMe/DSC_0407.jpg": "56d174a8d1fc26f80b672df88228b9f1",
"assets/images/MentorMe/DJI_0115.jpg": "64f508774b40744931b153df37eebe12",
"assets/images/MentorMe/Paypal.png": "6693db6bc71c9eddf66605dcc53ed170",
"assets/images/MentorMe/VID_140931009_112423_062.mp4": "721943e558f9369955fbc9f433f70542",
"assets/images/MentorMe/launch.png": "92e3f1cf7e42266d63efd883129cf84b",
"assets/images/fav.png": "e3a1f27b45c0a76634e18d40ca5dd36c",
"assets/images/livros.jpg": "dd33526e11162f2ad7ff46829ec42c61",
"assets/images/livro2.jpg": "f6c27edac5d3a0d8c1d4077223390094",
"assets/images/livros%2520copy.jpg": "8d3c9a66cc685c2488d7961041b5aa26",
"assets/AssetManifest.json": "949c917972dfba34c0ed0322f783f170",
"assets/NOTICES": "300648dea7f1d301a8db567c3692b72e",
"assets/FontManifest.json": "08f601c86855edade6d7e47df403189e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/open_iconic_flutter/assets/open-iconic.woff": "3cf97837524dd7445e9d1462e3c4afe2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/fonts/Bariol_Regular.otf": "ffe84263f982cbe9bae053b0cbb6dcda",
"assets/assets/fonts/Bariol_Light.otf": "bc003c9f8669b675919825cf8cba41d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
