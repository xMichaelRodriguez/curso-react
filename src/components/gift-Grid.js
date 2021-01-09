import React, { useEffect, useState } from "react";
import { GiftGridItem } from "./giftGridItem";
import { getGift } from "./helpers/getGfits";
export const GiftGrid = ({ categories }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    /* getGift(categories).then(img=>{setImages(img)})  es lo mismo que abajo*/
    getGift(categories).then(setImages);
  }, [categories]);

  return (
    <>
      <div className="container">
        <div className="row ">
          {images.map((img) => (
            <GiftGridItem {...img} />
          ))}
        </div>
      </div>
      ``
    </>
  );
};
