const baseUrl = process.env.REACT_APP_API_URL;
console.log(baseUrl);
export const fetchAsync = async (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/Galery/...

  if (method === "GET") {
    return fetch(url);
  } else {
    const formData = new FormData();

    formData.append("file", data);
  
    console.log(formData)
  /*   return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }); */
  }
};
