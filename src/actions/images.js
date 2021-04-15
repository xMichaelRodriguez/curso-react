import { fetchAsync } from "../helpers/querys";
import { types } from "../types/types";

export const startImageLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchAsync("");

      const images = resp.data;
      dispatch(imagesLoaded(images.photo));
    } catch (err) {
      console.log(err);
    }
  };
};

const imagesLoaded = (images) => ({
  type: types.GetImages,
  payload: images,
});

export const startDeletedImage = (id) => {
  return async (dispatch) => {
    const resp = await fetchAsync(`deleteImage/${id}`, "", "DELETE");

    dispatch(imageDeleted());
    dispatch(startImageLoading());
    return resp.data;
  };
};

const imageDeleted = () => ({ type: types.DeleteImages });
