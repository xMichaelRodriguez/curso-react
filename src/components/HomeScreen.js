import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsync } from "../helpers/querys";
import { ImageSchreen } from "./ImageSchreen";

export const HomeScreen = () => {
  const [Images, setImages] = useState("");

  useEffect(() => {
    const petcioon = async () => {
      const imagenes = await fetchAsync("");
      const resp = await imagenes.json();

      setImages(resp.photo);
    };
    petcioon();
  }, []);

  return (
    <>
      <div className="row ">
        <div className="col-md-12 mb-4">
          <Link
            to="/newFile"
            className="link-primary "
            style={{ fontSize: "30px" }}
          >
            Subir Imagen Vueva
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="card-columns">
          {Images !== "" &&
            Images.map(({ image, id }) => (
              <ImageSchreen image={image} id={id} />
            ))}
        </div>
      </div>
    </>
  );
};
