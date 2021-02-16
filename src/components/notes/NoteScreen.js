import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { NoteAppBar } from "./NoteAppBar";

export const NoteScreen = () => {
  //con active:note renombro la variable
  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title } = formValues;

  const activeId = useRef(note.id);
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);
  return (
    <div className="note__main-content">
      <NoteAppBar />

      <div className="note__content">
        <input
          type="text"
          placeholder="some aweson title"
          className="note__title-input"
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
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="image"
            />
          </div>
        )}
      </div>
    </div>
  );
};
