self.addEventListener("fetch", (event) => {
  const {
    request: { url },
  } = event;
  if (url.includes("main.jpg")) {
    const customURL = "./img/main-patas-arriba.jpg";
    event.respondWith(fetch(customURL));
  }
});
