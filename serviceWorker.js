const staticDevCoffee = "gender-equality-ph"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/images/5.1.svg",
  "/images/5.2.svg",
  "/images/5.3.svg",
  "/images/5.4.svg",
  "/images/5.5.svg",
  "/images/5.6.svg",
  "/images/5.7.svg",
  "/images/5.8.svg",
  "/images/5.9.svg",
  "/images/footer.svg",
  "/images/Header.jpg",
  "/images/logo.png",
  "/images/sub head.jpg",
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