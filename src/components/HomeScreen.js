import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAsync } from "../helpers/querys";

export const HomeScreen = () => {
  const [Images, setImages] = useState("");

  const petcioon = async () => {
    const imagenes = await fetchAsync("");
    const resp = await imagenes.json();
    setImages(resp.photo);
  };

  petcioon();

  return (
    <div className="row ">
      <div className="col-md-12">
        <Link to="/newFile" className="link-primary">
          Primary link
        </Link>
      </div>

      {Images !== "" &&
        Images.map((item, index) => (
          <div className="col-md-6 text-light">
            <img
              src={item.image}
              key={index}
              class="img-thumbnail mb-3"
              alt="..."
            ></img>
          </div>
        ))}
    </div>
  );
};
