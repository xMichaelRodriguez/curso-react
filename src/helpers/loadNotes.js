import { fireStoreDB } from "../firebase/firebaseConfig";

export const loadNotes = async (uid) => {
  const noteSnap = await fireStoreDB.collection(`${uid}/journal/notes`).get();
  const notes = [];
  noteSnap.forEach((snapHijo) => {
    notes.push({
      id: snapHijo.id,
      ...snapHijo.data(),
    });
  });
 
  return notes;
};
