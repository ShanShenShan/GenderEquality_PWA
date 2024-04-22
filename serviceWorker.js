const staticDevCoffee = "gender-equality-ph"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/image/5.1.svg",
  "/image/5.2.svg",
  "/image/5.3.svg",
  "/image/5.4.svg",
  "/image/5.5.svg",
  "/image/5.6.svg",
  "/image/5.7.svg",
  "/image/5.8.svg",
  "/image/5.9.svg",
  "/image/footer.svg",
  "/image/Header.jpg",
  "/image/logo.png",
  "/image/sub head.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })