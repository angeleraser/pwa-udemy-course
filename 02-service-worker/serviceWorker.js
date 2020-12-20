self.addEventListener("fetch", (event) => {
  const {
    request: { url },
    request,
  } = event;
  if (url.includes(".jpg")) {
    event.respondWith(fetch(request));
  }
});
