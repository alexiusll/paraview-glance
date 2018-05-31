importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({ clientsClaim: true });
workboxSW.precache([
  {
    "url": "7b3ee4270b6aa7d04653bdca14a30b1b.svg",
    "revision": "7b3ee4270b6aa7d04653bdca14a30b1b"
  },
  {
    "url": "glance-external-ITKReader.js",
    "revision": "0489949b2c6976797a97479288a140a3"
  },
  {
    "url": "glance-external-Workbox.js",
    "revision": "d9de853d54e847cce66ae652b796086f"
  },
  {
    "url": "index.html",
    "revision": "a471f1e498ad9a1ae30fabd0ac3e14a7"
  },
  {
    "url": "ParaView.png",
    "revision": "08ff220c5c71d1534ce3de8fe00e8f0c"
  },
  {
    "url": "ParaView.svg",
    "revision": "04d258566ddad05bb950c9ff7600edff"
  },
  {
    "url": "workbox-sw.prod.v2.1.3.js",
    "revision": "a9890beda9e5f17e4c68f42324217941"
  }
]);

workboxSW.router.registerRoute(
  /\.js|\.png|\.wasm$/,
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: 'staleWhileRevalidateContent',
    cacheExpiration: {
      maxEntries: 50,
      maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    },
  })
);