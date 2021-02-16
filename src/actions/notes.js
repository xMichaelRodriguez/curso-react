import { fireStoreDB } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNotes = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const doc = await fireStoreDB
      .collection(`${uid}/journal/notes`)
      .add(newNotes);

    dispatch(activeNote(doc.id, newNotes));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startNotesLoading = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});
