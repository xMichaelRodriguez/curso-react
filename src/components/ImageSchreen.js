import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveImage } from "../actions/images";
import { uiOpenModal } from "../actions/uiActions";
import { ModalSchreen } from "./ModalScreen";
export const ImageSchreen = ({ image, id }) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState();
  const handleImageClick = () => {
    dispatch(uiOpenModal());
    setItem(id);

    dispatch(setActiveImage(id));
  };
  return (
    <>
      <div className="card shadow text-white">
        <img
          className="card-img-top animate__animated animate__fadeInDown"
          onDoubleClick={handleImageClick}
          src={image}
          key={id}
          alt="...."
        ></img>
      </div>

      <ModalSchreen />
    </>
  );
};
