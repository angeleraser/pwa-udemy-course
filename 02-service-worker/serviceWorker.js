self.addEventListener("fetch", (event) => {
  const {
    request: { url },
    request,
  } = event;
  if (url.includes("style.css")) {
    const customResponse = new Response(
      `
      body {
        background-color: red;
        color: #fff;
      }
    `,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );
    event.respondWith(customResponse);
  }
});
