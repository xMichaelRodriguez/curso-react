import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../actions/uiActions";
import { ModalSchreen } from "./ModalScreen";
export const ImageSchreen = ({ image, id }) => {
  const dispatch = useDispatch();

  const handleImageClick = () => {
    dispatch(uiOpenModal());
  };
  return (
    <>
      <div className="card shadow text-white">
        <img
          className="card-img-top"
          onDoubleClick={handleImageClick}
          src={image}
          key={id}
          alt="...."
        ></img>
      </div>

      <ModalSchreen item={id} />
    </>
  );
};
