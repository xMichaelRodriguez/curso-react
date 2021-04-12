import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
export const fetchAsync = async (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/Galery/...
  if (method === "GET") {
    return fetch(baseUrl);
  } else {
    return axios.post(url, data, {
      headers: { ContentType: "multipart/form-data" },
    });
  }
};
