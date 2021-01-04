const getImage = async () => {
  try {
    const apiKey = "VhegtbryG91P1UrFcad9NiBEvQUAuAFW";

    const API = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await API.json();
    const { url } = data.images.original;
    let imagen = document.createElement("img");
    imagen.src = url;

    // Añadir el nodo Element como hijo de la pagina
    return document.body.appendChild(imagen);
  } catch (error){console.error(error)}
};
getImage();
