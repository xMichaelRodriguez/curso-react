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
      <div className="row">
        <div className="card-columns">
          {imagesStore !== "" &&
            imagesStore.map(({ image, id }) => (
              <ImageSchreen image={image} id={id} key={id} />
            ))}
        </div>
      </div>

      <Link to="/newFile" className="fabs btn btn-info rounded-circle ">
        <i className="fas fa-plus fa-3x"></i>
      </Link>
    </>
  );
};
