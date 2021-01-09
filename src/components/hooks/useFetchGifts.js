import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGfits";

export const useFetchGifts = (categories) => {
  const [state, SetState] = useState({ data: [], loading: true });

  useEffect(() => {
    getGift(categories).then((img) => {
      
        SetState({
          data: img,
          loading: false,
        });
     
    });
  }, [categories]);
  return state;
};
