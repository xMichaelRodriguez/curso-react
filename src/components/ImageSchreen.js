import React from "react";

export const ImageSchreen = ({ image, id }) => {
  const handleImageClick = () => {
    console.log(image, id);
  };
  return (
    <div>
      <div className="card shadow text-white">
        <img
          className="card-img-top"
          onDoubleClick={handleImageClick}
          src={image}
          key={id}
          alt="index"
        ></img>
      </div>
    </div>
  );
};
