const apiKey = "VhegtbryG91P1UrFcad9NiBEvQUAuAFW";

const API = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

API.then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
     let imagen = document.createElement("img");
    imagen.src = url;

    // Añadir el nodo Element como hijo de la pagina
    document.body.appendChild(imagen);
  })
  .catch(console.warn);
