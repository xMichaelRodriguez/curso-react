const baseUrl = process.env.REACT_APP_API_URL;

export const fetchSync = (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/...

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchAsync = (endPoint, data, method = "GET") => {
  const url = `${baseUrl}/${endPoint}`; //localhost:4000/...

  const token = localStorage.getItem("x-token") || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        token: token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
      body: JSON.stringify(data),
    });
  }
};
const fetching = {
  fetchSync,
  fetchAsync,
};
export default fetching;
