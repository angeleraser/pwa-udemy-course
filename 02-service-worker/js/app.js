// Verificar existencia del serviceWorker en el navegador
if (navigator.serviceWorker) {
  const { serviceWorker } = navigator;
  serviceWorker.register("./serviceWorker.js");
}
