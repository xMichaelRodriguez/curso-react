import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startImageLoading } from "../actions/images";
import { ImageSchreen } from "./ImageSchreen";
import ilustration from "../helpers/undraw_empty_xct9.svg";
export const HomeScreen = () => {
  const dispatch = useDispatch();
  const imagesStore = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(startImageLoading(imagesStore));
  }, [dispatch]);

  return (
    <>
      {imagesStore.length <= 0 ? (
        <div className="container d-flex justify-content-center">
          <img
            alt="not found data"
            src={ilustration}
            className="img-thumbnail rounded text-center"
            style={{ width: "100%" }}
          />
        </div>
      ) : (
        <div className="row">
          <div className="card-columns">
            {imagesStore !== "" &&
              imagesStore.map(({ image, id }) => (
                <ImageSchreen image={image} id={id} key={id} />
              ))}
          </div>
        </div>
      )}

      <Link to="/newFile" className="fabs btn btn-info rounded-circle ">
        <i className="fas fa-plus fa-3x"></i>
      </Link>
    </>
  );
};
