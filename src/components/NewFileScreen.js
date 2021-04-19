import React, { useState } from "react";

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import { useHistory } from "react-router";

import { fetchAsync } from "../helpers/querys";

export const NewFileScreen = () => {
  const history = useHistory();
  const [FormValue, setFormValue] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Image, setImage] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    const formulario = new FormData();
    let archivos = e.target.files;

    if (archivos) {
      for (let file = 0; file <= archivos.length; file++) {
        formulario.append("images", archivos[file]);
      }

      setFormValue(formulario);
    }
  };
  let secure_url;
  const handleUpload = async () => {
    if (FormValue.length <= 0) {
      alert("Selecciona una imagen");
    } else {
      setLoading(true);
      console.log("formvalue", FormValue);
      const resp = await fetchAsync("newFile", FormValue, "POST");
      console.log(resp);
      const urlImage = resp.data.msg;
      secure_url = urlImage;
      await setImage(secure_url);
      setLoading(false);
    }
  };

  return (
    <>
      {Loading ? (
        <LoadingMask
          style={{ backgroundColor: "#999999", heigth: "100%" }}
          loading={Loading}
          text={"loading..."}
        >
          <>
            <button
              className="btn btn-info mb-2"
              onClick={() => {
                history.push("/home");
              }}
            >
              <i className="fas fa-arrow-left"></i>&nbsp;
              <span>Return</span>
            </button>
            <div className="card bg-dark mb-3" style={{ height: 300 }}>
              <div className="card-header text-white">
                <h1>Uploading Image</h1>
              </div>
              <form
                id="form"
                className="card-body"
                onSubmit={handleUpload}
                encType="multipart/form-data"
              >
                <div className="mb-3">
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="file"
                      id="image"
                      name="image"
                      accept="image/jpg,.jpeg,.png,.jpg"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-block">
                  <button type="submit" className="btn btn-primary fs-2">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span> Upload</span>
                  </button>
                </div>
              </form>
            </div>
          </>
        </LoadingMask>
      ) : (
        <>
          <button
            className="btn btn-info mb-2"
            onClick={() => {
              history.push("/home");
            }}
          >
            <i className="fas fa-arrow-left"></i>&nbsp;
            <span>Return</span>
          </button>
          <div className="card bg-dark mb-3" style={{ height: 300 }}>
            <div className="card-header text-white">
              <h1>Uploading Image</h1>
            </div>
            <form
              id="form"
              className="card-body"
              onSubmit={handleUpload}
              encType="multipart/form-data"
            >
              <div className="mb-3">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    name="image"
                    multiple
                    accept="image/jpg,.jpeg,.png,.jpg"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="d-grid gap-2 d-md-block">
                <button type="submit" className="btn btn-primary fs-2">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span> Upload</span>
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      <div
        className="card p-0"
        style={{
          width: "50%",
          height: "50%",
          display: `${Image ? "block" : "none"}`,
        }}
      >
        <div className="card-img-top">
          {Image !== "" && (
            <div className="text-center">
              {Image.map((url) => (
                <img
                  src={url}
                  className="rounded img-thumbnail shadow-2-strong"
                  alt="+++o"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
