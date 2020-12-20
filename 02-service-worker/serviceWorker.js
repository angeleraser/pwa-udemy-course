self.addEventListener("fetch", async (event) => {
  const {
    request: { url },
  } = event;
  const response = fetch(url).then((resp) =>
    resp.ok ? resp : fetch("./img/main.jpg")
  );
  event.respondWith(response);
});
