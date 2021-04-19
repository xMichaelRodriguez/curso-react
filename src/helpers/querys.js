import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
export const fetchAsync = async (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/Galery/...

  if (method === "GET") {
    return axios.get(baseUrl);
  } else if (method === "POST") {
    return axios.post(url, data, {
      headers: {
        accept: "application/json",
        ContentType: "multipart/form-data",
      },
    });
  } else if (method === "DELETE") {
    return axios.delete(url);
  }
};
