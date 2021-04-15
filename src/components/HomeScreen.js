import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startImageLoading } from "../actions/images";
import { ImageSchreen } from "./ImageSchreen";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const imagesStore = useSelector((state) => state.images);
  useEffect(() => {
    dispatch(startImageLoading(imagesStore));
  }, [dispatch]);

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
          {imagesStore !== "" &&
            imagesStore.map(({ image, id }) => (
              <ImageSchreen image={image} id={id} />
            ))}
        </div>
      </div>
    </>
  );
};
