import React, { useState } from "react";

import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";

import { fetchAsync } from "../helpers/querys";

export const NewFileScreen = () => {
  const [FormValue, setFormValue] = useState("");
  const [Loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();

    setFormValue(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (FormValue.length <= 0) {
      alert("Selecciona una imagen");
    } else {
      setLoading(true);

      const resp = await fetchAsync("newFile", FormValue, "POST");
      const body = await resp.json();
      console.log(body);
      setLoading(false);
      alert("imagen subida", body);
    }
  };
  return (
    <div>
      {Loading ? (
        <LoadingMask
          style={{ backgroundColor: "#ffffff" }}
          loading={Loading}
          text={"loading..."}
        >
          <div className="card bg-dark" style={{ height: 300 }}>
            <div className="card-header text-white    ">
              <h1>Uploading Image</h1>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div
                className="btn btn-primary d-flex inline justify-content-center"
                onClick={handleUpload}
              >
                <box-icon
                  name="cloud-upload"
                  type="solid"
                  color="#fff"
                ></box-icon>
                <span>Upload</span>
              </div>
            </div>
          </div>
        </LoadingMask>
      ) : (
        <div className="card bg-dark" style={{ height: 300 }}>
          <div className="card-header text-white    ">
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
                  name="image"
                  accept="image/jpg,.jpeg,.png"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="d-grid gap-2 d-md-block">
              <button type="submit" className="btn btn-primary fs-2">
                <box-icon
                  name="cloud-upload"
                  type="solid"
                  color="#fff"
                  size="sm"
                  pull="left"
                ></box-icon>
                <span> Upload</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
