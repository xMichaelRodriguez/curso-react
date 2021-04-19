import { fetchAsync } from "../helpers/querys";
import { types } from "../types/types";

export const startImageLoading = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchAsync("", {}, "GET");

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

export const startDeletedImage = () => {
  return async (dispatch, getState) => {
    const activeImage = await getState().activeImage;

    const resp = await fetchAsync(`deleteImage/${activeImage}`, "", "DELETE");

    dispatch(imageDeleted());
    await dispatch(clearImageActive());
    dispatch(startImageLoading());
    return resp.data;
  };
};
export const setActiveImage = (imageActive) => ({
  type: types.SetActiveImage,
  payload: imageActive,
});

export const clearImageActive = () => ({
  type: types.clearActiveImage,
});

const imageDeleted = () => ({ type: types.DeleteImages });
