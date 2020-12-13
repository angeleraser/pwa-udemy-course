const fetchAndXHTTPRequest = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "https://reqres.in/api/users", true);
  request.send(null);
  request.onreadystatechange = () => {
    const { response, readyState } = request;
    if (readyState === 4) {
      const resp = JSON.parse(response);
      console.log(resp);
    }
  };

  fetch("https://reqres.in/api/users")
    .then((resp) => resp.json())
    .then(console.log);
};

const BlobClass = () => {
  const img = document.getElementById("img");
  fetch("./superman.png")
    .then((resp) => resp.blob())
    .then((blobImg) => {
      const imgUrl = URL.createObjectURL(blobImg);
      img.src = imgUrl;
    })
    .catch((error) => console.log(error));
};

const ResponseCloneClass = () => {
  // No se puede leer el mismo body stream de la respuesta dos veces
  fetch("https://reqres.in/api/users/1")
    .then((resp) => {
      resp
        .clone()
        .json()
        .then(({ data: user }) => {
          console.log(user);
        });
      resp.json().then(({ data: user }) => {
        console.log(user);
      });
    })
    .catch((error) => console.log(error));
};

const ResponsesErrors = () => {
  // Errores 404 y 400 no dan erroes en el catch
  fetch("https://reqres.in/api/users/1000")
    .then((resp) => {
      if (resp.ok) {
        console.log(resp);
        return resp.json();
      } else {
        throw new Error("No existe el usuario");
      }
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => console.log(error));
};
