import { fireStoreDB } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import { fileUpload } from "../helpers/fileUpload";
//React-journal
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
    dispatch(addNewNote(doc.id, newNotes));
  };
};

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: { id, ...note },
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

export const SaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };

    delete noteToFirestore.id;

    await fireStoreDB
      .doc(`${uid}/journal/notes/${note.id}`)
      .update(noteToFirestore);

    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startAsyncUploading = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.fire({
      title: "uploading...",
      text: "please wait...",
      allowOutsideClick: false,
      allowEnterKey: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(SaveNote(activeNote));

    Swal.close();
  };
};

export const startingdeleteItem = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await fireStoreDB.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));

    Swal.fire("Delete", "Deleted Note", "success");
  };
};

export const deleteNote = (id) => ({
  type: types.notesDeleted,
  payload: id,
});

export const notesLogout = () => ({
  type: types.notesLogoutCleaning,
});
