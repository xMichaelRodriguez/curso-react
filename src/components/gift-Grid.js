import { PropTypes } from "prop-types";
import React from "react";
import { GiftGridItem } from "./giftGridItem";
import { useFetchGifts } from "./hooks/useFetchGifts";

export const GiftGrid = ({ categories }) => {
  const { data: images, loading } = useFetchGifts(categories);

  return (
    <>
      <h3>{categories}</h3>

      {loading && (
        <p className=" animate__animated animate__flash">Loading...</p>
      )}
      <div className="container">
        <div className="row ">
          <div className="col s12 m8 l6">
            <div className="card m6 z-depth-3 ">
              {images.map((img) => (
                <GiftGridItem key={img.id} {...img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
GiftGrid.propType = {
  categories: PropTypes.string.isRequired,
};