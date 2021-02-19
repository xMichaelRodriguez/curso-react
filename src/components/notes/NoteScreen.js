import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startingdeleteItem } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  //con active:note renombro la variable
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startingdeleteItem(id));
  };
  return (
    <div className="note__main-content animate__animated  animate__fadeIn">
      <NoteAppBar />
      <div className="note__content ">
        <input
          type="text"
          placeholder="some aweson title"
          className="note__title-input "
          name="title"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="what happened today?"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="note__image">
            <img src={note.url} alt="image" />
          </div>
        )}
      </div>

      <button className="btn btn-danger" type="button" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
};
