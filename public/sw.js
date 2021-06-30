
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
    {
      "url": "style/main.css",
      "revision": "5cc6b8b0154003ba255926700342a1b0"
    },
    {
      "url": "/",
      "revision": "299e589e85bf16e3b7bf2b9b25efea69"
    },
    {
      "url": "js/main.js",
      "revision": "732b3d64bda4cf4594650a7dbbfca326"
    },
    {
      "url": "images/home/business.jpg",
      "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
    },
    {
      "url": "images/icon/icon.svg",
      "revision": "0d077eac3b5028d3543f7e35908d6ecb"
    }
  ]);

  workbox.routing.registerRoute(
    /(.*)articles(.*)\.(?:png|gif|jpg)/,
    workbox.strategies.cacheFirst({
      cacheName: 'images-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        })
      ]
    })
  );

  self.addEventListener('notificationclose', event => {
    const notification = event.notification;
    const primaryKey = notification.data.primaryKey;

    console.log('Closed notification: ' + primaryKey);
  });

  self.addEventListener('notificationclick', event => {

    // TODO 2.8 - change the code to open a custom page
  
    clients.openWindow('https://google.com');
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}